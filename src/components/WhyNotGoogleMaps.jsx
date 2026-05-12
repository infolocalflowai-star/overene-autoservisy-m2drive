import { MapPin, Star, AlertOctagon, Filter, ArrowRight } from 'lucide-react'

const points = [
  {
    icon: <MapPin className="h-5 w-5" />,
    title: 'Google Maps neukáže špecializáciu',
    desc: 'Vidíte zoznam autoservisov v okolí, ale neviete, ktorý sa skutočne venuje vašej značke.',
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: 'Recenzie môžu klamať',
    desc: 'Krátke, nekonkrétne alebo nakúpené recenzie nehovoria o reálnej kvalite práce.',
  },
  {
    icon: <AlertOctagon className="h-5 w-5" />,
    title: 'Najlacnejšia ponuka = najdrahšia chyba',
    desc: 'Cena nižšia o 20 % vás môže stáť tisíce eur, ak servis odvedie zlú robotu.',
  },
  {
    icon: <Filter className="h-5 w-5" />,
    title: 'Dobré recenzie ≠ správny servis pre vás',
    desc: 'Skvelý servis na Škodu Octaviu nemusí byť vhodný na BMW M3 alebo Porsche Cayenne.',
  },
]

export default function WhyNotGoogleMaps() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow-red">Realita trhu</span>
            <h2 className="section-title mt-5">
              Prečo nestačí <span className="text-gradient-red">Google Maps.</span>
            </h2>
            <p className="section-sub">
              Vyhľadávanie servisu cez mapy je rýchle — ale nie vždy bezpečné.
              M2Drive sa zameriava na menej, ale lepšie vybraných servisov pre
              vašu konkrétnu značku.
            </p>
            <a href="#najst-autoservis" className="btn-primary mt-8">
              Nájsť overený servis
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {points.map((p) => (
              <div key={p.title} className="card card-hover">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red">
                  {p.icon}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
