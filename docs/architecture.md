# Architecture Overview

```
Browser
  │
  ▼
Nginx (port 80)
  ├── / ──────────── Frontend (React/Vite, port 5173)
  ├── /api/ ───────── Backend (Express/TS, port 4000)
  └── /ai/ ────────── AI Service (FastAPI, port 8000)
                              │
                         ChromaDB (local)
                              │
                         OpenAI API
Backend
  └── PostgreSQL (port 5432)
```

## Services

| Service    | Port | Purpose                          |
|------------|------|----------------------------------|
| frontend   | 5173 | React SPA served via Vite/Nginx  |
| backend    | 4000 | REST API, Prisma ORM, email      |
| ai-service | 8000 | FastAPI RAG chatbot              |
| postgres   | 5432 | Primary database                 |
| nginx      | 80   | Reverse proxy                    |

## Data Flow — Contact Form
1. User submits form → `POST /api/contact`
2. Zod validates input
3. Saved to PostgreSQL via Prisma
4. Nodemailer sends email notification (optional)

## Data Flow — AI Chat
1. User sends message → `POST /api/ai/chat`
2. Express proxies to FastAPI `/chat`
3. FastAPI runs RAG: query → ChromaDB retrieval → OpenAI LLM
4. Response returned to browser
