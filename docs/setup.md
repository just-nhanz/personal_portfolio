# Local Setup Guide

## Prerequisites
- Node.js >= 20
- Python >= 3.11
- PostgreSQL >= 15 (or Docker)
- OpenAI API key (for AI chat)

## 1. Clone & env files
```bash
git clone https://github.com/just-nhanz/personal-portfolio.git
cd personal-portfolio
cp frontend/.env.example  frontend/.env
cp backend/.env.example   backend/.env
cp ai-service/.env.example ai-service/.env
```

## 2. Frontend
```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

## 3. Backend
```bash
cd backend
npm install
# Edit .env: set DATABASE_URL
npx prisma migrate dev --name init
npm run db:seed
npm run dev        # http://localhost:4000
```

## 4. AI Service
```bash
cd ai-service
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
# Edit .env: set OPENAI_API_KEY
uvicorn app.main:app --reload   # http://localhost:8000
```

## 5. Docker (all services)
```bash
cp .env.example .env   # fill in values
docker compose up -d
docker compose logs -f
```

## Enable AI Chat
Set `VITE_AI_ENABLED=true` in `frontend/.env` and restart.
