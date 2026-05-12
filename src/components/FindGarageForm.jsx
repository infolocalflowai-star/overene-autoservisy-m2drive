import { useState } from 'react'
import { Search, CheckCircle2, MapPin, Wrench, Car, ArrowRight } from 'lucide-react'

const brands = ['BMW', 'Audi', 'Mercedes-Benz', 'Volkswagen', 'Škoda', 'Seat / Cupra', 'Porsche', 'Iná značka']
const serviceTypes = [
  'Diagnostika',
  'Servisná prehliadka',
  'Motor / rozvody',
  'Prevodovka / DSG',
  'Brzdy / podvozok',
  'Elektronika',
  'Klimatizácia',
  'Karoséria / lak',
  'Predkúpna kontrola',
  'Iné',
]

export default function FindGarageForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    znacka: '',
    model: '',
    rok: '',
    lokalita: '',
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
    <section id="najst-autoservis" className="section">
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow-red">Dopytový formulár</span>
            <h2 className="section-title mt-5">
              Pošlite dopyt. Nájdeme servis,{' '}
              <span className="text-gradient-red">ktorý rozumie vášmu autu.</span>
            </h2>
            <p className="section-sub">
              Napíšte nám pár informácií o aute a probléme. Spojíme vás s
              vhodným servisom, ktorý sa špecializuje na vašu značku a
              poskytne vám transparentnú ponuku.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              {[
                ['Manuálne vybrané servisy', 'Žiadne náhodné garáže z internetu.'],
                ['Špecializácia na značku', 'BMW, Audi, Mercedes, VW Group, Porsche.'],
                ['Transparentná komunikácia', 'Reálne odpovede, reálne ceny.'],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-red shrink-0" />
                  <div>
                    <div className="font-medium text-white">{t}</div>
                    <div className="text-white/55">{d}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Pill icon={<Car className="h-3.5 w-3.5" />} text="7 značiek" />
              <Pill icon={<MapPin className="h-3.5 w-3.5" />} text="Celé Slovensko" />
              <Pill icon={<Wrench className="h-3.5 w-3.5" />} text="Všetky typy opráv" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-red/20 to-transparent blur-2xl opacity-50" />
              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 sm:p-8 backdrop-blur-xl shadow-soft-lift">
                {sent ? (
                  <Success
                    title="Dopyt odoslaný"
                    message="Ďakujeme. Ozveme sa vám čo najskôr s vhodným servisom pre vaše auto."
                    onReset={() => {
                      setSent(false)
                      setForm({
                        znacka: '', model: '', rok: '', lokalita: '', typ: '',
                        popis: '', meno: '', email: '', telefon: '',
                      })
                    }}
                  />
                ) : (
                  <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
                    <Field label="Značka auta" full={false}>
                      <select className="input" required value={form.znacka} onChange={update('znacka')}>
                        <option value="" className="bg-black">Vyberte značku</option>
                        {brands.map((b) => (
                          <option key={b} value={b} className="bg-black">{b}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Model">
                      <input className="input" placeholder="napr. 320d / A4 / GLC" value={form.model} onChange={update('model')} />
                    </Field>
                    <Field label="Rok výroby">
                      <input className="input" placeholder="napr. 2019" inputMode="numeric" value={form.rok} onChange={update('rok')} />
                    </Field>
                    <Field label="Lokalita">
                      <input className="input" placeholder="mesto / okres" value={form.lokalita} onChange={update('lokalita')} />
                    </Field>
                    <Field label="Typ služby" full>
                      <select className="input" required value={form.typ} onChange={update('typ')}>
                        <option value="" className="bg-black">Čo potrebujete?</option>
                        {serviceTypes.map((t) => (
                          <option key={t} value={t} className="bg-black">{t}</option>
                        ))}
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
                        <Search className="h-4 w-4" />
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

function Pill({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75">
      <span className="text-brand-red">{icon}</span>
      {text}
    </span>
  )
}

export function Success({ title, message, onReset }) {
  return (
    <div className="text-center py-10">
      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-brand-red/40 bg-brand-red/10">
        <CheckCircle2 className="h-7 w-7 text-brand-red" />
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-white/60 max-w-md mx-auto">{message}</p>
      {onReset && (
        <button onClick={onReset} className="btn-secondary mt-7">
          Odoslať ďalší dopyt
        </button>
      )}
    </div>
  )
}
