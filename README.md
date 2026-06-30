# IPOOLGO Motion Landing

Premium Drop Stitch pool landing for Moldova & Romania (RO + RU).

## Stack
- Next.js 16 App Router
- next-intl (ro default, ru)
- Framer Motion + GSAP + Lenis
- React Three Fiber (hero)
- Web Audio API (ambient + SFX)

## Quick start
```bash
cd apps/web
npm install
npm run dev
```
Open http://localhost:3000/ro

## Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (from root) |
| `npm run build` | Production build |
| `npm run scrape` | Cache ipoolgoo.ru content |

## Contacts (site)
- Phone: +373 79 689 028
- Telegram: @saletoe
- Viber / WhatsApp: same number

## Deploy (Vercel)
```bash
cd apps/web
npx vercel --yes
```
Set `NEXT_PUBLIC_SITE_URL` to your preview/production URL.

## Structure
```
ipoolgo-landing/
├── apps/web/          Next.js app
├── content/cache/     Scraped WP content
├── scripts/           scrape-content.mjs
├── docs/squad/        Design tokens
└── .asset-manifest.json
```

## Isolation
Separate repo — not mixed with `.cursor` hub.
