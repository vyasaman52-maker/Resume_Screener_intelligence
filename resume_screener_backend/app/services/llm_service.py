"""
STATUS: WORKING - Objective 9

Uses the google-genai SDK (the old google-generativeai package is fully
deprecated - Google ended all support for it).

Two functions:
1. generate_resume_feedback() - one-shot, structured JSON output
   (feedback list + interview questions list)
2. chat_reply() - open-ended, multi-turn conversation about the
   resume/job/career generally, returns free text, remembers history
   via the session's chat_history (passed in by the router).

Retry strategy
--------------
If the primary model returns 503 / UNAVAILABLE (high demand), we wait
briefly and retry up to MAX_RETRIES times, then fall back through a
list of alternative models before giving up.
"""
import json
import time
import logging

from google import genai
from google.genai import types

from app.config import GEMINI_API_KEY

logger = logging.getLogger(__name__)

_client = genai.Client(api_key=GEMINI_API_KEY)

# ── Model priority list ────────────────────────────────────────────────────
# We try each model in order. If one is overloaded (503) we move to the next.
_MODELS = [
    "gemini-3.5-flash",        # Latest flash model
    "gemini-2.5-flash",        # Very fast, latest 2.5
    "gemini-2.0-flash",        # Fast widely available
    "gemini-flash-latest",     # Stable fallback alias
]

MAX_RETRIES = 3          # retries per model before moving to next
RETRY_DELAY = 2.0        # seconds to wait between retries (doubles each time)


def _is_overloaded(exc: Exception) -> bool:
    """Return True when the error is a transient 503 / overload signal."""
    msg = str(exc).lower()
    return any(k in msg for k in ("503", "unavailable", "overloaded", "high demand", "resource exhausted", "429"))


def _generate_with_retry(fn, *args, **kwargs):
    """
    Call fn(*args, **kwargs) cycling through _MODELS on 503 errors.
    fn receives the model name as its first argument.
    Raises the last exception if every model & retry fails.
    """
    last_exc = None
    for model in _MODELS:
        delay = RETRY_DELAY
        for attempt in range(1, MAX_RETRIES + 1):
            try:
                return fn(model, *args, **kwargs)
            except Exception as exc:
                last_exc = exc
                if _is_overloaded(exc):
                    logger.warning(
                        "Model %s overloaded (attempt %d/%d). "
                        "Waiting %.1fs before retry.",
                        model, attempt, MAX_RETRIES, delay,
                    )
                    time.sleep(delay)
                    delay *= 2   # exponential backoff
                else:
                    # Non-transient error (bad request, auth, etc.) — stop immediately
                    raise
        logger.warning("Model %s exhausted retries, trying next model.", model)
    raise last_exc  # all models failed


# ── Public API ─────────────────────────────────────────────────────────────

def generate_resume_feedback(
    resume_text: str,
    jd_text: str,
    previous_questions: list[str] | None = None,
) -> dict:
    """
    Returns a dict shaped like:
    {
        "feedback": ["point 1", "point 2", ...],
        "interview_questions": ["question 1", "question 2", ...]
    }
    """
    previous_note = ""
    if previous_questions:
        previous_note = (
            f"\n\nThese questions were already asked earlier in this "
            f"session - do NOT repeat them, generate genuinely different "
            f"ones instead: {previous_questions}"
        )

    prompt = f"""You are an expert career coach and technical recruiter.

Given the resume and job description below, provide:
1. 3-5 specific, actionable pieces of feedback on how this resume could
   be improved to better match this job.
2. 3-5 likely interview questions the candidate should prepare for,
   specific to this role and their background.

Respond with ONLY valid JSON in exactly this shape, no other text:
{{
  "feedback": ["...", "...", "..."],
  "interview_questions": ["...", "...", "..."]
}}
{previous_note}

RESUME:
{resume_text}

JOB DESCRIPTION:
{jd_text}
"""

    def _call(model: str) -> dict:
        response = _client.models.generate_content(
            model=model,
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
            ),
        )
        result = json.loads(response.text)
        if "feedback" not in result or "interview_questions" not in result:
            raise ValueError(f"Unexpected AI response shape: {result}")
        return result

    return _generate_with_retry(_call)


def chat_reply(
    chat_history: list[dict],
    user_message: str,
    resume_text: str,
    jd_text: str,
) -> str:
    """
    Open-ended conversation — candidate can ask about their
    resume, this job, interview prep, or career advice.
    """
    system_context = f"""You are a helpful, encouraging career coach.
You have access to this candidate's resume and the job description
they're applying to.

RESPONSE STYLE RULES - follow these strictly:
- Keep replies concise. Default to under 500 words unless the question
  genuinely requires more detail (e.g. explaining a technical concept
  in depth).
- Use short bullet points when listing multiple items, steps, or
  suggestions (e.g. "what skills should I improve" -> bullets).
- Use a short paragraph (2-4 sentences) for explanations, reasoning, or
  single-focused answers (e.g. "why is my score low" -> paragraph).
- Never pad your answer with unnecessary preamble like "Great
  question!" - answer directly.

RESUME:
{resume_text}

JOB DESCRIPTION:
{jd_text}
"""

    def _call(model: str) -> str:
        history = [
            types.Content(role="user",  parts=[types.Part(text=system_context)]),
            types.Content(role="model", parts=[types.Part(text="Understood, I'm ready to help.")]),
        ]
        for msg in chat_history:
            history.append(
                types.Content(role=msg["role"], parts=[types.Part(text=msg["text"])])
            )
        chat = _client.chats.create(model=model, history=history)
        response = chat.send_message(user_message)
        return response.text

    return _generate_with_retry(_call)