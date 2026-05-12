import { ArrowRight, ShieldCheck, Wrench, Sparkles, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="domov" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[700px] bg-radial-red" />
        <div className="absolute inset-0 bg-grid-faint [background-size:64px_64px] opacity-[0.18] mask-fade-b" />
        <div className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-red/[0.08] blur-3xl" />
      </div>

      <div className="container-tight relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center pb-20 lg:pb-28">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-7">
              <span className="eyebrow-red">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
                M2Drive · Slovensko
              </span>
              <span className="hidden sm:inline eyebrow">
                <ShieldCheck className="h-3.5 w-3.5" />
                Starostlivo vybrané servisy
              </span>
            </div>

            <h1 className="font-display text-[40px] sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
              Overené autoservisy{' '}
              <span className="block text-gradient-red">
                pre BMW, Audi, Mercedes a VW Group.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg text-white/65 leading-relaxed">
              Nájdite servis, ktorý rozumie vašej značke auta. Pomôžeme vám
              vybrať overený autoservis podľa lokality, typu opravy, recenzií
              a špecializácie — bez zbytočného riskovania.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#najst-autoservis" className="btn-primary">
                Nájsť autoservis
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#predkupna-kontrola" className="btn-secondary">
                <ShieldCheck className="h-4 w-4 text-brand-red" />
                Chcem predkúpnu kontrolu
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 max-w-xl gap-6">
              <Stat value="7+" label="Značiek áut" />
              <Stat value="100%" label="Manuálne vybrané" />
              <Stat value="24h" label="Odpoveď na dopyt" />
            </div>
          </div>

          {/* Visual panel */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-brand-red/30 via-brand-red/0 to-transparent blur-2xl opacity-60" />
              <div className="relative rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 shadow-soft-lift backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <span className="badge">
                    <Sparkles className="h-3 w-3" /> M2Drive výber
                  </span>
                  <div className="flex items-center gap-1 text-white/70 text-xs">
                    <Star className="h-3.5 w-3.5 fill-brand-red text-brand-red" />
                    <span className="font-semibold text-white">4.9</span>
                    <span className="text-white/40">/ 47 hodnotení</span>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-white/40">
                    Špecialista
                  </div>
                  <div className="mt-1.5 font-display text-2xl font-semibold">
                    BMW Specialist · Bratislava
                  </div>
                  <div className="mt-1 text-sm text-white/60">
                    Diagnostika · Rozvody · Motor · Elektronika
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {['BMW', 'M-Performance', 'Diag'].map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-black/30 px-2 py-2 text-center text-[11px] text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="hairline my-6" />
                <ul className="space-y-3 text-sm">
                  <Row icon={<ShieldCheck className="h-4 w-4 text-brand-red" />} text="Overený profil M2Drive" />
                  <Row icon={<Wrench className="h-4 w-4 text-brand-red" />} text="Špecializácia BMW (E/F/G séria)" />
                  <Row icon={<Star className="h-4 w-4 text-brand-red" />} text="Reálne Google recenzie" />
                </ul>
                <a
                  href="#najst-autoservis"
                  className="btn-primary mt-7 w-full justify-center"
                >
                  Požiadať o ponuku
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-display text-3xl sm:text-4xl font-bold text-white">
        {value}
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.14em] text-white/40">
        {label}
      </div>
    </div>
  )
}

function Row({ icon, text }) {
  return (
    <li className="flex items-center gap-3 text-white/80">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-brand-red/30 bg-brand-red/10">
        {icon}
      </span>
      {text}
    </li>
  )
}
