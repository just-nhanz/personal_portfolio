from pydantic import BaseModel, Field
from typing import List, Literal

class Message(BaseModel):
    role: Literal["user", "assistant", "system"]
    content: str

class ChatRequest(BaseModel):
    messages: List[Message] = Field(..., min_length=1)

class ChatResponse(BaseModel):
    response: str
    sources: List[str] = []
