"""
Loads settings from the .env file so the rest of the app never
touches os.getenv() directly. One place to change if a setting
ever needs to change.
"""
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
MONGO_DB_NAME = os.getenv("MONGO_DB_NAME", "resume_screener")

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Auth (Objective 12/2)
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "fallback-dev-secret-change-in-production")
JWT_ALGORITHM = "HS256"
JWT_EXPIRE_MINUTES = 60 * 24  # 24 hours
