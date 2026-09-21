import { useState, useRef, useEffect } from 'react'
import { chatWithAI } from '@/api/portfolio'

const AI_ENABLED = import.meta.env.VITE_AI_ENABLED === 'true'

const INIT_MSG = {
  role: 'assistant',
  content: "Hi! I'm Nhan's AI assistant. Ask me anything about his projects, skills, or background.",
}

export default function AiChat() {
  const [open, setOpen]         = useState(false)
  const [input, setInput]       = useState('')
  const [messages, setMessages] = useState([INIT_MSG])
  const [loading, setLoading]   = useState(false)
  const bottomRef               = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (!AI_ENABLED) return null

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    const userMsg = { role: 'user', content: text }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setLoading(true)
    try {
      const res = await chatWithAI([...messages, userMsg])
      setMessages((m) => [...m, { role: 'assistant', content: res.data.response }])
    } catch {
      setMessages((m) => [...m, { role: 'assistant', content: 'Sorry, something went wrong. Try again later.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button className="chat-fab" onClick={() => setOpen(!open)} title="Chat with AI">
        {open ? '✕' : '🤖'}
      </button>
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            <div className="chat-title">🤖 Ask Nhan's AI</div>
            <button className="chat-close" onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role === 'user' ? 'user' : 'ai'}`}>
                {m.content}
              </div>
            ))}
            {loading && <div className="chat-msg ai">Thinking…</div>}
            <div ref={bottomRef} />
          </div>
          <div className="chat-input-row">
            <input
              className="chat-input"
              placeholder="Ask something…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
            />
            <button className="chat-send" onClick={send}>→</button>
          </div>
        </div>
      )}
    </>
  )
}
