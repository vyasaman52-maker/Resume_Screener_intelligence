
import ast
import math

from fastapi import APIRouter

from app.database import predictions_col

router = APIRouter(prefix="/candidates", tags=["candidates"])

LIST_FIELDS = ["matched_skills", "missing_skills", "skills_list", "skills_required_list"]


def safe_parse_list(value):
    """Same safe-parsing idea as your step5_option_b_v2_ats_score.py."""
    if isinstance(value, list):
        return value
    if not isinstance(value, str) or not value.strip():
        return []
    try:
        parsed = ast.literal_eval(value)
        return list(parsed) if isinstance(parsed, (list, set, tuple)) else []
    except (ValueError, SyntaxError):
        return []


def clean_nan(value):
    """Replaces NaN (and Infinity, same issue) with None so JSON encoding
    doesn't crash. Recurses into dicts/lists in case NaN is nested."""
    if isinstance(value, float) and (math.isnan(value) or math.isinf(value)):
        return None
    if isinstance(value, dict):
        return {k: clean_nan(v) for k, v in value.items()}
    if isinstance(value, list):
        return [clean_nan(v) for v in value]
    return value


@router.get("/{job_name}")
def get_ranked_candidates(job_name: str):
    candidates = list(
        predictions_col.find(
            {"job_position_name": job_name},
            {"_id": 0},
        ).sort("ats_score", -1)
    )

    for candidate in candidates:
        for field in LIST_FIELDS:
            if field in candidate:
                candidate[field] = safe_parse_list(candidate[field])

    candidates = [clean_nan(c) for c in candidates]

    return {"job": job_name, "count": len(candidates), "candidates": candidates}