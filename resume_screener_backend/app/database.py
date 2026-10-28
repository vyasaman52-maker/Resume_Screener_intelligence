"""
Single MongoDB connection with resilient in-memory fallback.
If MongoDB Atlas cluster is active and reachable, uses Atlas.
If Atlas cluster is paused, deleted, or DNS fails, falls back gracefully to in-memory collections
so the API NEVER crashes on startup, allowing all routes (ATS scoring, AI services, Auth) to work seamlessly.
"""
import logging
from datetime import datetime, timezone
from bson import ObjectId
from pymongo import MongoClient

from app.config import MONGO_URI, MONGO_DB_NAME

logger = logging.getLogger(__name__)


class CursorMock(list):
    def sort(self, key, direction=1):
        try:
            return CursorMock(sorted(self, key=lambda x: x.get(key, 0) or 0, reverse=(direction == -1)))
        except Exception:
            return self


class InsertResult:
    def __init__(self, inserted_id):
        self.inserted_id = inserted_id


class InMemoryCollection:
    def __init__(self, name="collection"):
        self.name = name
        self.docs = []

    def insert_one(self, doc):
        doc_copy = dict(doc)
        if "_id" not in doc_copy:
            doc_copy["_id"] = ObjectId()
        self.docs.append(doc_copy)
        return InsertResult(doc_copy["_id"])

    def find_one(self, filter_dict=None):
        if not filter_dict:
            return dict(self.docs[0]) if self.docs else None
        for d in self.docs:
            match = True
            for k, v in filter_dict.items():
                if k == "_id":
                    if str(d.get("_id")) != str(v):
                        match = False
                        break
                elif d.get(k) != v:
                    match = False
                    break
            if match:
                return dict(d)
        return None

    def find(self, filter_dict=None, projection=None):
        matched = []
        for d in self.docs:
            if filter_dict:
                match = True
                for k, v in filter_dict.items():
                    if k == "_id":
                        if str(d.get("_id")) != str(v):
                            match = False
                            break
                    elif d.get(k) != v:
                        match = False
                        break
                if not match:
                    continue
            d_copy = dict(d)
            if projection and projection.get("_id") == 0:
                d_copy.pop("_id", None)
            matched.append(d_copy)
        return CursorMock(matched)

    def update_one(self, filter_dict, update_dict):
        target = self.find_one(filter_dict)
        if not target:
            return
        for d in self.docs:
            if d.get("_id") == target.get("_id"):
                if "$set" in update_dict:
                    for k, v in update_dict["$set"].items():
                        d[k] = v
                if "$push" in update_dict:
                    for k, v in update_dict["$push"].items():
                        if k not in d or not isinstance(d[k], list):
                            d[k] = []
                        if isinstance(v, dict) and "$each" in v:
                            d[k].extend(v["$each"])
                        else:
                            d[k].append(v)
                break

    def count_documents(self, filter_dict=None):
        if not filter_dict:
            return len(self.docs)
        return len(self.find(filter_dict))


client = None
db = None

if MONGO_URI:
    try:
        # Connect with short timeout so a paused cluster doesn't hang worker startup
        temp_client = MongoClient(
            MONGO_URI,
            serverSelectionTimeoutMS=2000,
            connectTimeoutMS=2000,
        )
        temp_client.admin.command("ping")
        client = temp_client
        db = client[MONGO_DB_NAME]
        logger.info("Connected to MongoDB Atlas successfully.")
    except Exception as exc:
        logger.warning(
            "MongoDB Atlas connection failed (%s). Falling back to in-memory store.",
            exc,
        )
        client = None
        db = None

if db is not None:
    predictions_col = db["predictions"]
    resumes_col = db["resumes"]
    job_descriptions_col = db["job_descriptions"]
    users_col = db["users"]
    courses_col = db["courses"]
    ai_outputs_col = db["ai_outputs"]
    logs_col = db["logs"]
    sessions_col = db["sessions"]
else:
    predictions_col = InMemoryCollection("predictions")
    resumes_col = InMemoryCollection("resumes")
    job_descriptions_col = InMemoryCollection("job_descriptions")
    users_col = InMemoryCollection("users")
    courses_col = InMemoryCollection("courses")
    ai_outputs_col = InMemoryCollection("ai_outputs")
    logs_col = InMemoryCollection("logs")
    sessions_col = InMemoryCollection("sessions")

    # Seed sample candidates so the candidate ranking page shows data even offline
    sample_candidates = [
        {
            "name": "Sarah Chen",
            "job_position_name": "AI Engineer",
            "ats_score": 92.5,
            "matched_skills": ["Python", "PyTorch", "NLP", "Docker", "FastAPI"],
            "missing_skills": ["Kubernetes"],
            "cosine_similarity": 0.88,
        },
        {
            "name": "Alex Kumar",
            "job_position_name": "AI Engineer",
            "ats_score": 85.0,
            "matched_skills": ["Python", "TensorFlow", "Scikit-Learn", "SQL"],
            "missing_skills": ["FastAPI", "NLP"],
            "cosine_similarity": 0.79,
        },
        {
            "name": "Elena Rostova",
            "job_position_name": "AI Engineer",
            "ats_score": 78.4,
            "matched_skills": ["Python", "FastAPI", "Docker"],
            "missing_skills": ["PyTorch", "NLP", "Transformers"],
            "cosine_similarity": 0.72,
        },
    ]
    for sc in sample_candidates:
        predictions_col.insert_one(sc)
