import PageMeta from '../components/PageMeta.jsx'
import Hero from '../components/Hero.jsx'
import FindGarageForm from '../components/FindGarageForm.jsx'
import Verification from '../components/Verification.jsx'
import WhyNotGoogleMaps from '../components/WhyNotGoogleMaps.jsx'
import Disclaimer from '../components/Disclaimer.jsx'
import FinalCTA from '../components/FinalCTA.jsx'

const BRANDS = {
  bmw: {
    name: 'BMW',
    slug: 'bmw-servis',
    eyebrow: 'BMW servis · Slovensko',
    title: 'Hľadáte autoservis pre BMW?',
    highlight: 'Špecialista, ktorý pozná vašu sériu.',
    subtitle:
      'Nájdeme servis so skúsenosťami s BMW E/F/G sériou — motormi N/B, diagnostikou ISTA, rozvodmi, elektronikou aj M-Performance verziami. Žiadne univerzálne dielne.',
    formBrand: 'BMW',
    metaTitle: 'BMW servis — overený špecialista na vašu sériu | M2Drive',
    metaDesc:
      'Hľadáte autoservis pre BMW na Slovensku? M2Drive pomôže s výberom servisu so skúsenosťami s E/F/G sériou, motormi, rozvodmi a diagnostikou ISTA.',
  },
  audi: {
    name: 'Audi',
    slug: 'audi-servis',
    eyebrow: 'Audi servis · Slovensko',
    title: 'Hľadáte autoservis pre Audi?',
    highlight: 'Špecialista na TFSI, TDI, DSG a MMI.',
    subtitle:
      'Spojíme vás so servisom, ktorý pozná Audi naprieč generáciami — motory TFSI/TDI, DSG/S tronic, Quattro, MMI a presnú VAG diagnostiku.',
    formBrand: 'Audi',
    metaTitle: 'Audi servis — VAG diagnostika a špecializácia | M2Drive',
    metaDesc:
      'Audi servis so skúsenosťami s TFSI/TDI, DSG a MMI systémami. M2Drive pomôže vybrať vhodný špecializovaný servis na Slovensku.',
  },
  mercedes: {
    name: 'Mercedes-Benz',
    slug: 'mercedes-servis',
    eyebrow: 'Mercedes-Benz servis · Slovensko',
    title: 'Hľadáte autoservis pre Mercedes-Benz?',
    highlight: 'Špecialista na prémiové systémy.',
    subtitle:
      'Mercedes-Benz si vyžaduje presnú diagnostiku, kvalitné OE diely a skúsenosti s komfortnými a asistenčnými systémami. Nájdeme vhodný servis pre vašu generáciu.',
    formBrand: 'Mercedes-Benz',
    metaTitle: 'Mercedes-Benz servis — prémiová diagnostika a OE diely | M2Drive',
    metaDesc:
      'Mercedes-Benz servis so zameraním na presnú diagnostiku, kvalitné diely a prémiové systémy. M2Drive pomáha s výberom vhodného servisu.',
  },
  vw: {
    name: 'Volkswagen',
    slug: 'vw-servis',
    eyebrow: 'Volkswagen servis · Slovensko',
    title: 'Hľadáte autoservis pre Volkswagen?',
    highlight: 'Špecialista na VW Group.',
    subtitle:
      'VW vozidlá zdieľajú platformy s Audi, Škodou a Seatom. Nájdeme servis so skúsenosťami s TSI/TDI, DSG prevodovkami a VAG diagnostikou.',
    formBrand: 'Volkswagen',
    metaTitle: 'VW servis — TSI, TDI, DSG diagnostika | M2Drive',
    metaDesc:
      'Volkswagen servis so skúsenosťami s TSI/TDI motormi, DSG prevodovkami a VAG diagnostikou. M2Drive pomôže s výberom servisu.',
  },
  skoda: {
    name: 'Škoda',
    slug: 'skoda-servis',
    eyebrow: 'Škoda servis · Slovensko',
    title: 'Hľadáte autoservis pre Škodu?',
    highlight: 'Špecialista na VAG platformu.',
    subtitle:
      'Škoda zdieľa motory a prevodovky s VW Group. Spojíme vás so servisom, ktorý pozná spoločné komponenty aj špecifiká Octavie, Superbu a Kodiaqu.',
    formBrand: 'Škoda',
    metaTitle: 'Škoda servis — VAG špecialista | M2Drive',
    metaDesc:
      'Škoda servis so skúsenosťami s VAG motormi a prevodovkami. M2Drive pomáha vodičom nájsť vhodný špecializovaný servis.',
  },
  porsche: {
    name: 'Porsche',
    slug: 'porsche-servis',
    eyebrow: 'Porsche servis · Slovensko',
    title: 'Hľadáte autoservis pre Porsche?',
    highlight: 'Špecialista na výkonové vozidlá.',
    subtitle:
      'Porsche je extrém v inžinierstve aj nárokoch na servis. Nájdeme špecialistu so skúsenosťami s PDK, výkonovými motormi a OE dielmi — od 911 cez Cayenne po Taycan.',
    formBrand: 'Porsche',
    metaTitle: 'Porsche servis — špecialista na výkonové vozidlá | M2Drive',
    metaDesc:
      'Porsche servis so skúsenosťami s PDK, výkonovými motormi a OE dielmi. M2Drive pomáha s výberom kvalifikovaného servisu.',
  },
}

export default function BrandPage({ brandKey }) {
  const b = BRANDS[brandKey]
  if (!b) return null
  return (
    <>
      <PageMeta
        title={b.metaTitle}
        description={b.metaDesc}
        canonical={`https://m2drive.sk/${b.slug}`}
      />
      <Hero
        eyebrow={b.eyebrow}
        title={b.title}
        highlight={b.highlight}
        subtitle={b.subtitle}
        showH1
      />
      <FindGarageForm prefillBrand={b.formBrand} />
      <Verification />
      <WhyNotGoogleMaps />
      <Disclaimer />
      <FinalCTA />
    </>
  )
}
