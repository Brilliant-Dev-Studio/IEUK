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

    const base = {
      size: 12,
      bg: 'rgba(93, 20, 32, 0.85)',
      shadow: '0 10px 24px rgba(93, 20, 32, 0.18)',
      border: '0px solid rgba(255,255,255,0)',
      blend: 'multiply' as const,
    }

    const hover = {
      size: 44,
      bg: 'rgba(255,255,255,0)',
      shadow: '0 10px 30px rgba(93, 20, 32, 0.16)',
      border: '2px solid rgba(93, 20, 32, 0.55)',
      blend: 'normal' as const,
    }

    const apply = (mode: 'base' | 'hover') => {
      const m = mode === 'hover' ? hover : base
      el.style.width = `${m.size}px`
      el.style.height = `${m.size}px`
      el.style.marginLeft = `${-m.size / 2}px`
      el.style.marginTop = `${-m.size / 2}px`
      el.style.background = m.bg
      el.style.boxShadow = m.shadow
      el.style.border = m.border
      el.style.mixBlendMode = m.blend
    }

    apply('base')

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      el.style.opacity = '1'
    }

    const isInteractive = (node: EventTarget | null) => {
      const t = node as Element | null
      if (!t?.closest) return false
      return Boolean(
        t.closest(
          [
            'a[href]',
            'button',
            '[role="button"]',
            'input',
            'select',
            'textarea',
            'label',
            '[data-cursor="hover"]',
          ].join(','),
        ),
      )
    }

    let hovering = false
    const setHovering = (v: boolean) => {
      if (hovering === v) return
      hovering = v
      apply(v ? 'hover' : 'base')
    }

    const onOver = (e: PointerEvent) => {
      if (isInteractive(e.target)) setHovering(true)
    }

    const onOut = (e: PointerEvent) => {
      // If moving into another interactive element, keep hover.
      if (isInteractive(e.relatedTarget)) return
      if (isInteractive(e.target)) setHovering(false)
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
    window.addEventListener('pointerover', onOver, { passive: true })
    window.addEventListener('pointerout', onOut, { passive: true })
    raf.current = window.requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('pointerover', onOver)
      window.removeEventListener('pointerout', onOut)
      if (raf.current) window.cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={elRef}
      aria-hidden
      className="cursor-follower pointer-events-none fixed left-0 top-0 z-[200] opacity-0"
      style={{
        borderRadius: 9999,
        transform: 'translate3d(-9999px,-9999px,0)',
        transition:
          'opacity 200ms ease, width 180ms ease, height 180ms ease, margin 180ms ease, background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease',
        willChange: 'transform',
      }}
    />
  )
}

