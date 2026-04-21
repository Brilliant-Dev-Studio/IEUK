import { useCallback, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { images } from '../data/images'

type NavItem = { to: string; label: string; end?: boolean }

const navLinks: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/accreditation', label: 'Accreditation' },
  { to: '/membership', label: 'Membership' },
  { to: '/registry', label: 'IEUK Registry' },
  { to: '/team', label: 'Our Team' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const panelId = useId()

  const closeMenu = useCallback(() => setMenuOpen(false), [])

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
                'fixed inset-y-0 right-0 z-[110] flex w-[min(100%,22rem)] flex-col overflow-hidden rounded-l-2xl border-l border-[#5d1420]/12 bg-white shadow-[0_0_0_1px_rgba(93,20,32,0.04),-12px_0_48px_rgba(26,6,9,0.18)]',
                'transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform',
                menuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none',
              ].join(' ')}
              aria-hidden={!menuOpen}
            >
              <div className="h-[3px] shrink-0 bg-gradient-to-r from-[#5d1420] via-[#7a1f30] to-[#5d1420]/70" aria-hidden />
              <div className="flex h-[81px] shrink-0 items-end border-b border-[#5d1420]/10 bg-gradient-to-b from-[var(--ieuk-blush)]/70 to-white px-5 pb-3 pt-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#5d1420]">Navigate</p>
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
                          ? 'bg-[var(--ieuk-blush)] text-[#5d1420] ring-1 ring-[#5d1420]/12'
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
                              ? 'translate-x-0 text-[#5d1420]'
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
        'sticky top-0 border-b border-neutral-200 bg-white',
        menuOpen ? 'z-[120]' : 'z-30',
      ].join(' ')}
    >
      <div className="mx-auto flex h-[84px] max-w-6xl items-center justify-between px-3 sm:px-5">
        <NavLink to="/" className="flex shrink-0 items-center gap-2 outline-offset-4" onClick={closeMenu}>
          <img src={images.logo} alt="IEUK Logo" className="w-[150px]" />
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
                  isActive ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 shrink-0 flex-col items-center justify-center text-neutral-800 lg:hidden focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
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
