import { ArrowRight } from 'lucide-react'

const brands = [
  {
    id: 'bmw-servis',
    name: 'BMW',
    tag: 'Diagnostika · Rozvody · Motor',
    copy:
      'BMW potrebuje servis, ktorý pozná typické problémy motorov, rozvodov, elektroniky a presnej diagnostiky.',
    accent: 'from-brand-red/30 via-brand-red/0 to-transparent',
  },
  {
    id: 'audi-servis',
    name: 'Audi',
    tag: 'TFSI · TDI · Quattro · MMI',
    copy:
      'Audi vyžaduje skúsenosti s TFSI/TDI motormi, MMI systémami a presnou diagnostikou VAG vozidiel.',
    accent: 'from-white/15 to-transparent',
  },
  {
    id: 'mercedes-servis',
    name: 'Mercedes-Benz',
    tag: 'Diagnostika · OE diely · Komfort',
    copy:
      'Mercedes-Benz si vyžaduje servis s dôrazom na presnú diagnostiku, kvalitu dielov a skúsenosti s prémiovými systémami.',
    accent: 'from-brand-red/25 via-brand-red/0 to-transparent',
  },
  {
    id: 'volkswagen-servis',
    name: 'Volkswagen',
    tag: 'DSG · TDI · TSI · Elektronika',
    copy:
      'VW vozidlá často vyžadujú špecializovanú diagnostiku, skúsenosti s DSG prevodovkami a TSI/TDI motormi.',
    accent: 'from-white/10 to-transparent',
  },
  {
    id: 'skoda-servis',
    name: 'Škoda',
    tag: 'VAG · DSG · Komplet servis',
    copy:
      'Škoda zdieľa platformy s VW Group — kvalitný servis pozná spoločné motory, prevodovky aj diagnostiku.',
    accent: 'from-brand-red/20 via-brand-red/0 to-transparent',
  },
  {
    id: 'seat-cupra-servis',
    name: 'Seat / Cupra',
    tag: 'TSI · DSG · Performance',
    copy:
      'Seat a Cupra majú VAG základy, no aj výkonové špecifiká. Servis by mal poznať performance verzie a ich nuansy.',
    accent: 'from-white/10 to-transparent',
  },
  {
    id: 'porsche-servis',
    name: 'Porsche',
    tag: 'PDK · Performance · OE',
    copy:
      'Porsche je extrém v inžinierstve aj nárokoch na servis. Vyžaduje špecialistu s reálnymi skúsenosťami a OE dielmi.',
    accent: 'from-brand-red/40 via-brand-red/0 to-transparent',
  },
]

export default function BrandSpecialists() {
  return (
    <section id="znacky" className="section">
      <div className="container-tight">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow-red">Špecializácia</span>
            <h2 className="section-title mt-5">
              Každá značka má vlastné{' '}
              <span className="text-gradient-red">slabé miesta.</span>
            </h2>
            <p className="section-sub">
              Preto pracujeme so servismi, ktoré sa zameriavajú na konkrétne
              značky — nie s univerzálnymi dielňami, ktoré opravia „všetko“.
            </p>
          </div>
          <a href="#najst-autoservis" className="btn-secondary self-start lg:self-end">
            Nájsť špecialistu
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands.map((b, i) => (
            <article
              key={b.id}
              id={b.id}
              className={`group relative card card-hover overflow-hidden ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div
                className={`pointer-events-none absolute -inset-x-10 -top-24 h-48 bg-gradient-to-b ${b.accent} blur-2xl opacity-70`}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="badge-muted">Špecialista</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold tracking-tight">
                  {b.name}
                </h3>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-white/45">
                  {b.tag}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/65">
                  {b.copy}
                </p>
                <div className="hairline my-6" />
                <a
                  href="#najst-autoservis"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/85 hover:text-brand-red transition"
                >
                  Nájsť {b.name} servis
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
