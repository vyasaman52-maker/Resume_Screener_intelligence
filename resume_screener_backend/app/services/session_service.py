"""
STATUS: WORKING (Objective 9 support) - session-scoped memory for the
LLM feedback feature, backed by MongoDB, with a real expiry.

Not permanent storage - each session naturally "expires" if the
candidate goes quiet for SESSION_EXPIRY_MINUTES. This also sets up the
same session concept that Auth/RBAC (Objective 12) will need later, so
it isn't throwaway work.
"""
import uuid
from datetime import datetime, timedelta, timezone

from app.database import sessions_col

SESSION_EXPIRY_MINUTES = 30


def create_session() -> str:
    """Creates a brand-new, empty session and returns its ID."""
    session_id = str(uuid.uuid4())
    sessions_col.insert_one({
        "session_id": session_id,
        "previous_questions": [],
        "previous_feedback": [],
        "last_active": datetime.now(timezone.utc),
    })
    return session_id


def get_session(session_id: str) -> dict | None:
    """
    Returns the session document if it exists AND hasn't expired.
    Returns None if it's missing or expired - the caller should treat
    both cases the same way (start fresh), which keeps the calling
    code simple.
    """
    if not session_id:
        return None

    session = sessions_col.find_one({"session_id": session_id})
    if not session:
        return None

    last_active = session["last_active"]
    if last_active.tzinfo is None:
        last_active = last_active.replace(tzinfo=timezone.utc)

    expiry_cutoff = datetime.now(timezone.utc) - timedelta(minutes=SESSION_EXPIRY_MINUTES)
    if last_active < expiry_cutoff:
        return None  # expired - treat as if it doesn't exist

    return session


def get_or_create_session(session_id: str | None) -> tuple[str, dict]:
    """
    Convenience function for the router: give it whatever session_id the
    frontend sent (possibly None, possibly expired) and get back a valid
    session_id plus its current data, creating a fresh one if needed.
    """
    session = get_session(session_id)
    if session:
        return session_id, session

    new_session_id = create_session()
    return new_session_id, {"previous_questions": [], "previous_feedback": []}


def append_to_session(session_id: str, new_questions: list[str], new_feedback: list[str]) -> None:
    """
    Adds this round's questions/feedback to the session's running list,
    and refreshes last_active so the session stays alive while the
    candidate keeps interacting (sliding expiry, not a fixed countdown).
    """
    sessions_col.update_one(
        {"session_id": session_id},
        {
            "$push": {
                "previous_questions": {"$each": new_questions},
                "previous_feedback": {"$each": new_feedback},
            },
            "$set": {"last_active": datetime.now(timezone.utc)},
        },
    )

def append_chat_message(session_id: str, role: str, text: str) -> None:
    """Adds one message (from 'user' or 'model') to the session's chat history."""
    sessions_col.update_one(
        {"session_id": session_id},
        {
            "$push": {"chat_history": {"role": role, "text": text}},
            "$set": {"last_active": datetime.now(timezone.utc)},
        },
    )