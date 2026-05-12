import PageMeta from '../components/PageMeta.jsx'
import Hero from '../components/Hero.jsx'
import ForGarages from '../components/ForGarages.jsx'
import Pricing from '../components/Pricing.jsx'
import Disclaimer from '../components/Disclaimer.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import Contact from '../components/Contact.jsx'

export default function ForGaragesPage() {
  return (
    <>
      <PageMeta
        title="Pre autoservisy — staňte sa M2Drive partnerom | M2Drive"
        description="Prevádzkujete kvalitný autoservis so zameraním na konkrétnu značku? M2Drive vám prinesie relevantné dopyty od vodičov BMW, Audi, Mercedes, VW Group a Porsche."
        canonical="https://m2drive.sk/pre-autoservisy"
      />
      <Hero
        eyebrow="Pre autoservisy"
        title="Pridajte svoj autoservis do M2Drive výberu."
        highlight="Relevantní zákazníci. Kvalitné dopyty."
        subtitle="Spolupracujeme so servismi, ktoré sa špecializujú na konkrétne značky. Prinášame vám štruktúrované dopyty od vodičov BMW, Audi, Mercedes, VW Group a Porsche."
        primaryHref="#pre-autoservisy"
        primaryLabel="Pridať autoservis"
        secondaryHref="#cennik"
        secondaryLabel="Pozrieť cenník"
      />
      <ForGarages />
      <Pricing />
      <Disclaimer />
      <FinalCTA />
      <Contact />
    </>
  )
}
