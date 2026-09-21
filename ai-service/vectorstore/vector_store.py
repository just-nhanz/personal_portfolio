import chromadb
from langchain_chroma import Chroma          # ← đổi import
from langchain_huggingface import HuggingFaceEmbeddings  # ← đổi import
import os

CHROMA_PATH = os.getenv("CHROMA_PATH", "./vectorstore/chroma_db")
EMBED_MODEL  = os.getenv(
    "EMBEDDING_MODEL",
    "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
)

def get_embeddings():
    return HuggingFaceEmbeddings(model_name=EMBED_MODEL)

def get_or_create_store(documents=None) -> Chroma:
    embeddings = get_embeddings()
    if documents:
        store = Chroma.from_documents(
            documents=documents,
            embedding=embeddings,
            persist_directory=CHROMA_PATH,
        )
        # Bỏ store.persist() — ChromaDB 0.4.x+ tự persist
        return store
    return Chroma(
        persist_directory=CHROMA_PATH,
        embedding_function=embeddings,
    )