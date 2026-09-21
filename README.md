# 🧑‍💻 Nguyen Nhan — Personal Portfolio

Full-stack personal portfolio with AI chatbot assistant.

**GitHub:** https://github.com/just-nhanz

## Tech Stack

| Layer       | Tech                                      |
|-------------|-------------------------------------------|
| Frontend    | React 18 · Vite 5 · React Router 6       |
| Backend     | Node.js · Express · TypeScript · Prisma  |
| Database    | PostgreSQL                                |
| AI Service  | FastAPI · LangChain · ChromaDB · OpenAI  |
| DevOps      | Docker · Nginx                            |

## Quick Start

```bash
# 1. Clone
git clone https://github.com/just-nhanz/personal-portfolio.git
cd personal-portfolio

# 2. Copy envs
cp .env.example .env
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
cp ai-service/.env.example ai-service/.env

# 3. Docker (full stack)
docker compose up -d

# 4. Or run locally
cd frontend && npm install && npm run dev        # :5173
cd backend  && npm install && npm run dev        # :4000
cd ai-service && pip install -r requirements.txt && uvicorn app.main:app --reload  # :8000
```

## Project Structure

```
personal-portfolio/
├── frontend/      # React + Vite
├── backend/       # Express + TypeScript + Prisma
├── ai-service/    # FastAPI + RAG pipeline
├── nginx/         # Reverse proxy config
└── docs/          # Architecture docs
```

## Environment Variables

See `.env.example` files in each service folder.

## License

MIT
