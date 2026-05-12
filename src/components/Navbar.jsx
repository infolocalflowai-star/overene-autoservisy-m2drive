import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { href: '#domov', label: 'Domov' },
  { href: '#najst-autoservis', label: 'Nájsť servis' },
  { href: '/autoservisy', label: 'Autoservisy', route: true },
  { href: '#predkupna-kontrola', label: 'Predkúpna kontrola' },
  { href: '/pre-autoservisy', label: 'Pre autoservisy', route: true },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const anchor = (hash) => (onHome ? hash : `/${hash}`)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-black/65 border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-tight flex h-16 items-center justify-between sm:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/10 group-hover:ring-brand-red/40 transition">
            <img
              src="/images/m2drive-logo.png"
              alt="M2Drive"
              className="h-full w-full object-cover"
            />
          </span>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold tracking-wide">
              M2<span className="text-brand-red">DRIVE</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">
              Overené Autoservisy
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) =>
            l.route ? (
              <Link
                key={l.href}
                to={l.href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/[0.04] hover:text-white"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={anchor(l.href)}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/[0.04] hover:text-white"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={anchor('#najst-autoservis')} className="btn-primary">
            Nájsť vhodný servis
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/[0.06] bg-black/90 backdrop-blur-xl">
          <div className="container-tight py-4 flex flex-col gap-1">
            {links.map((l) =>
              l.route ? (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/[0.04]"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={anchor(l.href)}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/[0.04]"
                >
                  {l.label}
                </a>
              ),
            )}
            <a
              href={anchor('#najst-autoservis')}
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              Nájsť vhodný servis <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
