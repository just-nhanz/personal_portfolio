from sentence_transformers import SentenceTransformer
from typing import List
import os

_MODEL_NAME = os.getenv(
    "EMBEDDING_MODEL",
    "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
)

class EmbeddingService:
    """Wraps sentence-transformers for local embeddings (no API key needed)."""

    def __init__(self):
        self._model: SentenceTransformer | None = None

    def load(self):
        if self._model is None:
            self._model = SentenceTransformer(_MODEL_NAME)

    def embed(self, texts: List[str]) -> List[List[float]]:
        self.load()
        return self._model.encode(texts, show_progress_bar=False).tolist()

    def embed_query(self, text: str) -> List[float]:
        return self.embed([text])[0]

embedding_service = EmbeddingService()
