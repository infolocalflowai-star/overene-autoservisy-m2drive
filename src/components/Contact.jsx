import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="kontakt" className="section">
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow-red">Kontakt</span>
            <h2 className="section-title mt-5">
              Máte otázku?{' '}
              <span className="text-gradient-red">Napíšte nám.</span>
            </h2>
            <p className="section-sub">
              Ozvite sa kedykoľvek — či už ste vodič, ktorý hľadá servis,
              alebo prevádzkovateľ autoservisu, ktorý chce byť súčasťou
              M2Drive výberu.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            <ContactCard
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              value="info@m2drive.sk"
              href="mailto:info@m2drive.sk"
            />
            <ContactCard
              icon={<Phone className="h-5 w-5" />}
              label="Telefón"
              value="+421 910 924 250"
              href="tel:+421910924250"
            />
            <ContactCard
              icon={<MapPin className="h-5 w-5" />}
              label="Pôsobnosť"
              value="Celé Slovensko"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, label, value, href }) {
  const Inner = (
    <>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red">
        {icon}
      </span>
      <div className="mt-5 text-xs uppercase tracking-[0.14em] text-white/45">{label}</div>
      <div className="mt-1 font-display text-lg font-semibold text-white break-all">{value}</div>
    </>
  )
  return href ? (
    <a href={href} className="card card-hover block">{Inner}</a>
  ) : (
    <div className="card">{Inner}</div>
  )
}
