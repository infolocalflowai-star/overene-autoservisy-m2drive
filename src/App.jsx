import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import BrandPage from './pages/BrandPage.jsx'
import PrePurchasePage from './pages/PrePurchasePage.jsx'
import ForGaragesPage from './pages/ForGaragesPage.jsx'

function ScrollToTopOnRouteChange() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-black text-white">
      <ScrollToTopOnRouteChange />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bmw-servis" element={<BrandPage brandKey="bmw" />} />
          <Route path="/audi-servis" element={<BrandPage brandKey="audi" />} />
          <Route path="/mercedes-servis" element={<BrandPage brandKey="mercedes" />} />
          <Route path="/vw-servis" element={<BrandPage brandKey="vw" />} />
          <Route path="/skoda-servis" element={<BrandPage brandKey="skoda" />} />
          <Route path="/porsche-servis" element={<BrandPage brandKey="porsche" />} />
          <Route path="/predkupna-kontrola-auta" element={<PrePurchasePage />} />
          <Route path="/pre-autoservisy" element={<ForGaragesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
