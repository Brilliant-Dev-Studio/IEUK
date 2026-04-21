import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react'

type ParallaxImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'style'> & {
  /** Max translate in px (positive number). */
  strength?: number
  /** Extra CSS classnames for the <img>. */
  imgClassName?: string
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

export default function ParallaxImage({
  strength = 14,
  className,
  imgClassName,
  ...imgProps
}: ParallaxImageProps) {
  const imgRef = useRef<HTMLImageElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const inViewRef = useRef(true)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setEnabled(false)
      return
    }
    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return
    if (typeof window === 'undefined') return
    const img = imgRef.current
    if (!img) return

    // Ensure the CSS variable always exists (prevents "no-op" until first tick).
    img.style.setProperty('--parallax-y', '0px')

    const update = () => {
      const rect = img.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const center = rect.top + rect.height / 2
      const progress = (center - vh / 2) / vh // roughly -0.5..0.5 around viewport
      // Multiplier makes the movement noticeable but still subtle.
      const y = clamp(-progress * strength * 2.5, -strength, strength)
      img.style.setProperty('--parallax-y', `${y.toFixed(2)}px`)
      // Scale up slightly to avoid "white gaps" when translating within clipped parents.
      // Need enough overscan for max translate in either direction.
      const safeH = rect.height || 300
      const scale = 1 + (2 * strength) / safeH
      img.style.setProperty('--parallax-scale', `${scale.toFixed(4)}`)
    }

    const observer =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              const entry = entries[0]
              inViewRef.current = Boolean(entry?.isIntersecting)
            },
            { root: null, threshold: 0 }
          )
        : null

    observer?.observe(img)

    const loop = () => {
      rafRef.current = window.requestAnimationFrame(loop)
      if (!inViewRef.current) return
      update()
    }

    update()
    rafRef.current = window.requestAnimationFrame(loop)
    return () => {
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current)
      observer?.disconnect()
    }
  }, [enabled, strength])

  return (
    <img
      ref={imgRef}
      {...imgProps}
      className={[
        className,
        enabled ? 'will-change-transform translate-y-[var(--parallax-y)] scale-[var(--parallax-scale)]' : '',
        imgClassName,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  )
}

