import PageMeta from '../components/PageMeta.jsx'
import Hero from '../components/Hero.jsx'
import PrePurchaseInspection from '../components/PrePurchaseInspection.jsx'
import ForWhom from '../components/ForWhom.jsx'
import Verification from '../components/Verification.jsx'
import Disclaimer from '../components/Disclaimer.jsx'
import FinalCTA from '../components/FinalCTA.jsx'

export default function PrePurchasePage() {
  return (
    <>
      <PageMeta
        title="Predkúpna kontrola jazdeného auta | M2Drive"
        description="Plánujete kúpu jazdeného auta? M2Drive vám pomôže nájsť overený servis, ktorý ho dôkladne preverí pred kúpou — diagnostika, vizuálna kontrola, skryté riziká."
        canonical="https://m2drive.sk/predkupna-kontrola-auta"
      />
      <Hero
        eyebrow="Predkúpna kontrola"
        title="Predkúpna kontrola jazdeného auta."
        highlight="Bez prekvapení po podpise zmluvy."
        subtitle="Pošlite link na inzerát a my vám pomôžeme spojiť sa s overeným servisom, ktorý auto dôkladne preverí — diagnostika, vizuálna kontrola, skryté riziká a odhad nákladov."
        primaryHref="#predkupna-kontrola"
        primaryLabel="Preveriť jazdené auto"
        secondaryHref="#pre-koho"
        secondaryLabel="Pre koho je služba"
      />
      <PrePurchaseInspection />
      <ForWhom />
      <Verification />
      <Disclaimer />
      <FinalCTA />
    </>
  )
}
