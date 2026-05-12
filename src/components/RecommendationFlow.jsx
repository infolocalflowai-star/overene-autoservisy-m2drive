import { ClipboardList, Search, Handshake, Wrench, ArrowRight } from 'lucide-react'

const steps = [
  {
    n: '01',
    icon: <ClipboardList className="h-5 w-5" />,
    title: 'Pošlete dopyt',
    desc: 'Vyplníte krátky formulár — značka, model, rok výroby, lokalita a popis problému.',
  },
  {
    n: '02',
    icon: <Search className="h-5 w-5" />,
    title: 'Vyberieme špecialistu',
    desc: 'Z M2Drive výberu nájdeme servis so zameraním na vašu značku a typ opravy.',
  },
  {
    n: '03',
    icon: <Handshake className="h-5 w-5" />,
    title: 'Spojíme vás',
    desc: 'Dostanete kontakt a predbežnú orientačnú informáciu. Komunikáciu ďalej vediete priamo so servisom.',
  },
  {
    n: '04',
    icon: <Wrench className="h-5 w-5" />,
    title: 'Servis vykoná opravu',
    desc: 'Profesionálne, transparentne a so zameraním na vašu značku. Žiadne hádanie.',
  },
]

export default function RecommendationFlow() {
  return (
    <section id="ako-funguje" className="section">
      <div className="container-tight">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow">Ako to funguje</span>
          <h2 className="section-title mt-5">
            Ako funguje odporúčanie servisu.
          </h2>
          <p className="section-sub">
            Žiadne nekonečné hľadanie cez mapy. Štyri kroky — od dopytu po
            opravu — a za každým kontaktom konkrétny servis so špecializáciou.
          </p>
        </div>

        <div className="relative">
          {/* connecting hairline on desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-[34px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="relative inline-flex h-[68px] w-[68px] items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-white/10" />
                  <span className={`absolute inset-0 rounded-full ${i === 0 ? 'border border-brand-red/50' : ''}`} />
                  <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.04] text-white">
                    {s.icon}
                  </span>
                </div>
                <div className="mt-5 font-display text-xs font-semibold tracking-[0.22em] text-brand-red/80">
                  KROK {s.n}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a href="#najst-autoservis" className="btn-primary">
            Nájsť vhodný servis
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#predkupna-kontrola" className="btn-secondary">
            Preveriť jazdené auto
          </a>
        </div>
      </div>
    </section>
  )
}
