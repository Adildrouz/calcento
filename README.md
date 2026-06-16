# Calcento

Free, instant calculators for pay, raises, overtime, and the everyday math of work.
Built for SEO + AdSense: every calculator is its own fast, static page with a tool,
structured content, FAQ schema, and ad slots.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · deploys on Vercel.

---

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

> Note: `npm run build` fetches the web fonts (Space Grotesk, Inter, Space Mono)
> from Google at build time. You need a normal internet connection — this works
> on Vercel and any standard machine.

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Your domain, e.g. `https://calcento.com`. Used for canonical URLs, sitemap, and JSON-LD. |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | Your AdSense publisher ID, e.g. `ca-pub-XXXXXXXXXXXXXXXX`. **Leave empty until approved** — ad slots then show a quiet placeholder instead. |

---

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import it in Vercel → it auto-detects Next.js.
3. Add the two env vars above in Vercel project settings.
4. Add your domain `calcento.com` in Vercel → Domains.

---

## AdSense

- Ad placements live in `components/AdSlot.tsx`.
- Before approval (no `NEXT_PUBLIC_ADSENSE_CLIENT`), slots render a labeled
  placeholder so the layout looks right.
- After approval: set `NEXT_PUBLIC_ADSENSE_CLIENT`, then pass real `adSlotId`
  values (from your AdSense dashboard) into each page's `<CalculatorPage adSlotId="..." />`.
- The AdSense script auto-loads from the root layout only when the client ID is set.

---

## Adding a new calculator (≈ copy + modify)

The architecture is built so page two onward is fast. To add, say, the overtime calculator:

1. **Register it** in `lib/calculators.ts` — flip its `status` to `"live"` (the
   overtime, turnover, and PTO entries are already stubbed in).
2. **Build the tool** as a client component in `components/`, modeled on
   `PayRaiseCalculator.tsx`.
3. **Write the content** in `content/` (prose + FAQ array), modeled on
   `content/payRaise.tsx`.
4. **Create the route** `app/<slug>/page.tsx`, modeled on
   `app/pay-raise-calculator/page.tsx` — it wires your tool + content into the
   shared `CalculatorPage` template, which handles layout, ad slot, FAQ accordion,
   JSON-LD (WebApplication + FAQPage + Breadcrumb), and related-tool links.

The homepage hub and footer update themselves from the registry.

---

## Project map

```
app/
  layout.tsx                 root layout: fonts, metadata, AdSense loader
  page.tsx                   homepage hub (reads the registry)
  pay-raise-calculator/      first live calculator
  sitemap.ts / robots.ts     SEO plumbing
components/
  CalculatorPage.tsx         reusable page template (the spine)
  PayRaiseCalculator.tsx     the interactive tool
  AdSlot.tsx, Faq.tsx, SiteHeader.tsx, SiteFooter.tsx
content/
  payRaise.tsx               page copy + FAQ data
lib/
  calculators.ts             registry of all calculators
  jsonld.ts                  structured-data helpers
```

---

Calcento is for general guidance only and is not financial advice. All figures are pre-tax.
