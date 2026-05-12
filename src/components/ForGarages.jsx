import { ArrowRight, Users, BadgeCheck, Inbox, BarChart3 } from 'lucide-react'

const benefits = [
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Relevantní zákazníci',
    desc: 'Dopyty od majiteľov BMW, Audi, Mercedes-Benz, VW Group a prémiových áut.',
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: 'Vyššia dôveryhodnosť',
    desc: 'Overený profil M2Drive zvyšuje pravdepodobnosť, že vás vodič osloví.',
  },
  {
    icon: <Inbox className="h-5 w-5" />,
    title: 'Štruktúrované dopyty',
    desc: 'Dostávate ucelené informácie o aute a probléme — bez dohadovania.',
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Postupná automatizácia',
    desc: 'V budúcnosti rezervácie, žiadosti o recenzie a lead management.',
  },
]

export default function ForGarages() {
  return (
    <section id="pre-autoservisy" className="section">
      <div className="container-tight">
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-12 overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:54px_54px] opacity-[0.18] mask-fade-b" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow">Pre autoservisy</span>
              <h2 className="section-title mt-5">
                Prevádzkujete kvalitný autoservis? Staňte sa M2Drive partnerom.
              </h2>
              <p className="section-sub">
                Pomáhame vodičom nájsť servis, ktorému môžu veriť. Ak ho
                prevádzkujete, radi vás zaradíme do M2Drive výberu.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#kontakt" className="btn-primary">
                  Pridať autoservis
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#cennik" className="btn-secondary">
                  Pozrieť cenník
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-2xl border border-white/[0.07] bg-black/30 p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red">
                    {b.icon}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
