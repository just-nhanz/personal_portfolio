from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from app.api.chat import router as chat_router
from rag.pipeline import rag_pipeline
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Initialising RAG pipeline…")
    await rag_pipeline.initialise()
    logger.info("✓ RAG pipeline ready")
    yield
    logger.info("Shutting down")

app = FastAPI(
    title="Portfolio AI Service",
    description="RAG-powered assistant for Nguyen Nhan's portfolio",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router, prefix="", tags=["chat"])

@app.get("/health")
def health():
    return {"status": "ok"}
