# ConsultingGrowth360 (Next.js)

Next.js App Router conversion of the ConsultingGrowth360 marketing site. Original Bootstrap/HTML source lives in `../consultinggrowth360-v2`.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm start` — serve the production build

## Structure

- `app/` — routes for home, about, services, approach, industries, contact, and service detail pages
- `components/` — shared nav, footer, contact form, GSAP effects, back-to-top
- `public/assets/` — images from the HTML site
- `app/site.css` — original site styles (fonts via `next/font`)
