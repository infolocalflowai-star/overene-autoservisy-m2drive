import PageMeta from '../components/PageMeta.jsx'
import Hero from '../components/Hero.jsx'
import BrandStrip from '../components/BrandStrip.jsx'
import M2DriveVyber from '../components/M2DriveVyber.jsx'
import RecommendationFlow from '../components/RecommendationFlow.jsx'
import FindGarageForm from '../components/FindGarageForm.jsx'
import BrandSpecialists from '../components/BrandSpecialists.jsx'
import PrePurchaseInspection from '../components/PrePurchaseInspection.jsx'
import ForWhom from '../components/ForWhom.jsx'
import Verification from '../components/Verification.jsx'
import MiniDisclaimer from '../components/MiniDisclaimer.jsx'
import WhyNotGoogleMaps from '../components/WhyNotGoogleMaps.jsx'
import GarageCards from '../components/GarageCards.jsx'
import ForGarages from '../components/ForGarages.jsx'
import Pricing from '../components/Pricing.jsx'
import Disclaimer from '../components/Disclaimer.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import Contact from '../components/Contact.jsx'

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Overené autoservisy pre BMW, Audi, Mercedes-Benz a VW Group | M2Drive"
        description="Nájdite overený autoservis pre BMW, Audi, Mercedes-Benz, Volkswagen, Škoda, Seat/Cupra alebo Porsche. Pomoc s výberom servisu aj predkúpnou kontrolou auta."
        canonical="https://m2drive.sk/"
      />
      <Hero />
      <BrandStrip />
      <M2DriveVyber />
      <RecommendationFlow />
      <FindGarageForm />
      <MiniDisclaimer />
      <BrandSpecialists />
      <PrePurchaseInspection />
      <ForWhom />
      <Verification />
      <MiniDisclaimer />
      <WhyNotGoogleMaps />
      <GarageCards />
      <Disclaimer />
      <ForGarages />
      <Pricing />
      <FinalCTA />
      <Contact />
    </>
  )
}
