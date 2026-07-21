"""
STATUS: WORKING (Objective 9), session-aware
Two endpoints: structured feedback+questions, and open-ended chat -
both remember session history via session_service.py.
"""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.llm_service import generate_resume_feedback, chat_reply
from app.services.session_service import get_or_create_session, append_to_session, append_chat_message

router = APIRouter(prefix="/ai", tags=["ai_services"])


class FeedbackRequest(BaseModel):
    resume_text: str
    job_description: str
    session_id: str | None = None


class ChatRequest(BaseModel):
    resume_text: str
    job_description: str
    message: str
    session_id: str | None = None


@router.post("/feedback")
def get_resume_feedback(request: FeedbackRequest):
    try:
        session_id, session_data = get_or_create_session(request.session_id)
        previous_questions = session_data.get("previous_questions", [])

        result = generate_resume_feedback(
            request.resume_text,
            request.job_description,
            previous_questions=previous_questions,
        )

        append_to_session(
            session_id,
            new_questions=result["interview_questions"],
            new_feedback=result["feedback"],
        )

        return {
            "session_id": session_id,
            "feedback": result["feedback"],
            "interview_questions": result["interview_questions"],
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/chat")
def chat_with_ai(request: ChatRequest):
    try:
        session_id, session_data = get_or_create_session(request.session_id)
        chat_history = session_data.get("chat_history", [])

        reply = chat_reply(chat_history, request.message, request.resume_text, request.job_description)

        append_chat_message(session_id, "user", request.message)
        append_chat_message(session_id, "model", reply)

        return {"session_id": session_id, "reply": reply}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))