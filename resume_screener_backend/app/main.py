from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import candidates, predictions, resumes, jobs, ai_services, courses, admin, auth

app = FastAPI(
    title="Resume Screener API",
    description="AI-Powered Resume Screening & Job-Fit Prediction Platform",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Resume Screener API is running"}


app.include_router(candidates.router)
app.include_router(predictions.router)
app.include_router(resumes.router)
app.include_router(jobs.router)
app.include_router(ai_services.router)
app.include_router(courses.router)
app.include_router(admin.router)
app.include_router(auth.router)