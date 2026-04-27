import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CursorFollower from './components/CursorFollower'
import LenisProvider from './components/LenisProvider'
import Layout from './components/Layout'
import AboutUs from './pages/AboutUs'
import Accreditation from './pages/Accreditation'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import IEUKRegistry from './pages/IEUKRegistry'
import Membership from './pages/Membership'
import OurTeam from './pages/OurTeam'

export default function App() {
  return (
    <LenisProvider>
      <CursorFollower />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="our-team" element={<OurTeam />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="ieuk-registry" element={<IEUKRegistry />} />
            <Route path="about" element={<Navigate to="/about-us" replace />} />
            <Route path="team" element={<Navigate to="/our-team" replace />} />
            <Route path="contact" element={<Navigate to="/contact-us" replace />} />
            <Route path="registry" element={<Navigate to="/ieuk-registry" replace />} />
            <Route path="accreditation" element={<Accreditation />} />
            <Route path="membership" element={<Membership />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LenisProvider>
  )
}
