import { useState } from 'react'
import { ShieldCheck, ArrowRight, AlertTriangle, Eye, Gauge, FileSearch } from 'lucide-react'
import { Success } from './FindGarageForm.jsx'

export default function PrePurchaseInspection() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    link: '',
    znackaModel: '',
    lokalita: '',
    rozpocet: '',
    kedy: '',
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
    <section id="predkupna-kontrola" className="section">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[1100px] -translate-x-1/2 bg-radial-red opacity-60" />
      </div>

      <div className="container-tight relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <span className="eyebrow-red">
              <ShieldCheck className="h-3.5 w-3.5" />
              Preveriť jazdené auto
            </span>
            <h2 className="section-title mt-5">
              Nekupujte jazdené auto naslepo.{' '}
              <span className="text-gradient-red">
                Nechajte ho preveriť v overenom servise.
              </span>
            </h2>
            <p className="section-sub">
              Pošlite nám link na inzerát a my vám pomôžeme spojiť sa so
              servisom, ktorý sa špecializuje na danú značku. Predkúpna
              kontrola môže ušetriť tisíce eur a mesiace stresu.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <Feature
                icon={<Eye className="h-5 w-5" />}
                title="Vizuálna kontrola"
                desc="Karoséria, podvozok, motorový priestor, stopy po nehode."
              />
              <Feature
                icon={<Gauge className="h-5 w-5" />}
                title="Diagnostika"
                desc="Riadiace jednotky, chybové kódy, stav komponentov."
              />
              <Feature
                icon={<FileSearch className="h-5 w-5" />}
                title="História a najazdené km"
                desc="Overenie reálneho stavu a servisnej histórie ak je dostupná."
              />
              <Feature
                icon={<AlertTriangle className="h-5 w-5" />}
                title="Skryté riziká"
                desc="Náklady, ktoré by ste pri kúpe inak nevideli."
              />
            </div>

            <div className="mt-10 rounded-2xl border border-brand-red/25 bg-brand-red/[0.06] p-5">
              <p className="text-sm text-white/80">
                <span className="font-semibold text-white">Predkúpna kontrola = poistka pri kúpe.</span>{' '}
                Servis presne povie, čo auto má, čo ho čaká a koľko to bude stáť — predtým, ako podpíšete kúpnu zmluvu.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-red/30 to-transparent blur-2xl opacity-50" />
              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 sm:p-8 backdrop-blur-xl shadow-soft-lift">
                {sent ? (
                  <Success
                    title="Dopyt odoslaný"
                    message="Vďaka. Ozveme sa s návrhom servisu, ktorý vie auto preveriť."
                    onReset={() => {
                      setSent(false)
                      setForm({ link:'', znackaModel:'', lokalita:'', rozpocet:'', kedy:'', meno:'', email:'', telefon:'' })
                    }}
                  />
                ) : (
                  <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
                    <Field label="Link na inzerát" full>
                      <input className="input" placeholder="https://..." required value={form.link} onChange={update('link')} />
                    </Field>
                    <Field label="Značka a model">
                      <input className="input" placeholder="napr. BMW 320d" value={form.znackaModel} onChange={update('znackaModel')} />
                    </Field>
                    <Field label="Lokalita vozidla">
                      <input className="input" placeholder="mesto / okres" value={form.lokalita} onChange={update('lokalita')} />
                    </Field>
                    <Field label="Rozpočet">
                      <input className="input" placeholder="napr. 12 000 €" value={form.rozpocet} onChange={update('rozpocet')} />
                    </Field>
                    <Field label="Kedy chcete auto preveriť">
                      <select className="input" value={form.kedy} onChange={update('kedy')}>
                        <option value="" className="bg-black">Vyberte termín</option>
                        <option className="bg-black">Čo najskôr</option>
                        <option className="bg-black">Do 3 dní</option>
                        <option className="bg-black">Do týždňa</option>
                        <option className="bg-black">Som flexibilný</option>
                      </select>
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
                        Po odoslaní vám navrhneme servis a postup kontroly.
                      </p>
                      <button type="submit" className="btn-primary">
                        Odoslať na kontrolu
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

function Feature({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-brand-red/30 bg-brand-red/10 text-brand-red">
        {icon}
      </div>
      <div className="mt-4 font-display text-base font-semibold">{title}</div>
      <p className="mt-1 text-sm text-white/55 leading-relaxed">{desc}</p>
    </div>
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
