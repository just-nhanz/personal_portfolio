import { useEffect, useRef } from 'react'
import { SKILLS } from '@/utils/constants'

function SkillGroup({ id, category, tags, delay }) {
  const groupRef = useRef(null)

  useEffect(() => {
    const el = groupRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.tag').forEach((t, i) => {
            setTimeout(() => t.classList.add('popped'), 60 * i)
          })
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className={`skill-group sr sr-d${delay}`}>
      <div className="sg-head">{category}</div>
      <div className="sg-tags" ref={groupRef}>
        {tags.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="sec" id="skills">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">tech stack</div>
          <h2 className="sec-h2">What I work with</h2>
          <p className="sec-sub">
            Tools and technologies I use daily to build data-driven applications and web experiences.
          </p>
        </div>
        <div className="skills-cols">
          {SKILLS.map((g, i) => (
            <SkillGroup key={g.id} {...g} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
