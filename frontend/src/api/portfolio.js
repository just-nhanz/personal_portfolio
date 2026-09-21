import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

export const getProjects = () => api.get('/api/projects')
export const getProfile  = () => api.get('/api/profile')

export const sendContact = (data) =>
  api.post('/api/contact', data)

export const chatWithAI = (messages) =>
  api.post('/api/ai/chat', { messages })

export default api
