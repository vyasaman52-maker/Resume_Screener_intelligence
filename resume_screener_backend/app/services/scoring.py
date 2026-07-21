"""
STATUS: WORKING (loads your real trained model)
Wraps ats_score_model.pkl + feature_names.pkl so a router can just call
score_features(...) without knowing anything about scikit-learn.

NOTE: this expects the 6 engineered features to already be computed
(cosine_similarity, skill_overlap_v2, experience_required_min,
num_positions_held, education_level_match, field_match) - the same
features your notebooks_archive/step5_option_b_v2_ats_score.py builds.

TODO (Objective 3/4/5): right now the router that calls this function
expects those 6 numbers directly in the request. The next real piece of
work is building services/parsing.py + services/embeddings.py so a raw
resume+JD pair can be turned into these 6 numbers automatically instead
of the caller supplying them by hand.
"""
# NOTE: this model file was saved with joblib.dump() (confirmed by the
# NumpyArrayWrapper / numpy_pickle markers inside the file), NOT plain
# pickle.dump(). joblib wraps numpy arrays specially for efficiency, and
# Python's built-in pickle.load() cannot correctly reconstruct that
# wrapper - it fails with "STACK_GLOBAL requires str". joblib.load()
# handles this correctly.
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


def score_features(feature_dict: dict) -> float:
    """
    feature_dict must contain a value for every name in FEATURE_NAMES.
    Returns an ATS score 0-100, matching how ats_score was built originally
    (model output * 100, rounded to 2 decimal places).
    """
    model, feature_names = _load_model()
    missing = [f for f in feature_names if f not in feature_dict]
    if missing:
        raise ValueError(f"Missing required features: {missing}")

    row = [[feature_dict[name] for name in feature_names]]
    prediction = model.predict(row)[0]
    return round(float(prediction) * 100, 2)
