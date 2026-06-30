# IPOOLGO Motion Landing

Premium Drop Stitch pool landing for Moldova & Romania (RO + RU).

## Stack

- Next.js 16 App Router
- next-intl (ro default, ru)
- Framer Motion + GSAP + Lenis
- React Three Fiber (hero)
- Web Audio API (ambient + SFX, auto-start with mute toggle)

## Quick start

```bash
cd apps/web
npm install
cp .env.example .env.local   # fill Telegram vars locally
npm run dev
```

Open http://localhost:3000/ro

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `TELEGRAM_BOT_TOKEN` | Yes (prod) | Bot token from [@BotFather](https://t.me/BotFather) — **never commit** |
| `TELEGRAM_CHAT_ID` | Yes (prod) | Chat ID to receive leads (e.g. `8873079079`) |
| `TELEGRAM_BOT_USERNAME` | Optional | Display only (`PoolsMd_bot`) |
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical URL for SEO / Telegram footer |
| `GEMINI_API_KEY` | Optional | Studio product card generation (`scripts/generate-product-cards.mjs`) |

### Telegram bot setup

1. Create bot via [@BotFather](https://t.me/BotFather) → get token.
2. Set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in Vercel project env.
3. **Owner must send `/start` to [@PoolsMd_bot](https://t.me/PoolsMd_bot)** from the chat ID account — otherwise `sendMessage` fails.
4. Test the contact form on `/ro/contact` or home CTA section.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (from root) |
| `npm run build` | Production build |
| `npm run scrape` | Cache ipoolgoo.ru content |
| `node scripts/copy-product-assets.mjs` | Copy 8 PNG renders → `public/products/` |
| `node scripts/generate-product-cards.mjs` | Gemini studio cards (fallback: copy PNG) |

## Contacts (site)

- Phone: +373 79 689 028
- Telegram: @saletoe
- Viber / WhatsApp: same number
- Lead form → Telegram bot (@PoolsMd_bot)

## Deploy (Vercel)

**Staging URL:** https://web-wine-nine-64.vercel.app/ro

```bash
cd apps/web
npx vercel --yes --scope monolithh
```

Add Telegram secrets in Vercel dashboard → Settings → Environment Variables.

## Structure

```
ipoolgo-landing/
├── apps/web/          Next.js app
├── content/cache/     Scraped WP content
├── scripts/           Asset + scrape scripts
├── docs/squad/        Design tokens (Stitch symbiosis)
└── .asset-manifest.json
```

## Isolation

Separate repo — not mixed with `.cursor` hub.
