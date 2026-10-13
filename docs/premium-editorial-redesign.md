# Shawfin — Premium editorial redesign

Branch: `dev/premium-editorial-redesign`

## Direction

The visual language draws inspiration from the *principles* of LxL Creative's expressive editorial layouts: oversized headline typography, restrained chrome, cinematic image staging, confident contrast, and generous negative space. All Shawfin portfolio copy, project entries, services, skills, client/testimonial entries, and contact details are retained from the existing code. No LxL brand assets, text, or layouts are copied.

## Colour system

| Swatch | Hex | Usage |
| --- | --- | --- |
| Tropical Tan | `#CBB291` | Hero typography, accents, outlines |
| Funchal Yellow | `#B78A4E` | Primary accent, CTAs, highlights |
| Saffronaut | `#942B2B` | Editorial stage, secondary accent |
| Hull Red | `#4D1211` | Depth, contrast, image tint |
| Nero | `#262626` | Dark canvas, neutral text |

Supplementary warm off-white `#F5EBDE` ensures legible text. Light-theme surfaces use derived warm paper tones rather than an unrelated sixth brand colour.

## Implementation

- Retained all eight homepage sections in `src/app/page.tsx`.
- Refreshed hero hierarchy while retaining existing content, typing effect, and anchors.
- Restyled section typography, cards, spacing, surfaces, navbar, form fields, and project gallery.
- Theme persists via `shawfin-theme` as before, but content no longer waits hidden for hydration.
- Lenis RAF is cancelled on unmount and disabled for visitors preferring reduced motion.
- Mouse glow is confined to fine-pointer devices without reduced-motion preference.

## Known existing limitations outside this visual scope

- Contact form still uses the original local success simulation; it must be connected to a real service before publication.
- Project-detail navigation and social URLs are placeholders in the source and require real destinations.
- Project and client assets are currently representative, not verified production deliverables.

## Review checklist

1. Review at desktop, tablet, and 320–390px mobile widths in both themes.
2. Confirm all existing copy and section order are unchanged.
3. Confirm keyboard navigation, focus indicators, mobile menu, and section anchors.
4. Check media loading and portrait/logo treatments.
5. Run `npm install`, `npx tsc --noEmit`, `npx eslint .`, and `npm run build` in a networked environment.

## Availability and quote revision

- The hero availability capsule is removed; a dedicated 50/50 availability/quote band now follows the hero, stacking on narrow screens.
- Availability retains the existing 2026 message and collaboration description.
- The handwritten quote “Good design is as little design as possible.” is credited to Dieter Rams, from [Vitsœ's publication of his Ten Principles for Good Design](https://www.vitsoe.com/us/about/good-design).
- The shared `BrandLogo` accepts a `tone` prop: navbar uses Saffronaut red `#942B2B` and footer uses Nero `#262626`, both on Tropical Tan `#CBB291` for contrast.

## Gold storytelling thread

- A continuous, fine, hand-drawn gold SVG curl extends from the base of the hero to the top edge of the contact footer (`#site-footer`).
- Its height is measured using `ResizeObserver`, so it adapts to responsive layouts, content height, and font loading without assuming a fixed page length.
- Framer Motion animates progressive stroke reveal as users scroll; `scaleX` and stroke width gradually decrease to produce a subtle zoom-out effect without shortening the line vertically.
- The ornament is aria-hidden, does not intercept pointer events, and remains fully visible without animation under `prefers-reduced-motion: reduce`.
- The line follows a side-gutter track so it does not obscure calls to action or portfolio content.

## Plain wordmark refinement

- Navbar `Shawfin.design` is solid white `#FFFFFF` against the dark navigation shell.
- Footer `Shawfin.design` is solid black `#000000`, on a full-width Tropical Tan footer bar for legibility.
- Removed individual logo boxes, borders, and padding. The original Dancing Script wordmark remains unchanged.
