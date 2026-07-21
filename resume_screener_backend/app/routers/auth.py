"""
STATUS: WORKING (Objective 12/2 — Authentication & Access Control)

Endpoints:
  POST /auth/register  →  create account, return JWT + role
  POST /auth/login     →  verify password, return JWT + role
  GET  /auth/status    →  health-check (frontend uses this to detect if auth is live)

JWT payload: { sub: user_id, email, role, exp }
Token lifetime: 24 hours (configurable via JWT_EXPIRE_MINUTES)
"""

from datetime import datetime, timedelta, timezone

import bcrypt
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

from app.config import JWT_SECRET_KEY
from app.database import users_col

# --- try to import jose; give a clear error if the package isn't installed ---
try:
    from jose import JWTError, jwt
except ImportError as exc:
    raise ImportError(
        "python-jose is not installed. "
        "Run: pip install python-jose[cryptography]"
    ) from exc

router = APIRouter(prefix="/auth", tags=["auth"])

# ── Constants ────────────────────────────────────────────────────────────────
JWT_ALGORITHM = "HS256"
JWT_EXPIRE_MINUTES = 60 * 24  # 24 hours



# ── Pydantic models ──────────────────────────────────────────────────────────
class RegisterRequest(BaseModel):
    name: str
    email: str
    password: str
    role: str = "candidate"   # "candidate" | "recruiter" | "admin"


class LoginRequest(BaseModel):
    email: str
    password: str


# ── Helpers ──────────────────────────────────────────────────────────────────
def _create_token(user_id: str, email: str, role: str, name: str) -> str:
    """Returns a signed JWT string."""
    expire = datetime.now(timezone.utc) + timedelta(minutes=JWT_EXPIRE_MINUTES)
    payload = {
        "sub": user_id,
        "email": email,
        "role": role,
        "name": name,
        "exp": expire,
    }
    return jwt.encode(payload, JWT_SECRET_KEY, algorithm=JWT_ALGORITHM)


def _hash(password: str) -> str:
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode("utf-8"), salt)
    return hashed.decode("utf-8")


def _verify(plain: str, hashed: str) -> bool:
    try:
        return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))
    except Exception:
        return False


# ── Routes ───────────────────────────────────────────────────────────────────
@router.get("/status")
def auth_status():
    """
    Frontend calls this on load to decide whether to show real login
    or fall back to demo mode. Returns 'active' once this module is live.
    """
    return {"status": "active", "message": "Auth module is live"}


@router.post("/register", status_code=201)
def register(req: RegisterRequest):
    """
    Create a new user account.
    - Rejects duplicate emails (409).
    - Stores bcrypt-hashed password — plain text never touches the DB.
    - Returns a JWT so the frontend can log the user in immediately.
    """
    if not JWT_SECRET_KEY:
        raise HTTPException(
            status_code=500,
            detail="JWT_SECRET_KEY is not set in the server environment.",
        )

    # Validate role
    allowed_roles = {"candidate", "recruiter", "admin"}
    if req.role not in allowed_roles:
        raise HTTPException(
            status_code=422,
            detail=f"Invalid role '{req.role}'. Must be one of: {sorted(allowed_roles)}",
        )

    # Check for duplicate email (case-insensitive)
    if users_col.find_one({"email": req.email.lower().strip()}):
        raise HTTPException(
            status_code=409,
            detail="An account with this email address already exists.",
        )

    # Persist the new user
    result = users_col.insert_one({
        "name": req.name.strip(),
        "email": req.email.lower().strip(),
        "password_hash": _hash(req.password),
        "role": req.role,
        "created_at": datetime.now(timezone.utc),
    })

    token = _create_token(
        user_id=str(result.inserted_id),
        email=req.email.lower().strip(),
        role=req.role,
        name=req.name.strip(),
    )

    return {
        "token": token,
        "role": req.role,
        "name": req.name.strip(),
        "email": req.email.lower().strip(),
        "message": "Account created successfully.",
    }


@router.post("/login")
def login(req: LoginRequest):
    """
    Authenticate with email + password.
    - 401 if email not found or password is wrong (same message intentionally —
      don't leak whether the email exists).
    - Returns a fresh JWT on success.
    """
    if not JWT_SECRET_KEY:
        raise HTTPException(
            status_code=500,
            detail="JWT_SECRET_KEY is not set in the server environment.",
        )

    user = users_col.find_one({"email": req.email.lower().strip()})

    if not user or not _verify(req.password, user.get("password_hash", "")):
        raise HTTPException(
            status_code=401,
            detail="Invalid email address or password.",
        )

    token = _create_token(
        user_id=str(user["_id"]),
        email=user["email"],
        role=user["role"],
        name=user["name"],
    )

    return {
        "token": token,
        "role": user["role"],
        "name": user["name"],
        "email": user["email"],
    }
