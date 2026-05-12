import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import BrandStrip from './components/BrandStrip.jsx'
import FindGarageForm from './components/FindGarageForm.jsx'
import BrandSpecialists from './components/BrandSpecialists.jsx'
import PrePurchaseInspection from './components/PrePurchaseInspection.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Verification from './components/Verification.jsx'
import WhyNotGoogleMaps from './components/WhyNotGoogleMaps.jsx'
import GarageCards from './components/GarageCards.jsx'
import ForGarages from './components/ForGarages.jsx'
import Pricing from './components/Pricing.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-black text-white">
      <Navbar />
      <main>
        <Hero />
        <BrandStrip />
        <FindGarageForm />
        <BrandSpecialists />
        <PrePurchaseInspection />
        <HowItWorks />
        <Verification />
        <WhyNotGoogleMaps />
        <GarageCards />
        <ForGarages />
        <Pricing />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
