import { useEffect, useRef } from 'react'
import { PROFILE, SKILL_BARS } from '@/utils/constants'

export default function About() {
  const barRefs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const bar = e.target
            bar.style.width = bar.dataset.pct + '%'
            obs.unobserve(bar)
          }
        })
      },
      { threshold: 0.5 }
    )
    barRefs.current.forEach((b) => b && obs.observe(b))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="sec sec-alt" id="about">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">about me</div>
          <h2 className="sec-h2">Who's behind the screen</h2>
        </div>

        <div className="about-body">
          <div className="about-text sr">
            {PROFILE.bio.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <div style={{ marginTop: '1.75rem' }}>
              <a
                href="/cv.pdf"
                download
                className="btn btn-ghost"
                style={{ display: 'inline-flex', fontSize: '.85rem', padding: '.65rem 1.35rem' }}
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="about-aside sr sr-d2">
            {SKILL_BARS.map((s, i) => (
              <div className="aside-card" key={s.label}>
                <div className="aside-card-top">
                  <div className="aside-icon">{s.icon}</div>
                  <div>
                    <div className="aside-label">{s.label}</div>
                    <div className="aside-value">{s.value}</div>
                  </div>
                </div>
                <div className="aside-progress">
                  <div
                    className="aside-bar"
                    data-pct={s.pct}
                    ref={(el) => (barRefs.current[i] = el)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
