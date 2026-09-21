import { PROFILE } from '@/utils/constants'

export default function Footer() {
  return (
    <footer className="footer">
      <p>built with ♥ by {PROFILE.name} — {new Date().getFullYear()}</p>
      <div className="footer-socials">
        <a href={PROFILE.github}   className="foot-link" target="_blank" rel="noreferrer">github</a>
        <a href={PROFILE.linkedin} className="foot-link" target="_blank" rel="noreferrer">linkedin</a>
        <a href={`mailto:${PROFILE.email}`} className="foot-link">email</a>
      </div>
    </footer>
  )
}
