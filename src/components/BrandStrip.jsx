const brands = [
  'BMW',
  'AUDI',
  'MERCEDES-BENZ',
  'VOLKSWAGEN',
  'ŠKODA',
  'SEAT / CUPRA',
  'PORSCHE',
]

export default function BrandStrip() {
  return (
    <section className="relative border-y border-white/[0.06] bg-black/40">
      <div className="container-tight py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
          <div className="text-xs uppercase tracking-[0.22em] text-white/40 shrink-0">
            Špecializácia na značky
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {brands.map((b) => (
              <span
                key={b}
                className="font-display text-sm sm:text-base font-semibold tracking-[0.16em] text-white/60 hover:text-white transition"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
