# Farmington Dental NY — Path A pitch (dglxss)

Independent design study / pitch rebuild of https://www.farmingtondentalny.com/

Craft winner: Motionsites `equilibrium` (liquid-glass nav, Geist, full-bleed hero, gradient glass border) plus Axiom twists: nested liquid-glass service accordion and a soft sticky section rail. Locks: EN | PT and dark | light.

Attribution: built by dglxss.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

```bash
npm run build
npm start
npm run lint
```

## Notes

- Marketing English is sourced verbatim from `docs/copy.json`.
- Portuguese is a faithful twin of those strings plus localized chrome.
- Theme and locale persist in `localStorage` (`fd-theme`, `fd-locale`).
- `/privacy` redirects to the live HIPAA notice form.
- `vercel.json` is exactly `{ "cleanUrls": true, "trailingSlash": false }`.
