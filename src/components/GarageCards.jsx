import { MapPin, Star, ArrowRight, ShieldCheck, Wrench } from 'lucide-react'

export default function GarageCards() {
  return (
    <section id="ukazka-profilu" className="section">
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="eyebrow">Prví partneri</span>
            <h2 className="section-title mt-5">
              Prví partneri M2Drive výberu sa práve vyberajú.
            </h2>
            <p className="section-sub">
              Zoznam servisov budujeme postupne — značku po značke, mesto po
              meste. Namiesto stoviek náhodných záznamov sa sústredíme na
              menej, ale lepšie overených partnerov.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-white/65">
              <li className="flex items-center gap-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-red" />
                Začíname BMW, Audi a Mercedes-Benz špecialistami.
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/30" />
                Rozširujeme cez VW Group a Porsche.
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/30" />
                Pokrytie najprv v krajských mestách.
              </li>
            </ul>

            <a href="#najst-autoservis" className="btn-secondary mt-9">
              Nájsť vhodný servis
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <article className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 sm:p-9 backdrop-blur-xl shadow-soft-lift overflow-hidden">
              <div className="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full bg-brand-red/[0.10] blur-3xl" />
              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="badge-muted">Ukážka profilu servisu</span>
                  <div className="flex items-center gap-1.5 text-xs text-white/65">
                    <Star className="h-3.5 w-3.5 fill-brand-red text-brand-red" />
                    <span className="font-semibold text-white">4.9</span>
                    <span className="text-white/40">· 132 hodnotení</span>
                  </div>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                      Špecialista
                    </div>
                    <h3 className="mt-2 font-display text-3xl sm:text-4xl font-bold leading-tight">
                      BMW Specialist Bratislava
                    </h3>
                    <div className="mt-2 inline-flex items-center gap-1.5 text-sm text-white/60">
                      <MapPin className="h-4 w-4" /> Bratislava · Slovensko
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="badge-muted">BMW</span>
                    <span className="badge-muted">M-Performance</span>
                    <span className="badge-muted">Diagnostika</span>
                  </div>
                </div>

                <div className="hairline my-8" />

                <div className="grid sm:grid-cols-3 gap-4">
                  <Stat
                    icon={<Wrench className="h-4 w-4" />}
                    label="Zameranie"
                    value="BMW E/F/G séria"
                  />
                  <Stat
                    icon={<ShieldCheck className="h-4 w-4" />}
                    label="Profil"
                    value="M2Drive výber"
                  />
                  <Stat
                    icon={<Star className="h-4 w-4" />}
                    label="Recenzie"
                    value="Google verejné"
                  />
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#najst-autoservis" className="btn-primary">
                    Nájsť vhodný servis
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#predkupna-kontrola" className="btn-secondary">
                    Preveriť jazdené auto
                  </a>
                </div>

                <p className="mt-6 text-xs text-white/40">
                  Tento profil je demonštračný príklad toho, ako bude vyzerať
                  reálny záznam partnerského servisu. Reálnych partnerov
                  pridávame postupne.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
      <div className="flex items-center gap-2 text-white/60">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
          {icon}
        </span>
        <span className="text-[11px] uppercase tracking-[0.16em]">{label}</span>
      </div>
      <div className="mt-3 font-display text-base font-semibold text-white">
        {value}
      </div>
    </div>
  )
}
