
from pathlib import Path

import pandas as pd
from fastapi import APIRouter

router = APIRouter(prefix="/admin", tags=["admin"])

DATA_DIR = Path(__file__).resolve().parent.parent.parent / "data_archive"


@router.get("/skills")
def list_skills():
    df = pd.read_csv(DATA_DIR / "skills_taxonomy.csv")
    return {"skills": df.to_dict(orient="records")}


@router.get("/courses")
def list_courses():
    df = pd.read_csv(DATA_DIR / "course_catalogue.csv")
    return {"courses": df.to_dict(orient="records")}