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
            <Route path="about" element={<AboutUs />} />
            <Route path="accreditation" element={<Accreditation />} />
            <Route path="membership" element={<Membership />} />
            <Route path="registry" element={<IEUKRegistry />} />
            <Route path="team" element={<OurTeam />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LenisProvider>
  )
}
