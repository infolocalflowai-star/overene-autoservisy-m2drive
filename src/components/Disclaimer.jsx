import { Info } from 'lucide-react'

export default function Disclaimer() {
  return (
    <section id="disclaimer" aria-label="Disclaimer" className="py-10 sm:py-14">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] text-white/70">
              <Info className="h-4 w-4" />
            </span>
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                Disclaimer
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                <span className="text-white font-medium">M2Drive nie je autoservis</span>{' '}
                a <span className="text-white font-medium">neudeľuje úradnú ani štátnu certifikáciu</span>.
                Pomáhame vodičom nájsť vhodný autoservis na základe{' '}
                <span className="text-white">špecializácie na konkrétnu značku</span>,{' '}
                <span className="text-white">verejne dostupných recenzií</span>,{' '}
                <span className="text-white">kvality komunikácie</span> a{' '}
                <span className="text-white">dostupných informácií</span> o servise.
                Konečné rozhodnutie, ako aj zmluvný vzťah pri oprave alebo
                predkúpnej kontrole, je vždy medzi vodičom a servisom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
