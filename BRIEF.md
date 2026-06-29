# Lovable build brief — Screenbridge homepage rebuild

**Branch:** `lovable-rebuild`. Vite + React + TypeScript + Tailwind. Assets live
in `/public` (`images/`, `videos/`, `css/`, `js/` — reference as `/images/...`).
Original Webflow export preserved on the `webflow-export` branch.

## Goal

Rebuild the Screenbridge homepage to the **quality and structure of
reach.screenbridge.tv**, using Screenbridge.tv's brand, copy, and media assets.
Premium dark CTV landing page, conversion-focused. Build with components, not one
flat file. Mobile-first, fully responsive.

## Brand tokens (already wired in `tailwind.config.js`)

- `navy` #0d0938 · `navy-2` #14103f (bg) · `indigo` #4547d3 / `indigo-bright` #5d5ffb (primary)
- `coral` #ff7f60 (accent) · `lilac` #afc0fc · `ink` #f1f2ff (text)
- Font: Poppins (headings 600–700, roman only — no italic headers)

## Pricing (source of truth — do not invent)

| Package | Price | Note |
|---|---|---|
| Standard | $5,495 | fastest way to launch UGC on CTV |
| Premium | $9,495 | most popular; advanced motion graphics |
| Signature | $14,495 | hero ad, multiple personas, narrative |

## Sections (model on reach, fill with real assets)

1. Sticky nav — `/images/ScreenbridgeLogo.svg`
2. Hero + video — `/videos/jones_road...premium...v1-720p.mp4`
3. Trust bar — Harry's, Wonderskin, Sacheu logos in `/images`
4. How it works — 3 steps (send UGC → rebuilt by Filmkraft.tv → launch in days)
5. Pricing tiers (above)
6. Work gallery — Jones Road, Dose, Sculpt Society videos in `/videos`
7. Platforms — Hulu/Roku/Peacock/Fire TV/Apple TV logos in `/images`
8. Testimonials — Cheribundi, Mixbook, Harry's (real quotes)
9. FAQ · 10. Final CTA · 11. Footer

## Rules

- Honest copy only — no fabricated metrics.
- Pull all copy/assets from the Webflow export, not from reach.
- Keep `info@screenbridge.tv` as the CTA target until a form is wired.
