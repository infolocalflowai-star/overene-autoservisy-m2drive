import { Star, BadgeCheck, ImageIcon, MessagesSquare, FileText, Phone, Sparkles } from 'lucide-react'

const items = [
  { icon: <Star className="h-4 w-4" />, title: 'Reálne Google recenzie', desc: 'Sledujeme reálne hodnotenia, nie marketingové.' },
  { icon: <BadgeCheck className="h-4 w-4" />, title: 'Špecializácia na značky', desc: 'Servis musí mať jasné zameranie a skúsenosti.' },
  { icon: <ImageIcon className="h-4 w-4" />, title: 'Fotky reálnych prác', desc: 'Bez stock fotiek. Skutočná dielňa, skutočné autá.' },
  { icon: <MessagesSquare className="h-4 w-4" />, title: 'Transparentná komunikácia', desc: 'Jasné odpovede, žiadne hmlisté frázy.' },
  { icon: <FileText className="h-4 w-4" />, title: 'Jasné služby a kontakty', desc: 'Viete, čo robia a koho oslovujete.' },
  { icon: <Phone className="h-4 w-4" />, title: 'Ochota reagovať na dopyty', desc: 'Rýchla a vecná odpoveď, nie ticho.' },
  { icon: <Sparkles className="h-4 w-4" />, title: 'Dôveryhodná prezentácia', desc: 'Profesionálny web, profil, fotografie.' },
]

export default function Verification() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="eyebrow-red">M2Drive overenie</span>
            <h2 className="section-title mt-5">
              Ako overujeme{' '}
              <span className="text-gradient-red">autoservisy.</span>
            </h2>
            <p className="section-sub">
              Toto nie je oficiálna štátna certifikácia. Je to{' '}
              <span className="text-white font-medium">M2Drive výber</span> —
              kombinácia kritérií, ktoré nám pomáhajú odporučiť servisy, kde má
              zákazník reálnu šancu na dobrú skúsenosť.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-sm text-white/70">
                <span className="text-white font-semibold">Dôležité:</span>{' '}
                Žiadny zoznam nie je dokonalý. Snažíme sa však minimalizovať
                riziko, že skončíte v servise, ktorý nerozumie vášmu autu.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-3">
              {items.map((it) => (
                <div key={it.title} className="group rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.025] to-transparent p-5 transition hover:border-brand-red/30 hover:bg-brand-red/[0.04]">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-brand-red/30 bg-brand-red/10 text-brand-red shrink-0">
                      {it.icon}
                    </span>
                    <div>
                      <div className="font-medium text-white">{it.title}</div>
                      <div className="mt-1 text-sm text-white/55 leading-relaxed">{it.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
