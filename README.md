# Overené Autoservisy by M2Drive

Premium landing page pre platformu **Overené Autoservisy by M2Drive** —
pomáha vodičom na Slovensku nájsť overený autoservis so špecializáciou
na ich značku auta (BMW, Audi, Mercedes-Benz, Volkswagen, Škoda,
Seat / Cupra, Porsche) a sprostredkovať predkúpne kontroly jazdených áut.

Stack: **Vite + React + Tailwind CSS + lucide-react**.
Dizajn: čierno-bielo-červený, prémiový automotive feel.

---

## Lokálny vývoj

```bash
npm install
npm run dev
```

Aplikácia beží na `http://localhost:5173`.

## Produkčný build

```bash
npm run build
npm run preview
```

Výstup sa generuje do priečinka `dist/`.

---

## Štruktúra projektu

```
overene-autoservisy-m2drive/
├── public/
│   └── images/
│       └── m2drive-logo.png      # M2Drive logo
├── src/
│   ├── components/               # Sekcie a UI komponenty
│   ├── App.jsx                   # Skladá celú stránku
│   ├── main.jsx
│   └── index.css                 # Tailwind + globálne štýly
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── netlify.toml                  # Netlify deploy konfigurácia
└── package.json
```

---

## Nasadenie na GitHub

```bash
cd overene-autoservisy-m2drive
git init
git add .
git commit -m "Initial commit: Overené Autoservisy by M2Drive"
git branch -M main
git remote add origin https://github.com/<vas-username>/overene-autoservisy-m2drive.git
git push -u origin main
```

## Nasadenie na Netlify

Možnosť A — cez Netlify UI (odporúčané):

1. Prihláste sa na [app.netlify.com](https://app.netlify.com).
2. **Add new site → Import an existing project → GitHub**.
3. Vyberte repozitár `overene-autoservisy-m2drive`.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy.

Konfigurácia `netlify.toml` je už v projekte — Netlify všetko nastaví automaticky vrátane SPA redirectu.

Možnosť B — cez Netlify CLI:

```bash
npm i -g netlify-cli
netlify login
netlify init
netlify deploy --build --prod
```

---

## Sekcie stránky

- Hero
- Brand trust strip
- Nájsť autoservis (formulár)
- Špecializácia na značky (BMW, Audi, Mercedes, VW, Škoda, Seat/Cupra, Porsche)
- Predkúpna kontrola (formulár)
- Ako to funguje
- Ako overujeme servisy
- Prečo nestačí Google Maps
- Ukážka servisov (M2Drive výber)
- Pre autoservisy
- Cenník (Free / Verified / Pro / Partner)
- Final CTA
- Kontakt
- Footer

## Pripravené pre rozšírenie na samostatné stránky

Pre budúce SEO stránky majú sekcie ID, ktoré korešpondujú s plánovanými cestami:

- `/bmw-servis` → `#bmw-servis`
- `/audi-servis` → `#audi-servis`
- `/mercedes-servis` → `#mercedes-servis`
- `/volkswagen-servis` → `#volkswagen-servis`
- `/skoda-servis` → `#skoda-servis`
- `/porsche-servis` → `#porsche-servis`
- `/predkupna-kontrola-auta` → `#predkupna-kontrola`
- `/pre-autoservisy` → `#pre-autoservisy`

Neskôr je možné prejsť na React Router alebo Next.js bez väčších zmien v komponentoch.

---

## Brand

- Hlavné farby: **čierna**, **červená (#E10600)**, **biela**.
- Typografia: Inter + Space Grotesk (cez Google Fonts).
- Logo: `/public/images/m2drive-logo.png`

---

## Formuláre

Formuláre (nájsť servis + predkúpna kontrola) sú vizuálne kompletné a
zobrazia success message po odoslaní. Backend zatiaľ nie je pripojený —
neskôr je možné napojiť na Netlify Forms, Resend, Make/n8n alebo iný
endpoint.
