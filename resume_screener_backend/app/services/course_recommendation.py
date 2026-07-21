"""
STATUS: WORKING (tested) - Objective 10

Maps each missing skill to a course suggestion. Since a real 159-skill
course catalogue isn't realistic to build by hand, this maps skills to
their CATEGORY first (using the existing skills_taxonomy.csv), then
looks up one solid course per category from course_catalogue.csv - a
small, honest catalogue rather than a fake precise one.
"""
from pathlib import Path

import pandas as pd

DATA_DIR = Path(__file__).resolve().parent.parent.parent / "data_archive"

_taxonomy_df = pd.read_csv(DATA_DIR / "skills_taxonomy.csv")
_catalogue_df = pd.read_csv(DATA_DIR / "course_catalogue.csv")

SKILL_TO_CATEGORY = dict(zip(
    _taxonomy_df["skill"].str.lower(),
    _taxonomy_df["category"],
))

CATEGORY_TO_COURSE = _catalogue_df.set_index("category").to_dict(orient="index")


def recommend_courses(missing_skills: list[str]) -> list[dict]:
    """
    Takes missing skill names and returns one course suggestion per
    skill, de-duplicated so the same course isn't repeated if several
    missing skills fall in the same category.
    """
    recommendations = []
    seen_courses = set()

    for skill in missing_skills:
        category = SKILL_TO_CATEGORY.get(skill.lower())
        if category is None:
            continue

        course = CATEGORY_TO_COURSE.get(category)
        if course is None:
            continue

        course_title = course["course_title"]
        if course_title in seen_courses:
            continue
        seen_courses.add(course_title)

        recommendations.append({
            "skill_gap": skill,
            "category": category,
            "course_title": course_title,
            "provider": course["provider"],
            "url": course["url"],
        })

    return recommendations