# Design Tokens — IPOOLGO (Stitch Symbiosis v2)

Stitch MCP brief applied to code symbiosis with staging v1.

## Stitch → CSS mapping

| Stitch token | CSS var | Tailwind |
|--------------|---------|----------|
| bg-deep | --ocean-950 | bg-ocean-950 |
| bg-section | --ocean-800/30 | bg-ocean-800/30 |
| text-primary | --ocean-50 | text-ocean-50 |
| text-muted | --ocean-200 | text-ocean-200 |
| cta-primary | gradient ocean-500→400 | from-ocean-500 to-ocean-400 |
| accent | --accent-lime | text-accent-lime, border-accent-lime/40 |
| card-glass | glass-card | backdrop-blur + border ocean-400/20 |
| card-product | product-card | white studio inner + lime top bar |
| radius-xl | 1.5rem | rounded-3xl |
| radius-pill | 9999px | rounded-full |

## Screen symbiosis (7 screens)

1. **Hero** — Keep gradient-mesh + R3F; add lime glow orbs, larger display type, dual CTA row
2. **Benefits** — Numbered glass cards + lime left border on hover
3. **Products** — Studio white card frame, lime accent strip, dimension badge
4. **Catalog** — Same product-card component, 3-col grid
5. **Product detail** — Split: studio card left, specs + Telegram CTA right
6. **Gallery** — Masonry with rounded-2xl + hover scale
7. **Contact** — Glass form + structured Telegram notify

## Product card anatomy

```
┌─ lime 3px bar ─────────────┐
│  white studio bg (#FAFBFC) │
│      [pool PNG centered]   │
│  ────────────────────────  │
│  IPOOLGO 6,7 × 1,1 m       │
│  specs chips               │
└────────────────────────────┘
```

## Motion (unchanged + enhanced)

- Loader → hero fade
- Card hover: y-8, shadow ocean-400/20
- Marquee, stat counters, FAB bounce
