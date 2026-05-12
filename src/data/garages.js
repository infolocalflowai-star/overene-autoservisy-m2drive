export const BRANDS = [
  'BMW',
  'Audi',
  'Mercedes-Benz',
  'Volkswagen',
  'Škoda',
  'Seat/Cupra',
  'Porsche',
]

export const CITIES = ['Bratislava', 'Košice', 'Žilina', 'Nitra', 'Trenčín']

export const SERVICES = [
  'Diagnostika',
  'Rozvody',
  'Brzdy',
  'DSG servis',
  'DPF/EGR',
  'Predkúpna kontrola',
]

export const garages = [
  {
    slug: 'demo-bmw-specialist-bratislava',
    name: 'BMW Specialist Bratislava',
    city: 'Bratislava',
    specialization: 'BMW E/F/G séria, M-Performance, diagnostika ISTA',
    brands: ['BMW'],
    services: ['Diagnostika', 'Rozvody', 'Brzdy', 'Predkúpna kontrola'],
    rating: 4.9,
    reviews: 132,
    description:
      'Špecializovaný BMW servis so zameraním na sériu E/F/G — motory N/B, rozvody, elektronika a komplexná diagnostika ISTA. Skúsenosti s M-Performance verziami.',
    badge: 'M2Drive výber',
    demo: true,
  },
  {
    slug: 'demo-audi-vag-kosice',
    name: 'VAG Servis Košice',
    city: 'Košice',
    specialization: 'Audi a VAG diagnostika, TFSI/TDI, DSG',
    brands: ['Audi', 'Volkswagen', 'Škoda', 'Seat/Cupra'],
    services: ['Diagnostika', 'DSG servis', 'DPF/EGR', 'Predkúpna kontrola'],
    rating: 4.8,
    reviews: 96,
    description:
      'Servis so zameraním na VAG platformu — Audi, Volkswagen, Škoda, Seat/Cupra. Diagnostika ODIS, programovanie riadiacich jednotiek, DSG opravy.',
    badge: 'M2Drive výber',
    demo: true,
  },
  {
    slug: 'demo-mercedes-benz-zilina',
    name: 'Mercedes-Benz Centrum Žilina',
    city: 'Žilina',
    specialization: 'Mercedes-Benz, prémiové systémy, XENTRY diagnostika',
    brands: ['Mercedes-Benz'],
    services: ['Diagnostika', 'Rozvody', 'Brzdy', 'DPF/EGR'],
    rating: 4.7,
    reviews: 78,
    description:
      'Servis špecializovaný na Mercedes-Benz vozidlá — XENTRY diagnostika, prémiové komfortné a asistenčné systémy, OE diely a skúsenosti naprieč generáciami.',
    badge: 'M2Drive výber',
    demo: true,
  },
  {
    slug: 'demo-vw-tdi-nitra',
    name: 'VW Diesel Špecialista Nitra',
    city: 'Nitra',
    specialization: 'TDI motory, DPF/EGR, DSG prevodovky',
    brands: ['Volkswagen', 'Škoda', 'Seat/Cupra', 'Audi'],
    services: ['DSG servis', 'DPF/EGR', 'Diagnostika', 'Rozvody'],
    rating: 4.6,
    reviews: 54,
    description:
      'Špecialista na dieselové motory VAG skupiny — TDI, čistenie DPF a EGR, opravy DSG prevodoviek a kompletná VAG diagnostika.',
    badge: 'M2Drive výber',
    demo: true,
  },
  {
    slug: 'demo-skoda-trencin',
    name: 'Škoda Servis Trenčín',
    city: 'Trenčín',
    specialization: 'Škoda Octavia, Superb, Kodiaq, VAG diagnostika',
    brands: ['Škoda', 'Volkswagen'],
    services: ['Diagnostika', 'Rozvody', 'Brzdy', 'Predkúpna kontrola'],
    rating: 4.7,
    reviews: 61,
    description:
      'Servis so zameraním na Škoda modely a VW platformy. Skúsenosti s motormi a prevodovkami zdieľanými naprieč VAG skupinou.',
    badge: 'M2Drive výber',
    demo: true,
  },
  {
    slug: 'demo-porsche-bratislava',
    name: 'Porsche Tech Bratislava',
    city: 'Bratislava',
    specialization: 'Porsche 911, Cayenne, Taycan, PDK prevodovky',
    brands: ['Porsche'],
    services: ['Diagnostika', 'Rozvody', 'Brzdy', 'Predkúpna kontrola'],
    rating: 4.9,
    reviews: 42,
    description:
      'Špecialista na výkonové Porsche vozidlá — od klasickej 911 cez Cayenne po elektrický Taycan. PDK servis, OE diely a presná diagnostika.',
    badge: 'M2Drive výber',
    demo: true,
  },
]

export function findGarage(slug) {
  return garages.find((g) => g.slug === slug)
}
