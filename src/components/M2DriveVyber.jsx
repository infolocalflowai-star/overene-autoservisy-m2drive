import { ShieldCheck, Filter, MessagesSquare } from 'lucide-react'

const principles = [
  {
    n: '01',
    icon: <Filter className="h-5 w-5" />,
    title: 'Špecializácia, nie univerzálnosť',
    desc: 'Vyhľadávame servisy s reálnym zameraním na konkrétne značky — BMW, Audi, Mercedes-Benz, VW Group alebo Porsche. Nie dielne, ktoré „opravia všetko".',
  },
  {
    n: '02',
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Recenzie a reputácia',
    desc: 'Sledujeme verejne dostupné recenzie, hodnotenia a reálne fotky prác. Nezakladáme výber na jednej hviezdičke, ale na obraze celku.',
  },
  {
    n: '03',
    icon: <MessagesSquare className="h-5 w-5" />,
    title: 'Komunikácia a profesionalita',
    desc: 'Kvalitný servis vie odpovedať vecne, transparentne a v primeranom čase. Ak komunikácia kríva, prejde to do hodnotenia.',
  },
]

export default function M2DriveVyber() {
  return (
    <section id="m2drive-vyber" className="section">
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="eyebrow">M2Drive výber</span>
            <h2 className="section-title mt-5">
              Čo znamená{' '}
              <span className="text-gradient-red">„M2Drive výber".</span>
            </h2>
            <p className="section-sub">
              M2Drive výber je náš spôsob, ako pomôcť vodičom rýchlejšie nájsť
              servis, ktorému môžu veriť. Nie je to štátna certifikácia — je
              to kombinácia kritérií, ktoré v praxi rozhodujú o tom, či
              skončíte spokojní alebo sklamaní.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-2">
                Dôležité
              </div>
              <p className="text-sm text-white/75 leading-relaxed">
                M2Drive <span className="text-white font-medium">nie je autoservis</span>{' '}
                a <span className="text-white font-medium">neudeľuje žiadnu úradnú certifikáciu</span>.
                Pomáhame vám vybrať vhodný servis na základe špecializácie,
                recenzií, komunikácie a dostupných informácií.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative space-y-0 border-l border-white/[0.07]">
              {principles.map((p, i) => (
                <li key={p.n} className="relative pl-8 pb-10 last:pb-0">
                  <span className="absolute -left-[9px] top-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-brand-red/40 bg-black">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                  </span>
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-xs font-semibold tracking-[0.2em] text-white/40">
                      {p.n}
                    </span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/80">
                      {p.icon}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/65 max-w-xl">
                    {p.desc}
                  </p>
                  {i < principles.length - 1 && (
                    <div className="mt-8 h-px w-16 bg-gradient-to-r from-brand-red/40 to-transparent" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
