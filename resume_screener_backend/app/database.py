"""
Single MongoDB connection, shared by every router/service in the app.
Collections match Section 9 of the synopsis (the Data Model).
"""
from pymongo import MongoClient
from app.config import MONGO_URI, MONGO_DB_NAME

client = MongoClient(MONGO_URI)
db = client[MONGO_DB_NAME]

# --- Collections that already have real data in Atlas ---
predictions_col = db["predictions"]          # ats_score, matched/missing skills, rank

# --- Collections defined in the data model but not yet populated/used ---
resumes_col = db["resumes"]                  # TODO (Objective 1/2): populate on real resume upload
job_descriptions_col = db["job_descriptions"]  # TODO (Objective 1/2): populate on real JD upload
users_col = db["users"]                      # TODO (Objective 12/2 - Auth): populate on registration
courses_col = db["courses"]                  # TODO (Objective 10): seed with a course catalogue
ai_outputs_col = db["ai_outputs"]            # TODO (Objective 9): store LLM feedback/interview Qs
logs_col = db["logs"]                        # TODO (Objective 12): populate via logging middleware
sessions_col = db["sessions"]                # session-scoped LLM conversation memory (Objective 9)