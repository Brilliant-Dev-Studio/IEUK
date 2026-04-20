import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
  return (
    <div className="flex min-h-dvh flex-col bg-[var(--ieuk-blush)]">
      <Header />
      <main
        id="site-main"
        className="mx-auto w-full max-w-6xl flex-1 overflow-x-hidden px-4 py-8 pb-14 sm:px-5"
      >
        <Outlet />
      </main>
    </div>
  )
}
