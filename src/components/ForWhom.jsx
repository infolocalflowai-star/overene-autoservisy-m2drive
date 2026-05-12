import { Check, X } from 'lucide-react'

const forWhom = [
  'Vodičom BMW, Audi, Mercedes-Benz, VW Group, Škody, Seatu/Cupry a Porsche.',
  'Tým, ktorí hľadajú servis so skutočnou špecializáciou na svoju značku.',
  'Záujemcom o kúpu jazdeného auta, ktorí ho chcú nezávisle preveriť.',
  'Ľuďom, ktorí nechcú vyberať servis náhodne podľa najbližšieho bodu na mape.',
  'Zákazníkom, ktorí oceňujú transparentnú komunikáciu a férové ceny.',
]

const notForWhom = [
  'Nehľadáme len „najlacnejší servis za každú cenu". Cena nie je jediné kritérium.',
  'Neposkytujeme priame opravy — M2Drive nie je autoservis, ale prostredník.',
  'Nesprostredkúvame havarijné odťahy ani 24/7 cestnú asistenciu.',
  'Negarantujeme dostupnosť termínu — servisy si plánujú kapacitu samé.',
  'Neudeľujeme úradnú certifikáciu — pomáhame s výberom, nie s licenciou.',
]

export default function ForWhom() {
  return (
    <section id="pre-koho" className="section">
      <div className="container-tight">
        <div className="max-w-3xl mb-12">
          <span className="eyebrow">Transparentne</span>
          <h2 className="section-title mt-5">
            Pre koho je táto služba — a pre koho nie.
          </h2>
          <p className="section-sub">
            Aby ste vedeli, čo od M2Drive očakávať. Veríme, že čestnosť je
            základ dôvery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-7 sm:p-8 overflow-hidden">
            <div className="pointer-events-none absolute -top-20 -right-10 h-48 w-48 rounded-full bg-brand-red/[0.10] blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-brand-red/40 bg-brand-red/10 text-brand-red">
                  <Check className="h-4 w-4" />
                </span>
                <h3 className="font-display text-lg font-semibold">
                  Pre koho je M2Drive
                </h3>
              </div>
              <ul className="mt-6 space-y-4">
                {forWhom.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-white/80">
                    <Check className="mt-1 h-4 w-4 text-brand-red shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.025] to-transparent p-7 sm:p-8 overflow-hidden">
            <div className="relative">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] text-white/60">
                  <X className="h-4 w-4" />
                </span>
                <h3 className="font-display text-lg font-semibold">
                  Pre koho nie je
                </h3>
              </div>
              <ul className="mt-6 space-y-4">
                {notForWhom.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-white/65">
                    <X className="mt-1 h-4 w-4 text-white/45 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
