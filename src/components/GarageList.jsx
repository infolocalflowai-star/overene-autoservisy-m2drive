import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Star, ShieldCheck, ArrowRight, Wrench, Filter, X } from 'lucide-react'
import { BRANDS, CITIES, SERVICES, garages } from '../data/garages.js'

export default function GarageList() {
  const [brand, setBrand] = useState('')
  const [city, setCity] = useState('')
  const [service, setService] = useState('')

  const filtered = useMemo(() => {
    return garages.filter((g) => {
      if (brand && !g.brands.includes(brand)) return false
      if (city && g.city !== city) return false
      if (service && !g.services.includes(service)) return false
      return true
    })
  }, [brand, city, service])

  const resetFilters = () => {
    setBrand('')
    setCity('')
    setService('')
  }

  const hasFilters = brand || city || service

  return (
    <section id="autoservisy" className="section">
      <div className="container-tight">
        <div className="max-w-3xl">
          <span className="eyebrow-red">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-red" />
            Ukážka pripravovaného výberu autoservisov
          </span>
          <h1 className="section-title mt-5">
            Autoservisy v M2Drive výbere.
          </h1>
          <p className="section-sub">
            Vyberte si značku, mesto alebo typ služby. Postupne pridávame
            partnerské servisy so skutočnou špecializáciou — namiesto stoviek
            náhodných záznamov.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
          <div className="flex items-center gap-2 text-white/55 text-xs uppercase tracking-[0.18em] mb-4">
            <Filter className="h-3.5 w-3.5" />
            Filter výberu
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <Select label="Značka" value={brand} onChange={setBrand} options={BRANDS} placeholder="Všetky značky" />
            <Select label="Mesto" value={city} onChange={setCity} options={CITIES} placeholder="Celé Slovensko" />
            <Select label="Služba" value={service} onChange={setService} options={SERVICES} placeholder="Všetky služby" />
          </div>
          {hasFilters && (
            <button onClick={resetFilters} className="mt-4 inline-flex items-center gap-2 text-xs text-white/55 hover:text-brand-red transition">
              <X className="h-3.5 w-3.5" />
              Zrušiť filter
            </button>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between text-xs text-white/45">
          <span>
            {filtered.length} {filtered.length === 1 ? 'záznam' : filtered.length >= 2 && filtered.length <= 4 ? 'záznamy' : 'záznamov'} v ukážke
          </span>
          <span className="hidden sm:inline">Demonštračné profily</span>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-10 text-center">
            <p className="text-white/65">
              Pre zadané filtre zatiaľ nemáme ukážkový servis. Reálnych partnerov
              postupne pridávame.
            </p>
            <button onClick={resetFilters} className="btn-secondary mt-6">
              Zobraziť všetky ukážky
            </button>
          </div>
        ) : (
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {filtered.map((g) => (
              <GarageCard key={g.slug} g={g} />
            ))}
          </div>
        )}

        <div className="mt-12 rounded-2xl border border-brand-red/20 bg-brand-red/[0.04] p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red shrink-0">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold">
                Transparentne k aktuálnemu stavu
              </h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed max-w-2xl">
                Prvé partnerské autoservisy aktuálne oslovujeme. Reálne profily
                budú pridané až po kontrole základných informácií a súhlase
                servisu. To, čo vidíte vyššie, sú demonštračné ukážky toho, ako
                budú reálne záznamy vyzerať.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Select({ label, value, onChange, options, placeholder }) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      <select className="input" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="" className="bg-black">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-black">{o}</option>
        ))}
      </select>
    </label>
  )
}

function GarageCard({ g }) {
  return (
    <article className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 sm:p-7 backdrop-blur-xl transition hover:border-brand-red/30 overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -right-10 h-48 w-48 rounded-full bg-brand-red/[0.06] blur-3xl opacity-0 group-hover:opacity-100 transition" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-red/30 bg-brand-red/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-red">
            <ShieldCheck className="h-3 w-3" />
            {g.badge}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-white/65">
            <Star className="h-3.5 w-3.5 fill-brand-red text-brand-red" />
            <span className="font-semibold text-white">{g.rating.toFixed(1)}</span>
            <span className="text-white/40">· {g.reviews} hodnotení</span>
          </div>
        </div>

        <h3 className="mt-5 font-display text-2xl font-semibold leading-tight">
          {g.name}
        </h3>
        <div className="mt-2 inline-flex items-center gap-1.5 text-sm text-white/60">
          <MapPin className="h-4 w-4" /> {g.city}
        </div>

        <p className="mt-4 text-sm text-white/65 leading-relaxed">
          {g.specialization}
        </p>

        <div className="mt-5">
          <div className="text-[10px] uppercase tracking-[0.18em] text-white/40 mb-2">Značky</div>
          <div className="flex flex-wrap gap-1.5">
            {g.brands.map((b) => (
              <span key={b} className="badge-muted">{b}</span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="text-[10px] uppercase tracking-[0.18em] text-white/40 mb-2">Služby</div>
          <div className="flex flex-wrap gap-1.5">
            {g.services.map((s) => (
              <span key={s} className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70">
                <Wrench className="h-3 w-3 text-white/45" />
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="hairline my-6" />

        <div className="flex flex-col sm:flex-row gap-3">
          <Link to={`/autoservisy/${g.slug}#dopyt`} className="btn-primary">
            Požiadať o ponuku
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to={`/autoservisy/${g.slug}`} className="btn-secondary">
            Zobraziť profil
          </Link>
        </div>
      </div>
    </article>
  )
}
