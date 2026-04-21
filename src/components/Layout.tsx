import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
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
