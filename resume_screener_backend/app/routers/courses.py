"""
STATUS: WORKING (Objective 10)
Takes a list of missing skills, returns course recommendations.
"""
from fastapi import APIRouter
from pydantic import BaseModel

from app.services.course_recommendation import recommend_courses

router = APIRouter(prefix="/courses", tags=["courses"])


class CourseRequest(BaseModel):
    missing_skills: list[str]


@router.post("/recommend")
def get_course_recommendations(request: CourseRequest):
    recommendations = recommend_courses(request.missing_skills)
    return {"recommendations": recommendations}