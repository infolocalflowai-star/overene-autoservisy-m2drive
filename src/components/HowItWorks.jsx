import { Search, ClipboardList, Handshake, Wrench } from 'lucide-react'

const steps = [
  {
    n: '01',
    icon: <ClipboardList className="h-5 w-5" />,
    title: 'Pošlete dopyt',
    desc: 'Vyplníte krátky formulár s informáciami o aute a probléme.',
  },
  {
    n: '02',
    icon: <Search className="h-5 w-5" />,
    title: 'Nájdeme špecialistu',
    desc: 'Vyberieme servis, ktorý sa zameriava na vašu značku a typ opravy.',
  },
  {
    n: '03',
    icon: <Handshake className="h-5 w-5" />,
    title: 'Spojíme vás',
    desc: 'Dostanete kontakt a predbežnú ponuku. Komunikáciu vediete priamo.',
  },
  {
    n: '04',
    icon: <Wrench className="h-5 w-5" />,
    title: 'Servis vykoná opravu',
    desc: 'Transparentne. Bez prekvapení. So zameraním na vašu značku.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="max-w-3xl">
          <span className="eyebrow-red">Ako to funguje</span>
          <h2 className="section-title mt-5">
            4 kroky k servisu, <span className="text-gradient-red">ktorému môžete veriť.</span>
          </h2>
          <p className="section-sub">
            Žiadne nekonečné hľadanie cez Google Maps. Žiadne náhodné garáže.
            Žiadne nepríjemné prekvapenia po oprave.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.n} className="relative card card-hover">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red">
                  {s.icon}
                </span>
                <span className="font-display text-3xl font-bold text-white/[0.08]">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 h-px w-6 bg-gradient-to-r from-brand-red/40 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
