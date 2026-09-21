import { useRef } from 'react'
import { PROFILE } from '@/utils/constants'
import { useCountUp } from '@/hooks/useCountUp'

function StatItem({ num, suffix, label }) {
  const ref = useRef(null)
  useCountUp(num, suffix, ref)
  return (
    <div>
      <div className="stat-num" ref={ref}>0{suffix}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  )
}

export default function Hero() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero-tag">
        <span>{PROFILE.tagline}</span>
      </div>

      <h1 className="hero-name">
        <span className="solid">{PROFILE.name}</span>
        <span className="outline">{PROFILE.role}</span>
      </h1>

      <div className="hero-roles">
        <span className="role-pill role-ml">Machine Learning</span>
        <span className="role-pill role-web">Full-Stack</span>
        <span className="role-pill role-data">Data Science</span>
      </div>

      <p className="hero-desc">
        Building <em>intelligent applications</em> that bridge data and user experience.
        Passionate about ML pipelines, clean code, and learning every day.
      </p>

      <div className="hero-ctas">
        <button className="btn btn-fill" onClick={() => scrollTo('#projects')}>
          View projects
        </button>
        <button className="btn btn-ghost" onClick={() => scrollTo('#contact')}>
          Get in touch
        </button>
      </div>

      <div className="hero-foot">
        {PROFILE.stats.map((s) => (
          <StatItem key={s.label} num={s.num} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </section>
  )
}
