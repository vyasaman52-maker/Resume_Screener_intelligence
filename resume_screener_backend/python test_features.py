from app.services.feature_extraction import extract_all_features

resume_text = """Bachelor of Technology in Computer Science

Software Engineer at TechCorp
Machine Learning Intern at DataCo

Skills: Python, TensorFlow, SQL"""

jd_text = "AI Engineer. Bachelors degree required in Computer Science or Engineering. At least 2 years experience. Required skills: Python, TensorFlow, PyTorch, SQL"

print(extract_all_features(resume_text, jd_text))

print(extract_all_features(resume_text, jd_text))