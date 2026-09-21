import { useEffect, useRef } from 'react'

export function useCountUp(target, suffix = '', ref) {
  useEffect(() => {
    const el = ref?.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        let current = 0
        const step = Math.ceil(target / 30)
        const tick = setInterval(() => {
          current = Math.min(current + step, target)
          el.textContent = current + suffix
          if (current >= target) clearInterval(tick)
        }, 50)
        obs.disconnect()
      },
      { threshold: 0.8 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, suffix, ref])
}
