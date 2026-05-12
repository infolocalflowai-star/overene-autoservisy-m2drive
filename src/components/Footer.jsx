import { Link } from 'react-router-dom'

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
            <p className="mt-4 max-w-sm text-[12px] text-white/40 leading-relaxed">
              M2Drive nie je autoservis a neudeľuje úradnú certifikáciu —
              pomáhame s výberom vhodného servisu.
            </p>
          </div>

          <FooterCol
            title="Platforma"
            links={[
              { label: 'Nájsť vhodný servis', href: '/#najst-autoservis' },
              { label: 'Zoznam autoservisov', href: '/autoservisy', route: true },
              { label: 'Preveriť jazdené auto', href: '/predkupna-kontrola-auta', route: true },
              { label: 'Ako to funguje', href: '/#ako-funguje' },
            ]}
          />
          <FooterCol
            title="Pre servisy"
            links={[
              { label: 'Pridať autoservis', href: '/pre-autoservisy', route: true },
              { label: 'Cenník', href: '/#cennik' },
              { label: 'Kontakt', href: '/#kontakt' },
            ]}
          />
          <FooterCol
            title="Značky"
            links={[
              { label: 'BMW servis', href: '/bmw-servis', route: true },
              { label: 'Audi servis', href: '/audi-servis', route: true },
              { label: 'Mercedes-Benz servis', href: '/mercedes-servis', route: true },
              { label: 'Volkswagen servis', href: '/volkswagen-servis', route: true },
              { label: 'Škoda servis', href: '/skoda-servis', route: true },
              { label: 'Porsche servis', href: '/porsche-servis', route: true },
            ]}
          />
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} M2Drive · Overené Autoservisy. Všetky práva vyhradené.</div>
          <div className="flex items-center gap-5">
            <a href="/#disclaimer" className="hover:text-white/70 transition">Disclaimer</a>
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
        {links.map((l) => (
          <li key={l.label}>
            {l.route ? (
              <Link to={l.href} className="text-sm text-white/75 hover:text-brand-red transition">
                {l.label}
              </Link>
            ) : (
              <a href={l.href} className="text-sm text-white/75 hover:text-brand-red transition">
                {l.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
