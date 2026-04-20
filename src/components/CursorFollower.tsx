import { useEffect, useRef } from 'react'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

function isCoarsePointer() {
  return typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches
}

export default function CursorFollower() {
  const elRef = useRef<HTMLDivElement | null>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const raf = useRef<number | null>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    if (isCoarsePointer()) return
    const el = elRef.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      el.style.opacity = '1'
    }

    const tick = () => {
      const dx = target.current.x - current.current.x
      const dy = target.current.y - current.current.y
      current.current.x += dx * 0.18
      current.current.y += dy * 0.18

      // Center dot on cursor
      el.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`
      raf.current = window.requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf.current = window.requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf.current) window.cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={elRef}
      aria-hidden
      className="cursor-follower pointer-events-none fixed left-0 top-0 z-[200] opacity-0"
      style={{
        width: 12,
        height: 12,
        marginLeft: -6,
        marginTop: -6,
        borderRadius: 9999,
        background: 'rgba(93, 20, 32, 0.85)',
        boxShadow: '0 10px 24px rgba(93, 20, 32, 0.18)',
        transform: 'translate3d(-9999px,-9999px,0)',
        transition: 'opacity 200ms ease',
        mixBlendMode: 'multiply',
        willChange: 'transform',
      }}
    />
  )
}

