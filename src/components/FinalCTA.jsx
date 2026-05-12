import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-3xl border border-brand-red/25 bg-gradient-to-br from-brand-red/[0.10] via-black to-black p-10 sm:p-16 text-center">
          <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-[0.14] mask-fade-b" />
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[700px] -translate-x-1/2 rounded-full bg-brand-red/15 blur-3xl" />

          <div className="relative">
            <span className="eyebrow">M2Drive</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-5 leading-[1.05]">
              Vaše auto si zaslúži{' '}
              <span className="text-gradient-red">servis, ktorý mu rozumie.</span>
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-white/65">
              Pošlite dopyt alebo si vyžiadajte predkúpnu kontrolu. Pomôžeme
              vám nájsť servis so správnou špecializáciou a transparentnou
              komunikáciou.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a href="#najst-autoservis" className="btn-primary">
                Nájsť vhodný servis
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#predkupna-kontrola" className="btn-secondary">
                <ShieldCheck className="h-4 w-4 text-brand-red" />
                Preveriť jazdené auto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
