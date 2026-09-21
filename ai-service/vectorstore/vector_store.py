import chromadb
from chromadb.config import Settings
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
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
        store.persist()
        return store
    return Chroma(
        persist_directory=CHROMA_PATH,
        embedding_function=embeddings,
    )
