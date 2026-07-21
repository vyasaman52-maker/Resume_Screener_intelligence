from app.services.embeddings import embed, cosine_similarity

resume_text = "Experienced Python developer skilled in machine learning and FastAPI"
jd_text = "Looking for a software engineer with Python and ML experience"

vec1 = embed(resume_text)
vec2 = embed(jd_text)

similarity = cosine_similarity(vec1, vec2)
print("Similarity score:", similarity)