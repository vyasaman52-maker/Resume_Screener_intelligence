from fastapi import APIRouter, UploadFile, File, Form, HTTPException

from app.services.parsing import extract_text_from_pdf, extract_text_from_docx
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

    # --- Step 3: embed both texts, then compare them ---
    resume_vector = embed(resume_text)
    jd_vector = embed(job_description)
    similarity_score = cosine_similarity(resume_vector, jd_vector)

    # --- Step 4: extract the other 5 features from raw text ---
    other_features = extract_all_features(resume_text, job_description)
    skill_gaps = skill_gap_report(resume_text, job_description)

    # --- Step 5: combine into the 6 features the trained model expects ---
    all_features = {
        "cosine_similarity": similarity_score,
        **other_features,
    }

    # --- Step 6: run the real trained model ---
    ats_score = score_features(all_features)

    # --- Step 7: return everything - the score AND the features that
    # produced it, so the frontend can show an explainable breakdown ---
    return {
    "ats_score": ats_score,
    "features_used": all_features,
    "matched_skills": skill_gaps["matched_skills"],
    "missing_skills": skill_gaps["missing_skills"],
    "resume_text": resume_text,
}