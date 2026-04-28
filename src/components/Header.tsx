import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { images } from '../data/images'
import { useLenis } from './LenisProvider'

export type NavItem = { to: string; label: string; end?: boolean }

export const navLinks: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/about-us', label: 'About Us' },
  { to: '/accreditation', label: 'Accreditation' },
  { to: '/membership', label: 'Membership' },
  { to: '/ieuk-registry', label: 'IEUK Registry' },
  { to: '/our-team', label: 'Our Team' },
  { to: '/contact-us', label: 'Contact Us' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const panelId = useId()
  const lenis = useLenis()
  const lastYRef = useRef(0)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (menuOpen) return

    const minY = 96
    const minDelta = 8

    if (lenis) {
      const onScroll = (l: {
        scroll?: number
        actualScroll?: number
        direction?: number
      }) => {
        const y = (l.scroll ?? l.actualScroll ?? 0) as number
        const lastY = lastYRef.current
        lastYRef.current = y

        if (y < minY) {
          setHidden(false)
          return
        }

        const delta = y - lastY
        if (Math.abs(delta) < minDelta) return

        // Lenis sets direction as 1 (down) and -1 (up) in our build.
        const dir = (l.direction ?? Math.sign(delta)) as number
        setHidden(dir > 0)
      }

      lastYRef.current = window.scrollY || 0
      lenis.on('scroll', onScroll as never)
      return () => {
        lenis.off('scroll', onScroll as never)
      }
    }

    const onNativeScroll = () => {
      const y = window.scrollY || 0
      const lastY = lastYRef.current
      lastYRef.current = y

      if (y < minY) {
        setHidden(false)
        return
      }

      const delta = y - lastY
      if (Math.abs(delta) < minDelta) return
      setHidden(delta > 0)
    }

    lastYRef.current = window.scrollY || 0
    window.addEventListener('scroll', onNativeScroll, { passive: true })
    return () => window.removeEventListener('scroll', onNativeScroll)
  }, [lenis, menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [menuOpen, closeMenu])

  const mobileMenuLayer =
    typeof document !== 'undefined'
      ? createPortal(
          <div className="lg:hidden" id={panelId}>
            <button
              type="button"
              aria-hidden={!menuOpen}
              tabIndex={menuOpen ? 0 : -1}
              className={[
                'fixed inset-0 z-[100] bg-[#1a0609]/55 backdrop-blur-sm',
                'transition-[opacity,visibility] duration-300 ease-out',
                menuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none',
              ].join(' ')}
              onClick={closeMenu}
            />

            <div
              className={[
                'fixed inset-y-0 right-0 z-[110] flex w-[min(100%,22rem)] flex-col overflow-hidden rounded-l-2xl border-l border-[#5a0c16]/12 bg-white shadow-[0_0_0_1px_rgba(90,12,22,0.04),-12px_0_48px_rgba(18,3,4,0.18)]',
                'transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform',
                menuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none',
              ].join(' ')}
              aria-hidden={!menuOpen}
            >
              <div className="h-[3px] shrink-0 bg-gradient-to-r from-[#5a0c16] via-[#6a1a22] to-[#5a0c16]/70" aria-hidden />
              <div className="flex h-[81px] shrink-0 items-end border-b border-[#5a0c16]/10 bg-gradient-to-b from-[var(--ieuk-blush)]/70 to-white px-5 pb-3 pt-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a0c16]">Navigate</p>
              </div>
              <nav
                className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
                aria-label="Mobile main"
              >
                {navLinks.map(({ to, label, end: exact }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={exact}
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      [
                        'group flex items-center justify-between gap-3 rounded-xl px-3.5 py-3.5 text-[15px] font-medium tracking-wide transition-[color,background-color,border-color] duration-200',
                        isActive
                          ? 'bg-[var(--ieuk-blush)] text-[#5a0c16] ring-1 ring-[#5a0c16]/12'
                          : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900',
                      ].join(' ')
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{label}</span>
                        <ChevronRight
                          className={[
                            'h-4 w-4 shrink-0 transition-[color,transform] duration-200',
                            isActive
                              ? 'translate-x-0 text-[#5a0c16]'
                              : 'text-neutral-400 group-hover:translate-x-0.5 group-hover:text-neutral-600',
                          ].join(' ')}
                          aria-hidden
                          strokeWidth={2}
                        />
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>,
          document.body,
        )
      : null

  return (
    <>
    <header
      className={[
        'sticky top-0 relative border-b border-[#5a0c16]/22 bg-[var(--ieuk-blush)] shadow-[0_10px_26px_-16px_rgba(90,12,22,0.38)]',
        'transform-gpu transition-transform duration-300 ease-out will-change-transform',
        hidden && !menuOpen ? '-translate-y-full' : 'translate-y-0',
        menuOpen ? 'z-[120]' : 'z-30',
      ].join(' ')}
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#5a0c16]/40 to-transparent"
        aria-hidden
      />
      <div className="flex h-[84px] w-full items-center justify-between px-4 sm:px-5 md:px-10 lg:px-[50px]">
        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-2 outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5a0c16]/60"
          onClick={closeMenu}
        >
          <img
            src={images.logoHeader}
            alt="IEUK Logo"
            className="h-[50px] w-auto max-w-[min(100%,220px)] object-contain object-left drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)] sm:h-[56px]"
          />
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map(({ to, label, end: exact }) => (
            <NavLink
              key={to}
              to={to}
              end={exact}
              className={({ isActive }) =>
                [
                  'text-sm font-medium tracking-wide transition-colors duration-200',
                  isActive
                    ? 'text-[#5a0c16] underline decoration-[#5a0c16]/45 underline-offset-[10px]'
                    : 'text-neutral-700 hover:text-neutral-950',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 shrink-0 flex-col items-center justify-center text-[#5a0c16] lg:hidden focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5a0c16]/60"
          aria-expanded={menuOpen}
          aria-controls={panelId}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            aria-hidden
            className={[
              'block h-0.5 w-[22px] origin-center rounded-full bg-current',
              'transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
              menuOpen ? 'translate-y-[7px] rotate-45' : 'translate-y-0 rotate-0',
            ].join(' ')}
          />
          <span
            aria-hidden
            className={[
              'my-[5px] block h-0.5 w-[22px] rounded-full bg-current',
              'transition-[transform,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]',
              menuOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100',
            ].join(' ')}
          />
          <span
            aria-hidden
            className={[
              'block h-0.5 w-[22px] origin-center rounded-full bg-current',
              'transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
              menuOpen ? '-translate-y-[7px] -rotate-45' : 'translate-y-0 rotate-0',
            ].join(' ')}
          />
        </button>
      </div>
    </header>
    {mobileMenuLayer}
    </>
  )
}
