import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { MapPin, Star, ShieldCheck, ArrowRight, Wrench, Phone, Mail, CheckCircle2, ArrowLeft } from 'lucide-react'
import PageMeta from '../components/PageMeta.jsx'
import MiniDisclaimer from '../components/MiniDisclaimer.jsx'
import { findGarage } from '../data/garages.js'
import { Success } from '../components/FindGarageForm.jsx'

const VERIFICATION = [
  'Reálne Google recenzie a verejné hodnotenia',
  'Špecializácia na konkrétne značky, nie univerzálna dielňa',
  'Fotky reálnych prác a dielne',
  'Transparentná komunikácia a jasné odpovede',
  'Jasné služby, kontakty a dostupnosť',
  'Ochota reagovať na štruktúrované dopyty',
]

export default function GarageProfilePage() {
  const { slug } = useParams()
  const g = findGarage(slug)

  if (!g) {
    return (
      <section className="section pt-40">
        <div className="container-tight text-center">
          <h1 className="section-title">Profil sa nenašiel</h1>
          <p className="section-sub">Zoznam autoservisov budujeme postupne.</p>
          <Link to="/autoservisy" className="btn-primary mt-7">
            Späť na zoznam
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <PageMeta
        title={`${g.name} — ${g.city} | M2Drive výber`}
        description={`Demonštračný profil servisu ${g.name} v meste ${g.city}. ${g.specialization}.`}
        canonical={`https://m2drive.sk/autoservisy/${g.slug}`}
      />

      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[500px] bg-radial-red opacity-50" />
          <div className="absolute inset-0 bg-grid-faint [background-size:64px_64px] opacity-[0.12] mask-fade-b" />
        </div>

        <div className="container-tight relative">
          <Link to="/autoservisy" className="inline-flex items-center gap-2 text-xs text-white/55 hover:text-brand-red transition">
            <ArrowLeft className="h-3.5 w-3.5" />
            Späť na zoznam autoservisov
          </Link>

          <div className="mt-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-16">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-red/30 bg-brand-red/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-red">
                  <ShieldCheck className="h-3 w-3" />
                  {g.badge}
                </span>
                <span className="badge-muted">Demonštračný profil</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight">
                {g.name}
              </h1>

              <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/65">
                <MapPin className="h-4 w-4" /> {g.city} · Slovensko
                <span className="mx-2 text-white/20">·</span>
                <Star className="h-4 w-4 fill-brand-red text-brand-red" />
                <span className="text-white font-semibold">{g.rating.toFixed(1)}</span>
                <span className="text-white/40">{g.reviews} hodnotení</span>
              </div>

              <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-white/70">
                {g.description}
              </p>

              <div className="mt-9 grid sm:grid-cols-2 gap-4">
                <Block label="Značky">
                  <div className="flex flex-wrap gap-1.5">
                    {g.brands.map((b) => (
                      <span key={b} className="badge-muted">{b}</span>
                    ))}
                  </div>
                </Block>
                <Block label="Služby">
                  <div className="flex flex-wrap gap-1.5">
                    {g.services.map((s) => (
                      <span key={s} className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70">
                        <Wrench className="h-3 w-3 text-white/45" />
                        {s}
                      </span>
                    ))}
                  </div>
                </Block>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a href="#dopyt" className="btn-primary">
                  Požiadať o ponuku
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link to="/predkupna-kontrola-auta" className="btn-secondary">
                  <ShieldCheck className="h-4 w-4 text-brand-red" />
                  Preveriť jazdené auto
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <aside className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-xl">
                <h2 className="font-display text-lg font-semibold">Kontakt cez M2Drive</h2>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Dopyt pošlete cez M2Drive — spojíme vás priamo so servisom a
                  postaráme sa o štruktúrovaný kontakt.
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  <ContactRow icon={<Phone className="h-4 w-4 text-brand-red" />} text="+421 910 924 250" />
                  <ContactRow icon={<Mail className="h-4 w-4 text-brand-red" />} text="m2drive.office@gmail.com" />
                </div>
                <div className="hairline my-6" />
                <h3 className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-3">
                  M2Drive overenie
                </h3>
                <ul className="space-y-2.5 text-[13px] text-white/70">
                  {VERIFICATION.map((v) => (
                    <li key={v} className="flex gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-red shrink-0" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[11px] text-white/40 leading-relaxed">
                  M2Drive výber nie je úradná certifikácia. Je to kombinácia
                  kritérií, ktoré v praxi rozhodujú o dobrej skúsenosti.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <QuoteForm garage={g} />
      <MiniDisclaimer />
    </>
  )
}

function Block({ label, children }) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/40 mb-3">{label}</div>
      {children}
    </div>
  )
}

function ContactRow({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-white/80">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
        {icon}
      </span>
      {text}
    </div>
  )
}

function QuoteForm({ garage }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    model: '',
    rok: '',
    typ: '',
    popis: '',
    meno: '',
    email: '',
    telefon: '',
  })

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="dopyt" className="section">
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Dopyt o ponuku</span>
            <h2 className="section-title mt-5">
              Požiadať o ponuku — {garage.name}.
            </h2>
            <p className="section-sub">
              Pošlite nám pár informácií o aute a probléme. Spojíme vás priamo
              so servisom — bez náhodného volania a opakovaného vysvetľovania.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/65">
              <li className="flex items-center gap-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-red" />
                Štruktúrovaný dopyt — bez dohadovania.
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/30" />
                Reakcia spravidla do 24 hodín.
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/30" />
                Transparentná komunikácia.
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-red/15 to-transparent blur-2xl opacity-50" />
              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 sm:p-8 backdrop-blur-xl shadow-soft-lift">
                {sent ? (
                  <Success
                    title="Dopyt o ponuku odoslaný"
                    message={`Ďakujeme. Ozveme sa vám čo najskôr s ponukou od servisu ${garage.name}.`}
                    onReset={() => {
                      setSent(false)
                      setForm({ model: '', rok: '', typ: '', popis: '', meno: '', email: '', telefon: '' })
                    }}
                  />
                ) : (
                  <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
                    <Field label="Model auta">
                      <input className="input" required placeholder="napr. 320d / A4 / GLC" value={form.model} onChange={update('model')} />
                    </Field>
                    <Field label="Rok výroby">
                      <input className="input" placeholder="napr. 2019" inputMode="numeric" value={form.rok} onChange={update('rok')} />
                    </Field>
                    <Field label="Typ služby" full>
                      <select className="input" required value={form.typ} onChange={update('typ')}>
                        <option value="" className="bg-black">Vyberte službu</option>
                        {garage.services.map((s) => (
                          <option key={s} value={s} className="bg-black">{s}</option>
                        ))}
                        <option value="Iné" className="bg-black">Iné</option>
                      </select>
                    </Field>
                    <Field label="Popis problému" full>
                      <textarea
                        rows={4}
                        className="input resize-none"
                        placeholder="Krátko popíšte, čo auto robí alebo čo potrebujete..."
                        value={form.popis}
                        onChange={update('popis')}
                      />
                    </Field>
                    <Field label="Meno">
                      <input className="input" required value={form.meno} onChange={update('meno')} />
                    </Field>
                    <Field label="Email">
                      <input className="input" type="email" required value={form.email} onChange={update('email')} />
                    </Field>
                    <Field label="Telefón" full>
                      <input className="input" required placeholder="+421 ..." value={form.telefon} onChange={update('telefon')} />
                    </Field>

                    <div className="sm:col-span-2 mt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      <p className="text-xs text-white/40">
                        Odoslaním súhlasíte so spracovaním údajov pre účely sprostredkovania ponuky.
                      </p>
                      <button type="submit" className="btn-primary">
                        Odoslať dopyt
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children, full }) {
  return (
    <label className={`block ${full ? 'sm:col-span-2' : ''}`}>
      <span className="label">{label}</span>
      {children}
    </label>
  )
}
