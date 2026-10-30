"""
STATUS: WORKING (loads your real trained model)
Wraps ats_score_model.pkl + feature_names.pkl so a router can just call
score_features(...) without knowing anything about scikit-learn.
"""
import joblib
from pathlib import Path

MODEL_DIR = Path(__file__).resolve().parent.parent / "ml_models"

_model = None
_feature_names = None

def _load_model():
    global _model, _feature_names
    if _model is None:
        _model = joblib.load(MODEL_DIR / "ats_score_model.pkl")
        _feature_names = joblib.load(MODEL_DIR / "feature_names.pkl")
    return _model, _feature_names


def score_features(feature_dict: dict, is_resume: bool = True) -> float:
    """
    feature_dict must contain a value for every name in FEATURE_NAMES.
    Returns an ATS score 0-100.
    
    If is_resume is False (i.e. document is not a resume) or if there are 
    0 matched skills and 0 education match, returns 0.0 to prevent arbitrary 
    baseline score inflation from Random Forest regression leaves.
    """
    if not is_resume:
        return 0.0

    skill_overlap = feature_dict.get("skill_overlap_v2", 0.0)
    edu_match = feature_dict.get("education_level_match", 0)
    field_match = feature_dict.get("field_match", 0)

    # If the document has zero matching skills, zero education match, and zero field match,
    # it completely fails role criteria -> 0.0 score.
    if skill_overlap == 0.0 and edu_match == 0 and field_match == 0:
        return 0.0

    model, feature_names = _load_model()
    missing = [f for f in feature_names if f not in feature_dict]
    if missing:
        raise ValueError(f"Missing required features: {missing}")

    row = [[feature_dict[name] for name in feature_names]]
    prediction = model.predict(row)[0]
    return round(float(prediction) * 100, 2)
