import { Info } from 'lucide-react'

export default function MiniDisclaimer() {
  return (
    <div className="container-tight mt-6">
      <div className="mx-auto max-w-3xl rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 flex items-start gap-3">
        <Info className="h-4 w-4 text-white/45 mt-0.5 shrink-0" />
        <p className="text-[13px] leading-relaxed text-white/55">
          M2Drive nie je autoservis a nevykonáva opravy vozidiel. Pomáhame
          vodičom nájsť vhodný servis podľa dostupných informácií,
          špecializácie, recenzií a komunikácie.
        </p>
      </div>
    </div>
  )
}
