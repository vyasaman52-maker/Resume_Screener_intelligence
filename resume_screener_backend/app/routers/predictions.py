"""
STATUS: WORKING (partially) - scores features you supply directly.
See services/scoring.py TODO for what's left to make this fully automatic
from a raw resume + job description.
"""
from fastapi import APIRouter

from app.models.prediction import FeatureInput, ScoreResponse
from app.services.scoring import score_features

router = APIRouter(prefix="/predictions", tags=["predictions"])


@router.post("/score", response_model=ScoreResponse)
def score_resume_jd(features: FeatureInput):
    ats_score = score_features(features.model_dump())
    return ScoreResponse(ats_score=ats_score)
