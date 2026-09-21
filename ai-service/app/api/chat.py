from fastapi import APIRouter, HTTPException
from app.schemas.chat import ChatRequest, ChatResponse
from rag.pipeline import rag_pipeline

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        user_msg = next(
            (m.content for m in reversed(request.messages) if m.role == "user"),
            None
        )
        if not user_msg:
            raise HTTPException(status_code=400, detail="No user message found")

        result = await rag_pipeline.arun(user_msg)
        return ChatResponse(
            response=result["answer"],
            sources=result.get("sources", [])
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
