# API Reference

Base URL: `http://localhost:4000/api`

## Health
`GET /health` — Returns `{ status: "ok" }`

## Projects
`GET /projects` — List all projects (ordered: featured first)
`GET /projects/:id` — Get single project

## Contact
`POST /contact`
```json
{ "name": "string", "email": "string", "message": "string" }
```
Returns `{ "success": true, "id": 1 }`

## AI Chat
`POST /ai/chat`
```json
{ "messages": [{ "role": "user", "content": "Tell me about Nhan's projects" }] }
```
Returns `{ "response": "string", "sources": ["string"] }`
