import PageMeta from '../components/PageMeta.jsx'
import GarageList from '../components/GarageList.jsx'
import MiniDisclaimer from '../components/MiniDisclaimer.jsx'
import FinalCTA from '../components/FinalCTA.jsx'

export default function GaragesPage() {
  return (
    <>
      <PageMeta
        title="Autoservisy v M2Drive výbere — zoznam partnerov | M2Drive"
        description="Zoznam autoservisov v M2Drive výbere — BMW, Audi, Mercedes-Benz, Volkswagen, Škoda, Seat/Cupra a Porsche špecialisti. Filter podľa značky, mesta a typu služby."
        canonical="https://m2drive.sk/autoservisy"
      />
      <div className="pt-28 sm:pt-32" />
      <GarageList />
      <MiniDisclaimer />
      <FinalCTA />
    </>
  )
}
