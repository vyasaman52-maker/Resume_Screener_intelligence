"""
Single MongoDB connection with resilient in-memory fallback.
If MongoDB Atlas cluster is active and reachable, uses Atlas.
If Atlas cluster is paused, deleted, or DNS fails, falls back gracefully to in-memory collections
so the API NEVER crashes on startup, allowing all routes (ATS scoring, AI services, Auth) to work seamlessly.
"""
import logging
import re
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
                elif isinstance(v, str) and isinstance(d.get(k), str):
                    if d.get(k, "").lower() != v.lower():
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
                    elif isinstance(v, str) and isinstance(d.get(k), str):
                        # Case-insensitive match for job titles
                        if d.get(k, "").strip().lower() != v.strip().lower():
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

    # Seed realistic candidate pools for major tech job profiles so recruiters can search and test anytime
    sample_candidates = [
        # 1. AI Engineer
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
        # 2. Data Scientist
        {
            "name": "David Miller",
            "job_position_name": "Data Scientist",
            "ats_score": 94.2,
            "matched_skills": ["Python", "Pandas", "Scikit-Learn", "SQL", "Statistics", "Machine Learning"],
            "missing_skills": ["Tableau"],
            "cosine_similarity": 0.91,
        },
        {
            "name": "Priya Sharma",
            "job_position_name": "Data Scientist",
            "ats_score": 87.6,
            "matched_skills": ["Python", "R", "SQL", "Machine Learning", "Data Visualization"],
            "missing_skills": ["Deep Learning", "AWS"],
            "cosine_similarity": 0.83,
        },
        {
            "name": "Marcus Vance",
            "job_position_name": "Data Scientist",
            "ats_score": 79.1,
            "matched_skills": ["Python", "Pandas", "NumPy", "Data Cleaning"],
            "missing_skills": ["Machine Learning", "SQL"],
            "cosine_similarity": 0.75,
        },
        # 3. Frontend Developer
        {
            "name": "Jessica Taylor",
            "job_position_name": "Frontend Developer",
            "ats_score": 93.8,
            "matched_skills": ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
            "missing_skills": ["Next.js"],
            "cosine_similarity": 0.89,
        },
        {
            "name": "Rohan Patel",
            "job_position_name": "Frontend Developer",
            "ats_score": 84.5,
            "matched_skills": ["JavaScript", "React", "Redux", "CSS3"],
            "missing_skills": ["TypeScript", "GraphQL"],
            "cosine_similarity": 0.80,
        },
        {
            "name": "Chloe Bennett",
            "job_position_name": "Frontend Developer",
            "ats_score": 76.2,
            "matched_skills": ["HTML5", "CSS3", "JavaScript"],
            "missing_skills": ["React", "TypeScript"],
            "cosine_similarity": 0.71,
        },
        # 4. Backend Developer
        {
            "name": "Vikram Malhotra",
            "job_position_name": "Backend Developer",
            "ats_score": 95.0,
            "matched_skills": ["Python", "FastAPI", "PostgreSQL", "Docker", "Redis", "REST APIs"],
            "missing_skills": ["Kubernetes"],
            "cosine_similarity": 0.93,
        },
        {
            "name": "Liam Murphy",
            "job_position_name": "Backend Developer",
            "ats_score": 86.3,
            "matched_skills": ["Python", "Django", "SQL", "Docker"],
            "missing_skills": ["FastAPI", "Microservices"],
            "cosine_similarity": 0.82,
        },
        {
            "name": "Sophia Wang",
            "job_position_name": "Backend Developer",
            "ats_score": 77.8,
            "matched_skills": ["Node.js", "Express", "MongoDB"],
            "missing_skills": ["Python", "PostgreSQL"],
            "cosine_similarity": 0.73,
        },
        # 5. Full Stack Developer
        {
            "name": "Ananya Joshi",
            "job_position_name": "Full Stack Developer",
            "ats_score": 91.0,
            "matched_skills": ["React", "Node.js", "Python", "PostgreSQL", "Docker", "Git"],
            "missing_skills": ["AWS"],
            "cosine_similarity": 0.87,
        },
        {
            "name": "Daniel Kim",
            "job_position_name": "Full Stack Developer",
            "ats_score": 82.4,
            "matched_skills": ["JavaScript", "React", "Node.js", "MongoDB"],
            "missing_skills": ["Docker", "TypeScript"],
            "cosine_similarity": 0.78,
        },
        # 6. DevOps Engineer
        {
            "name": "Robert Hansen",
            "job_position_name": "DevOps Engineer",
            "ats_score": 94.7,
            "matched_skills": ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD", "Linux"],
            "missing_skills": ["Prometheus"],
            "cosine_similarity": 0.92,
        },
        {
            "name": "Neha Verma",
            "job_position_name": "DevOps Engineer",
            "ats_score": 83.9,
            "matched_skills": ["Docker", "Linux", "Jenkins", "Git"],
            "missing_skills": ["Kubernetes", "Terraform"],
            "cosine_similarity": 0.81,
        },
    ]
    for sc in sample_candidates:
        predictions_col.insert_one(sc)
