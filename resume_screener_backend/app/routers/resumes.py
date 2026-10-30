from fastapi import APIRouter, UploadFile, File, Form, HTTPException

from app.services.parsing import extract_text_from_pdf, extract_text_from_docx, is_likely_resume
from app.services.embeddings import embed, cosine_similarity
from app.services.feature_extraction import extract_all_features, skill_gap_report
from app.services.scoring import score_features

router = APIRouter(prefix="/resumes", tags=["resumes"])


@router.post("/score")
async def score_uploaded_resume(
    resume: UploadFile = File(...),
    job_description: str = Form(...),
):
    """
    resume: an uploaded PDF or DOCX file
    job_description: plain text, sent as a form field alongside the file
    """
    # --- Step 1: read the uploaded file's raw bytes ---
    file_bytes = await resume.read()

    # --- Step 2: parse to clean text, based on file extension ---
    filename = resume.filename.lower()

    if filename.endswith(".pdf"):
        resume_text = extract_text_from_pdf(file_bytes)
    elif filename.endswith(".docx"):
        resume_text = extract_text_from_docx(file_bytes)
    else:
        raise HTTPException(
            status_code=400,
            detail="Unsupported file type. Please upload a .pdf or .docx file.",
        )

    # --- Step 3: Validate whether the file is actually a Resume/CV ---
    valid_resume, reason = is_likely_resume(resume_text)

    # If it's not a resume, immediately return 0.0 ATS score without scoring as a candidate
    if not valid_resume:
        skill_gaps = skill_gap_report(resume_text, job_description)
        return {
            "ats_score": 0.0,
            "is_valid_resume": False,
            "validation_note": reason,
            "features_used": {
                "cosine_similarity": 0.0,
                "skill_overlap_v2": 0.0,
                "experience_required_min": 0.0,
                "num_positions_held": 0,
                "education_level_match": 0,
                "field_match": 0,
            },
            "matched_skills": [],
            "missing_skills": skill_gaps["missing_skills"],
            "resume_text": resume_text,
        }

    # --- Step 4: embed both texts, then compare them ---
    resume_vector = embed(resume_text)
    jd_vector = embed(job_description)
    similarity_score = cosine_similarity(resume_vector, jd_vector)

    # --- Step 5: extract the other 5 features from raw text ---
    other_features = extract_all_features(resume_text, job_description)
    skill_gaps = skill_gap_report(resume_text, job_description)

    # --- Step 6: combine into the 6 features the trained model expects ---
    all_features = {
        "cosine_similarity": similarity_score,
        **other_features,
    }

    # --- Step 7: run the real trained model with validation check ---
    ats_score = score_features(all_features, is_resume=True)

    # --- Step 8: return explainable breakdown ---
    return {
        "ats_score": ats_score,
        "is_valid_resume": True,
        "features_used": all_features,
        "matched_skills": skill_gaps["matched_skills"],
        "missing_skills": skill_gaps["missing_skills"],
        "resume_text": resume_text,
    }
