import { useState, useEffect } from 'react'
import { getProjects } from '@/api/portfolio'
import { PROJECTS } from '@/utils/constants'

function ProjectCard({ project, index }) {
  const { featured, icon, type, title, desc, stack, github, demo, visualCls } = project
  return (
    <div className={`project-card sr sr-d${Math.min(index + 1, 4)} ${featured ? 'featured' : ''}`}>
      <div className={`project-visual ${visualCls}`}>{icon}</div>
      <div className="project-body">
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="proj-link" title="GitHub">GH</a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="proj-link" title="Live demo">↗</a>
          )}
        </div>
        <div className="project-type">{type}</div>
        <h3 className="project-name">{title}</h3>
        <p className="project-desc">{desc}</p>
        <div className="project-stack">
          {stack.map((s) => (
            <span key={s.label} className={`stack-tag ${s.cls}`}>{s.label}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState(PROJECTS)
  const [loading, setLoading]   = useState(false)

  useEffect(() => {
    // Try fetching from API; fall back to static data
    setLoading(true)
    getProjects()
      .then((res) => {
        if (res.data?.length) setProjects(res.data)
      })
      .catch(() => {}) // use static fallback silently
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="sec sec-alt" id="projects">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">selected work</div>
          <h2 className="sec-h2">Projects</h2>
          <p className="sec-sub">Real products built with curiosity, data, and clean code.</p>
        </div>

        {loading ? (
          <div className="projects-grid">
            <div className="loading-state">
              <div className="loading-spinner" />
              loading projects...
            </div>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
