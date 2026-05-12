import { MapPin, Star, ArrowRight, ShieldCheck } from 'lucide-react'

const garages = [
  {
    name: 'BMW Specialist Bratislava',
    city: 'Bratislava',
    specialization: 'Diagnostika, motor, rozvody, elektronika',
    brands: ['BMW', 'M-Performance'],
    rating: 4.9,
    reviews: 132,
  },
  {
    name: 'Audi & VW Servis Košice',
    city: 'Košice',
    specialization: 'VAG diagnostika, DSG, TFSI/TDI',
    brands: ['Audi', 'VW', 'Škoda'],
    rating: 4.8,
    reviews: 96,
  },
  {
    name: 'Mercedes-Benz Servis Žilina',
    city: 'Žilina',
    specialization: 'Prémiová diagnostika a komfortné systémy',
    brands: ['Mercedes-Benz', 'AMG'],
    rating: 4.9,
    reviews: 78,
  },
  {
    name: 'Škoda / VW Group Servis Nitra',
    city: 'Nitra',
    specialization: 'Komplet servis VAG, DSG, klíma',
    brands: ['Škoda', 'VW', 'Seat'],
    rating: 4.7,
    reviews: 154,
  },
  {
    name: 'Porsche & Performance Servis Trenčín',
    city: 'Trenčín',
    specialization: 'Performance vozidlá, PDK, OE diely',
    brands: ['Porsche', 'Audi RS', 'BMW M'],
    rating: 5.0,
    reviews: 41,
  },
]

export default function GarageCards() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow-red">Ukážka servisov</span>
            <h2 className="section-title mt-5">
              Vybrané servisy{' '}
              <span className="text-gradient-red">v rámci M2Drive výberu.</span>
            </h2>
            <p className="section-sub">
              Príklady servisov, ktoré spĺňajú naše kritériá. Reálny zoznam
              servisov rozširujeme postupne podľa lokality a značky.
            </p>
          </div>
          <a href="#najst-autoservis" className="btn-secondary self-start lg:self-end">
            Poslať dopyt
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {garages.map((g) => (
            <article key={g.name} className="card card-hover flex flex-col">
              <div className="flex items-center justify-between">
                <span className="badge">
                  <ShieldCheck className="h-3 w-3" />
                  M2Drive výber
                </span>
                <div className="flex items-center gap-1 text-xs text-white/70">
                  <Star className="h-3.5 w-3.5 fill-brand-red text-brand-red" />
                  <span className="font-semibold text-white">{g.rating.toFixed(1)}</span>
                  <span className="text-white/40">· {g.reviews}</span>
                </div>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug">
                {g.name}
              </h3>
              <div className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-white/55">
                <MapPin className="h-3.5 w-3.5" /> {g.city}
              </div>
              <p className="mt-4 text-sm text-white/65 leading-relaxed">
                {g.specialization}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.brands.map((b) => (
                  <span key={b} className="badge-muted">{b}</span>
                ))}
              </div>
              <div className="hairline my-6" />
              <a href="#najst-autoservis" className="btn-primary mt-auto justify-center">
                Požiadať o ponuku
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-white/40">
          * Zobrazené karty sú demonštračné príklady. Reálne profily servisov
          pridávame postupne v rámci M2Drive výberu.
        </p>
      </div>
    </section>
  )
}
