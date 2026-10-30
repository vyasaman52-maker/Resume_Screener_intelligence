import io
import re
import pdfplumber
from docx import Document

RESUME_SECTION_PATTERNS = [
    r"\b(?:work\s+)?experience\b",
    r"\beducation\b",
    r"\bskills?\b",
    r"\bprojects?\b",
    r"\bqualifications?\b",
    r"\baccomplishments?\b",
    r"\bcertifications?\b",
    r"\bemployment\b",
    r"\bwork\s+history\b",
    r"\bcurriculum\s+vitae\b",
    r"\bresume\b",
    r"\bacademic\s+background\b",
    r"\bprofessional\s+summary\b",
    r"\bcareer\s+objective\b",
    r"\bachievements?\b",
]

CONTACT_PATTERNS = [
    r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b",                # Email
    r"\b(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b",       # Phone number
    r"\blinkedin\.com/(?:in|profile)/[a-zA-Z0-9_-]+\b",                     # LinkedIn
    r"\bgithub\.com/[a-zA-Z0-9_-]+\b",                                      # GitHub
]


def is_likely_resume(text: str) -> tuple[bool, str]:
    """
    Checks whether the text looks like an actual resume/CV.
    Returns (True, "Valid resume") or (False, reason_message).
    """
    clean_text = text.strip()
    if len(clean_text) < 50:
        return False, "Document contains insufficient text to be a resume."

    text_lower = clean_text.lower()

    # Count matching typical resume sections
    matched_sections = [p for p in RESUME_SECTION_PATTERNS if re.search(p, text_lower)]

    # Check for contact information
    has_contact = any(re.search(p, clean_text, re.IGNORECASE) for p in CONTACT_PATTERNS)

    # Valid if it has at least 2 standard resume sections, or 1 section + verified contact info
    if len(matched_sections) >= 2 or (len(matched_sections) >= 1 and has_contact):
        return True, "Valid resume"

    return False, "Uploaded file does not have standard resume sections (e.g., Experience, Education, Skills, or Contact Info)."


def extract_text_from_pdf(file_bytes: bytes) -> str:
    text_parts = []

    # wrap file_bytes in io.BytesIO() so pdfplumber can treat it like a file
    with io.BytesIO(file_bytes) as pdf_stream:
        with pdfplumber.open(pdf_stream) as pdf:
            # loop through pdf.pages, call .extract_text() on each
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:  # some pages (e.g. scanned images) return None
                    text_parts.append(page_text)

    # join the results together
    full_text = "\n".join(text_parts).strip()

    # if the final text is empty/blank, raise a clear error
    if not full_text:
        raise ValueError(
            "No extractable text found in this PDF. It may be a scanned "
            "image rather than real text."
        )

    return full_text


def extract_text_from_docx(file_bytes: bytes) -> str:
    text_parts = []

    # wrap file_bytes in io.BytesIO() so Document() can treat it like a file
    with io.BytesIO(file_bytes) as docx_stream:
        doc = Document(docx_stream)
        # loop through doc.paragraphs, grab .text from each
        for paragraph in doc.paragraphs:
            if paragraph.text.strip():
                text_parts.append(paragraph.text)

    # join them together
    full_text = "\n".join(text_parts).strip()

    # if empty, raise a clear error
    if not full_text:
        raise ValueError(
            "No extractable text found in this DOCX file. It may be "
            "empty or contain only images/tables."
        )

    return full_text
