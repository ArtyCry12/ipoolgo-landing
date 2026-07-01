# Design Tokens — IPOOLGO (Stitch v3 Production)

Stitch HTML reference ported to Next.js/Tailwind v4. WebGL shader replaces R3F hero.

## Typography

| Role | Font | CSS var |
|------|------|---------|
| Display / headlines | Space Grotesk | `--font-display` |
| Body | DM Sans | `--font-body` |
| Icons | Material Symbols Outlined | Google Fonts CDN |

Both fonts load latin + cyrillic for `/ro` and `/ru`.

## Stitch → CSS mapping

| Stitch token | Hex / value | CSS var | Tailwind |
|--------------|-------------|---------|----------|
| brand-deep | #03045E | --brand-deep | bg-brand-deep |
| surface | #000046 | --brand-surface | bg-brand-surface |
| tertiary / lime | #B8FF3C | --accent-lime | text-accent-lime |
| text-primary | white | — | text-white |
| text-muted | white/70 | — | text-white/70 |
| glass panel | white/10 + blur | — | `.glass-panel` |
| card studio | #FAFBFC | — | product card inner |
| radius-xl | 1.5rem | — | rounded-3xl |
| radius-pill | 9999px | — | rounded-full |

Legacy `--ocean-*` tokens remain for backward compatibility.

## Components

| Component | Purpose |
|-----------|---------|
| `StitchShader` | WebGL ocean-flow fragment shader (hero + benefits) |
| `GlassPanel` | Glassmorphism wrapper |
| `SectionHeading` | Space Grotesk headline + lime accent |
| `ProductCard` | Lime bar + studio white + dark footer strip |
| `Button` | Lime primary / glass secondary |

## Screen coverage

1. **Hero** — StitchShader variant hero + lime orbs + pulse intro loader
2. **Benefits** — StitchShader variant benefits + glass benefit cards
3. **Products** — Horizontal carousel, ProductCard
4. **Catalog** — Glass grid + category cards
5. **Product detail** — Split layout, studio card + specs
6. **Gallery** — Masonry columns
7. **Contact** — Glass form + contact info panel
8. **Secondary** — about, reviews, faq, legal use same tokens

## Motion

- `float`, `pulse-ring`, `scroll-dot` keyframes in globals.css
- `prefers-reduced-motion`: shader → static gradient fallback
- Framer Motion for section fade-ins (unchanged)

## Product card anatomy

```
┌─ lime gradient bar ────────┐
│  white studio bg (#FAFBFC) │
│      [pool PNG centered]   │
│  ────────────────────────  │
│  dark footer (brand-surface)│
│  IPOOLGO 6,7 × 1,1 m       │
│  specs chips               │
└────────────────────────────┘
```
