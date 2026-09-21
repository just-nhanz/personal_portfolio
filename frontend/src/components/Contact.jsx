import { useState } from 'react'
import { CONTACTS, PROFILE } from '@/utils/constants'
import { sendContact } from '@/api/portfolio'

const INITIAL = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm]     = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError]   = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.')
      return
    }
    setError('')
    setStatus('sending')
    try {
      await sendContact(form)
      setStatus('success')
      setForm(INITIAL)
      setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
      setError('Something went wrong. Please email me directly.')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const btnLabel = { idle: 'Send message', sending: 'Sending…', success: '✓ Sent!', error: 'Try again' }

  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">get in touch</div>
          <h2 className="sec-h2">Let's talk</h2>
        </div>

        <div className="contact-grid">
          {/* Left — links */}
          <div className="sr">
            <div className="contact-intro">
              <p>
                Whether you have a project idea, a collaboration proposal, or just want to connect —
                my inbox is always open. I'm especially interested in ML and full-stack opportunities.
              </p>
            </div>
            <div className="contact-list">
              {CONTACTS.map((c) => (
                <a key={c.label} href={c.href} className="c-item" target="_blank" rel="noreferrer">
                  <div className="c-ico">{c.icon}</div>
                  <div>
                    <div className="c-label">{c.label}</div>
                    <div className="c-val">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="sr sr-d2">
            <form className="form-wrap" onSubmit={onSubmit} noValidate>
              <div className="fgroup">
                <label className="flabel">name</label>
                <input
                  className="finput" name="name" type="text"
                  placeholder="Your name" value={form.name} onChange={onChange}
                />
              </div>
              <div className="fgroup">
                <label className="flabel">email</label>
                <input
                  className="finput" name="email" type="email"
                  placeholder="your@email.com" value={form.email} onChange={onChange}
                />
              </div>
              <div className="fgroup">
                <label className="flabel">message</label>
                <textarea
                  className="ftextarea" name="message"
                  placeholder="Tell me about your project or idea…"
                  value={form.message} onChange={onChange}
                />
              </div>
              {error && <div className="form-error">{error}</div>}
              <button
                type="submit"
                className={`form-btn ${status === 'success' ? 'success' : ''}`}
                disabled={status === 'sending'}
              >
                {btnLabel[status]}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
