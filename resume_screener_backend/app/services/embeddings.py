import numpy as np
from sklearn.metrics.pairwise import cosine_similarity as sk_cosine_similarity

_model = None

def _get_model():
    global _model
    if _model is None:
        from sentence_transformers import SentenceTransformer
        _model = SentenceTransformer("all-MiniLM-L6-v2")
    return _model

MAX_TOKENS_PER_CHUNK = 256
APPROX_CHARS_PER_TOKEN = 4


def _chunk_text(text: str) -> list[str]:
    max_chars = MAX_TOKENS_PER_CHUNK * APPROX_CHARS_PER_TOKEN
    if len(text) <= max_chars:
        return [text]
    return [text[i:i + max_chars] for i in range(0, len(text), max_chars)]


def embed(text: str) -> np.ndarray:
    chunks = _chunk_text(text)
    model = _get_model()
    if len(chunks) == 1:
        return model.encode(chunks[0])
    chunk_vectors = model.encode(chunks)
    return np.mean(chunk_vectors, axis=0)


def cosine_similarity(vec_a: np.ndarray, vec_b: np.ndarray) -> float:
    score = sk_cosine_similarity([vec_a], [vec_b])[0][0]
    return float(score)