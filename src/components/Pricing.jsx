import { Check, ArrowRight, Sparkles } from 'lucide-react'

const tiers = [
  {
    name: 'Free profil',
    price: '€0',
    suffix: '/ mesiac',
    tagline: 'Základná viditeľnosť',
    features: [
      'Základný zápis',
      'Názov servisu',
      'Lokalita',
      'Značky, ktorým sa servis venuje',
      'Kontaktné údaje',
    ],
    cta: 'Začať zdarma',
  },
  {
    name: 'Verified profil',
    price: '€29',
    suffix: '/ mesiac',
    tagline: 'Overený profil M2Drive',
    features: [
      'Overený profil',
      'Fotogaléria',
      'Detailné služby',
      'Značky vozidiel',
      'CTA tlačidlo',
      'Dopytový formulár',
      'Badge „Overené M2Drive“',
    ],
    cta: 'Vybrať Verified',
    popular: true,
  },
  {
    name: 'Pro profil',
    price: '€59',
    suffix: '/ mesiac',
    tagline: 'Vyššia viditeľnosť a dopyty',
    features: [
      'Vyššia pozícia vo výpise',
      'Detailný profil',
      'Automatická odpoveď zákazníkovi',
      'Mesačný report dopytov',
      'Google review link',
      'Prioritné zobrazenie pri relevantných dopytoch',
    ],
    cta: 'Vybrať Pro',
  },
  {
    name: 'Partner servis',
    price: 'od €99',
    suffix: '/ mesiac',
    tagline: 'Exkluzívne partnerstvo',
    features: [
      'Top pozícia v meste alebo kategórii',
      'Exkluzívne dopyty',
      'Predkúpne kontroly',
      'Automatizácia dopytov',
      'Možný mini CRM systém',
      'Individuálne nastavenie',
    ],
    cta: 'Dohodnúť hovor',
    accent: true,
  },
]

export default function Pricing() {
  return (
    <section id="cennik" className="section">
      <div className="container-tight">
        <div className="max-w-3xl">
          <span className="eyebrow">Cenník pre servisy</span>
          <h2 className="section-title mt-5">
            Jasné možnosti pre kvalitné autoservisy.
          </h2>
          <p className="section-sub">
            Začnite zdarma alebo posuňte svoj servis vyššie s overeným
            profilom, väčšou viditeľnosťou a exkluzívnymi dopytmi.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-7 backdrop-blur-xl shadow-soft-lift transition ${
                t.popular
                  ? 'border-brand-red/50 bg-gradient-to-b from-brand-red/[0.10] to-transparent shadow-red-glow'
                  : t.accent
                  ? 'border-white/15 bg-gradient-to-b from-white/[0.06] to-transparent'
                  : 'border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent'
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-brand-red px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-red-glow">
                  <Sparkles className="h-3 w-3" /> Najpopulárnejšie
                </span>
              )}

              <div className="text-xs uppercase tracking-[0.18em] text-white/45">
                {t.tagline}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold">{t.name}</h3>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-bold text-white">{t.price}</span>
                <span className="text-sm text-white/45">{t.suffix}</span>
              </div>
              <div className="hairline my-6" />
              <ul className="space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-white/75">
                    <Check className="mt-0.5 h-4 w-4 text-brand-red shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={`mt-7 ${t.popular ? 'btn-primary' : 'btn-secondary'} justify-center`}
              >
                {t.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-white/40 max-w-3xl">
          Ceny sú orientačné, bez DPH. Konkrétne podmienky pre Partner servis
          riešime individuálne. M2Drive si vyhradzuje právo prijímať len
          servisy, ktoré spĺňajú naše kritériá výberu.
        </p>
      </div>
    </section>
  )
}
