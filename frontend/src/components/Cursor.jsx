import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const curRef  = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  let rx = 0, ry = 0

  useEffect(() => {
    const onMove = (e) => {
      if (curRef.current) {
        curRef.current.style.left = e.clientX + 'px'
        curRef.current.style.top  = e.clientY + 'px'
      }
    }
    const animate = () => {
      if (ringRef.current) {
        const mx = parseFloat(curRef.current?.style.left) || 0
        const my = parseFloat(curRef.current?.style.top)  || 0
        rx += (mx - rx) * 0.12
        ry += (my - ry) * 0.12
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      requestAnimationFrame(animate)
    }
    const raf = requestAnimationFrame(animate)
    window.addEventListener('mousemove', onMove)

    const targets = 'a, button, .aside-card, .project-card, .c-item, .tag, .proj-link'
    const addHover = () => setHovering(true)
    const rmHover  = () => setHovering(false)
    document.querySelectorAll(targets).forEach((el) => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', rmHover)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={curRef}  className={`cursor  ${hovering ? 'hovering' : ''}`} />
      <div ref={ringRef} className={`cursor-ring ${hovering ? 'hovering' : ''}`} />
    </>
  )
}
