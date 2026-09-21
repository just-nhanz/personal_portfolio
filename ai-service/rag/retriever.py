from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from vectorstore.vector_store import get_or_create_store
import os

DOCS_PATH = os.getenv("DOCS_PATH", "./data/documents")

class PortfolioRetriever:
    def __init__(self):
        self._store = None

    def _load_documents(self):
        loader = DirectoryLoader(
            DOCS_PATH,
            glob="**/*.md",
            loader_cls=TextLoader,
            loader_kwargs={"encoding": "utf-8"},
        )
        docs = loader.load()
        splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=80)
        return splitter.split_documents(docs)

    def build(self):
        """Build or rebuild the vector store from documents."""
        docs = self._load_documents()
        self._store = get_or_create_store(documents=docs)
        return self

    def load(self):
        """Load existing vector store."""
        self._store = get_or_create_store()
        return self

    def as_retriever(self, k: int = 4):
        if self._store is None:
            self.build()
        return self._store.as_retriever(search_kwargs={"k": k})

retriever = PortfolioRetriever()
