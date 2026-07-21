from app.services.parsing import extract_text_from_pdf

file_path = r"C:\Users\sanu1\OneDrive\Documents\desktop\Desktop\New folder (2)\AmanVyas_resume.pdf"

with open(file_path, "rb") as f:
    file_bytes = f.read()

result = extract_text_from_pdf(file_bytes)
print("--- Extracted text ---")
print(result)