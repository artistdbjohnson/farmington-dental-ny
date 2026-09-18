# Farmington Dental NY — design meeting (chassis freeze)
Date: 2026-09-17  
Studio lead freeze (Doug standing order: autocomplete, no mid-gate waits)
Path A pitch · source https://www.farmingtondentalny.com/

## Domain line
```
Domain: UI/UX — factory transplant (pitch).
Craft shelf: Motionsites seed: equilibrium (+ Axiom twist: nested liquid-glass service accordion + soft section rail).
Locks: EN|PT + dark|light.
Stack: React + Tailwind + Next.js + GitHub + Vercel.
Imagery: source team/logo plates + elevated CSS/gradient plates (Firefly medium when available); no invented clinical claims.
Skills: website-factory → website-rebuild / ui-ux-gauntlet + hallmark + team-git-rules.
```

## Craft shelf VOTE — LOCKED
**Winner: Motionsites `equilibrium`**
- Steal: liquid-glass nav pill, Geist calm, full-bleed soft motion hero, gradient glass border pseudo, bottom-left hero stack
- Remap: wellness app → family dental practice (Farmington, NY)
- Reject: pure `liquid-glass-agency` as sole chassis (too agency/editorial for local clinic trust)
- Rejected alternate: `bloom-ai-hero` (SaaS calm, less medical)

## Brand lock (from live)
- Blues: `#0C3C60`, `#1D67CD`, `#689ADE`, `#DAEDFF`, `#39729B`
- Teal accent: `#86A69E`
- Neutrals: `#2F2E2E`, `#E2E2E2`, white
- Keep logos: Farmington Dental mark + wordmark from Wix assets
- Keep Dr. Alicia Sturn photo + hygienist/admin headshots

## Axiom twists — LOCKED (Reed soft-taste on tip)
1. **PRIMARY** — Nested liquid-glass service accordion (Preventative / Cosmetic / Restorative / Emergency / Pediatric / Endodontic) with butter open/close; one expanded default
2. Soft sticky section rail (About · Services · Team · Reviews · Patient Info · Contact) with glass underline; collapse logo on scroll
3. Theme/locale as designed chrome: EN default + PT twin + dark|light as one tonal craft cluster in sticky chrome (US practice → EN default)

## IA / pages (single-page anchors + real external forms)
- Hero / About / Why Choose / Services / Team / Happy Patients / Patient Info / Contact
- Live outbound (exact):
  - Make a payment → https://payportal.patientviewer.com?cid=eDrAlcJE
  - New Patient Forms → patientviewer WebForms (DOID=35361… WSDID=177047…)
  - Existing Patient Update → patientviewer WSDID=174269
  - Notice of Privacy (HIPAA) → patientviewer WSDID=179180
  - tel:+15853982100 · mailto:Office@FarmingtonDentalNY.com
- Map embed for 1637 State Route 332, Farmington, NY 14425

## Copy rule
Exact public marketing words from source. Zero invented clinical outcomes. Keep Invisalign®, Dr. Sturn, hygienist names (Corrie, Jennifer K, Melanie, Kristen, Kaylin, Tina, Jennifer M), Abby.

## Locks (factory hard)
- EN default + PT twin · dark | light
- After ship → dglxss.com portfolio EN+PT
- Attribution: built by dglxss
- vercel.json exactly `{ "cleanUrls": true, "trailingSlash": false }` — no public key
- Git author: Douglxss Johnson <artistdbjohnson@gmail.com> via env only
- Repo: **farmington-dental-ny**
- Studio lead sole main push

Chassis UNBLOCKED — build proceeds.

## Opening VOTE — LOCKED (2026-09-18)
Quality floor remains https://txdiepflap.vercel.app/ (BRA craft, not a clone).  
Question: ceremonial entry for a single-location dental Path A.

| Option | Vote | Why |
| --- | --- | --- |
| BRA-style splash video | Reject | BRA already owns the full-bleed intro MP4. Cloning it on Farmington reads as portfolio copy, stacks a trailer on top of the equilibrium Ken Burns hero, and over-weights a relaxed family practice. Video is not mandatory and does not clearly win. |
| Simple quiet open | Reject | Lands on the hero with no entry beat. Undershoots the BRA quality floor. |
| Still poster fade | **WIN** | Same overlay craft as BRA (fixed z-100, poster still, Enter Site, 3.5s cubic fade, `sessionStorage` once, skip hash / reduced-motion) without the video signature. Grok Imagine operatory-dawn still. Calm, premium, Path A. |
| Scroll hero only | Runner-up | Immediate CTAs, max variety. Loses the ceremonial floor the lock asked to match. |
| Micro-loader | Reject | App chrome. Wrong register for a local clinic. |

**Locked open:** still-poster splash → soft multi-second fade into the existing equilibrium hero.  
Nav gutters, measured hash scroll, and ad-grade section/service plates stay in scope.  
Grok Imagine stills produced for the vote; the assembled MP4 is retired so Farmington does not ship a BRA-shaped video entry.
