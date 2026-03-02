# MCP Forge Website (Default)

Premium glassmorphism marketing site for an AI Agents + MCP building company.

## Stack
- Frontend: React + Vite
- Backend: Node.js + Express

## Run locally

### 1) Frontend
```bash
cd frontend
npm install
npm run dev
```

### 2) Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Frontend: http://localhost:5173
Backend:  http://localhost:5000

## Notes
- The contact form posts to `/api/lead`.
- In production, swap the JSONL lead storage for email/Slack/DB.
