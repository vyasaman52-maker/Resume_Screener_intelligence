import pytest
from app.services.feature_extraction import extract_all_features, extract_skills

def test_feature_extraction():
    resume_text = "I am a software engineer skilled in python and react with a bachelor degree."
    jd_text = "Looking for a software engineer with python, react, and aws. Requires a bachelor degree and 2 years experience."
    
    features = extract_all_features(resume_text, jd_text)
    
    # 5 features should be returned
    assert len(features) == 5
    
    # skill_overlap_v2 check (2 out of 3 skills)
    assert abs(features["skill_overlap_v2"] - 0.666) < 0.01
    
    # education_level_match
    assert features["education_level_match"] == 1
    
    # experience required
    assert features["experience_required_min"] == 2.0

