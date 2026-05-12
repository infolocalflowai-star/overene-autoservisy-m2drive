export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-black">
      <div className="container-tight py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src="/images/m2drive-logo.png"
                alt="M2Drive"
                className="h-10 w-10 rounded-full ring-1 ring-white/10"
              />
              <div>
                <div className="font-display font-bold tracking-wide">
                  M2<span className="text-brand-red">DRIVE</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                  Overené Autoservisy
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm text-white/55 leading-relaxed">
              Pomáhame vodičom nájsť servis, ktorému môžu veriť. Starostlivo
              vybrané servisy so zameraním na konkrétne značky áut.
            </p>
          </div>

          <FooterCol
            title="Platforma"
            links={[
              ['Nájsť autoservis', '#najst-autoservis'],
              ['Predkúpna kontrola', '#predkupna-kontrola'],
              ['Značky', '#znacky'],
            ]}
          />
          <FooterCol
            title="Pre servisy"
            links={[
              ['Pre autoservisy', '#pre-autoservisy'],
              ['Cenník', '#cennik'],
              ['Kontakt', '#kontakt'],
            ]}
          />
          <FooterCol
            title="Značky"
            links={[
              ['BMW servis', '#bmw-servis'],
              ['Audi servis', '#audi-servis'],
              ['Mercedes servis', '#mercedes-servis'],
              ['VW / Škoda', '#volkswagen-servis'],
              ['Porsche servis', '#porsche-servis'],
            ]}
          />
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} M2Drive · Overené Autoservisy. Všetky práva vyhradené.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white/70 transition">Ochrana súkromia</a>
            <a href="#" className="hover:text-white/70 transition">Podmienky</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div className="md:col-span-2">
      <div className="text-xs uppercase tracking-[0.18em] text-white/45">{title}</div>
      <ul className="mt-5 space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-sm text-white/75 hover:text-brand-red transition">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
