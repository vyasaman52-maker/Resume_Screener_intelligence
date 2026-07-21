"""
STATUS: NOT BUILT YET (Objective 1 - upload pipeline, JD side)

Plan:
- POST /jobs/upload  -> accept a JD as raw text OR a PDF/DOCX file
- Use services/parsing.py to extract clean text
- Store into job_descriptions_col (see app/database.py)
- Return the stored job_description id
"""
from fastapi import APIRouter

router = APIRouter(prefix="/jobs", tags=["jobs"])


@router.get("/status")
def not_built_yet():
    return {"status": "not implemented", "objective": "1 - JD upload pipeline"}
