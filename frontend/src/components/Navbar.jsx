import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LINKS = [
  { href: '#about',    label: 'about'    },
  { href: '#skills',   label: 'skills'   },
  { href: '#projects', label: 'projects' },
]

export default function Navbar() {
  const [pinned, setPinned]     = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setPinned(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`nav ${pinned ? 'pinned' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo" onClick={(e) => scrollTo(e, '#home')}>
          <div className="nav-logo-pulse" />
          just-nhanz
        </a>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => scrollTo(e, l.href)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-hire" onClick={(e) => scrollTo(e, '#contact')}>
              contact
            </a>
          </li>
        </ul>
        <button className="nav-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      <div className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        {[...LINKS, { href: '#contact', label: 'contact' }].map((l) => (
          <a key={l.href} href={l.href} onClick={(e) => scrollTo(e, l.href)}>{l.label}</a>
        ))}
      </div>
    </nav>
  )
}
