import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const reduceMotion = !!window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    )?.matches

    const rootEl = document.documentElement
    if (!reduceMotion) rootEl.classList.add('ieuk-animate')
    else rootEl.classList.remove('ieuk-animate')

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('.ieuk-reveal')
    )
    if (nodes.length === 0) return

    if (reduceMotion) {
      for (const el of nodes) el.classList.add('ieuk-inview')
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      for (const el of nodes) el.classList.add('ieuk-inview')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.classList.add('ieuk-inview')
          observer.unobserve(el)
        }
      },
      { root: null, threshold: 0, rootMargin: '0px 0px -10% 0px' }
    )

    for (const el of nodes) observer.observe(el)
    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div className="flex min-h-dvh flex-col bg-[var(--ieuk-blush)]">
      <Header />
      <main
        id="site-main"
        className="w-full flex-1 overflow-x-hidden px-4 py-8 pb-14 sm:px-5 md:px-10 lg:px-[50px]"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
