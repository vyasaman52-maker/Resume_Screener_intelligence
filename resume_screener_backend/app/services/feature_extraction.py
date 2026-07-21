
import re
from pathlib import Path

import pandas as pd

DATA_DIR = Path(__file__).resolve().parent.parent.parent / "data_archive"
_taxonomy_df = pd.read_csv(DATA_DIR / "skills_taxonomy.csv")
ALL_SKILLS = sorted(_taxonomy_df["skill"].str.lower().tolist(), key=len, reverse=True)

EDUCATION_LEVELS = {
    "phd": 5, "doctorate": 5,
    "master": 4, "mba": 4,
    "bachelor": 3,
    "associate": 2, "diploma": 2,
    "certificate": 1,
    "high school": 0,
}


def extract_skills(text: str) -> set[str]:
    """
    Finds which known skills (from skills_taxonomy.csv) appear in the
    given text. Uses word-boundary regex so short skill names don't
    false-match inside unrelated words.
    """
    text_lower = text.lower()
    found = set()

    for skill in ALL_SKILLS:
        pattern = r"\b" + re.escape(skill) + r"\b"
        if re.search(pattern, text_lower):
            found.add(skill)

    return found


def skill_overlap_v2(resume_skills: set[str], jd_skills: set[str]) -> float:
    """Fraction of the JD's required skills that the resume also has."""
    if not jd_skills:
        return 0.0
    return len(resume_skills & jd_skills) / len(jd_skills)


def extract_min_experience(jd_text: str) -> float:
    """
    Pulls out the smallest number found in the JD text.
    'At least 4 years' -> 4.0 | '1 to 3 years' -> 1.0 | none -> 0.0
    """
    numbers = [int(n) for n in re.findall(r"\d+", jd_text)]
    return float(min(numbers)) if numbers else 0.0


def extract_num_positions(resume_text: str) -> int:
    """
    LIMITATION: approximates position count by counting lines that look
    like job titles (short, containing common title words).
    """
    title_keywords = (
        "engineer", "developer", "intern", "manager", "analyst",
        "scientist", "designer", "consultant", "specialist", "lead",
    )
    lines = resume_text.split("\n")
    count = 0
    for line in lines:
        line_lower = line.lower().strip()
        if len(line) < 60 and any(kw in line_lower for kw in title_keywords):
            count += 1
    return count


def extract_education_level(text: str) -> int | None:
    """Finds the highest-ranked education keyword present in the text."""
    text_lower = text.lower()
    found_levels = [v for k, v in EDUCATION_LEVELS.items() if k in text_lower]
    return max(found_levels) if found_levels else None


def education_level_match(resume_text: str, jd_text: str) -> int:
    """1 if candidate's education level meets or exceeds the JD's requirement."""
    candidate_level = extract_education_level(resume_text)
    required_level = extract_education_level(jd_text)

    if candidate_level is None or required_level is None:
        return 0
    return int(candidate_level >= required_level)


def field_match(resume_text: str, jd_text: str) -> int:
    """
    LIMITATION: approximated using a small common fields list, since raw
    text has no structured "major" field like the notebook had.
    """
    common_fields = (
        "computer science", "engineering", "business", "commerce",
        "accounting", "finance", "marketing", "economics", "mathematics",
        "data science", "information technology", "electronics",
    )
    resume_lower = resume_text.lower()
    jd_lower = jd_text.lower()

    resume_fields = {f for f in common_fields if f in resume_lower}
    jd_fields = {f for f in common_fields if f in jd_lower}

    return int(bool(resume_fields & jd_fields))


def extract_all_features(resume_text: str, jd_text: str) -> dict:
    """
    Runs everything above and returns the 5 features scoring.py needs,
    EXCEPT cosine_similarity (that comes from embeddings.py separately).
    """
    resume_skills = extract_skills(resume_text)
    jd_skills = extract_skills(jd_text)

    return {
        "skill_overlap_v2": skill_overlap_v2(resume_skills, jd_skills),
        "experience_required_min": extract_min_experience(jd_text),
        "num_positions_held": extract_num_positions(resume_text),
        "education_level_match": education_level_match(resume_text, jd_text),
        "field_match": field_match(resume_text, jd_text),
    }
def skill_gap_report(resume_text: str, jd_text: str) -> dict:
    """
    Returns the ACTUAL matched/missing skill names, not just a ratio -
    this is what Objective 5 in the synopsis means by "clearly reporting
    matched and missing requirements."
    """
    resume_skills = extract_skills(resume_text)
    jd_skills = extract_skills(jd_text)

    return {
        "matched_skills": sorted(resume_skills & jd_skills),
        "missing_skills": sorted(jd_skills - resume_skills),
    }