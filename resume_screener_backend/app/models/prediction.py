from pydantic import BaseModel


class FeatureInput(BaseModel):
    """Matches feature_names.pkl exactly - see services/scoring.py TODO."""
    cosine_similarity: float
    skill_overlap_v2: float
    experience_required_min: float
    num_positions_held: int
    education_level_match: int
    field_match: int


class ScoreResponse(BaseModel):
    ats_score: float
