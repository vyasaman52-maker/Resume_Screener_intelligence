import numpy as np
from sklearn.metrics.pairwise import cosine_similarity as sk_cosine_similarity
from google import genai
from app.config import GEMINI_API_KEY

_client = genai.Client(api_key=GEMINI_API_KEY)

MAX_CHARS_PER_CHUNK = 2000

def _chunk_text(text: str) -> list[str]:
    if len(text) <= MAX_CHARS_PER_CHUNK:
        return [text]
    return [text[i:i + MAX_CHARS_PER_CHUNK] for i in range(0, len(text), MAX_CHARS_PER_CHUNK)]


def embed(text: str) -> np.ndarray:
    """
    Uses Gemini API for embeddings instead of local SentenceTransformers
    to save 2GB+ of memory and fit inside Render's 512MB free tier.
    """
    chunks = _chunk_text(text)
    response = _client.models.embed_content(
        model='text-embedding-004',
        contents=chunks,
    )
    # Average the chunk embeddings
    embeddings = [emb.values for emb in response.embeddings]
    return np.mean(embeddings, axis=0)


def cosine_similarity(vec_a: np.ndarray, vec_b: np.ndarray) -> float:
    score = sk_cosine_similarity([vec_a], [vec_b])[0][0]
    return float(score)