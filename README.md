# Farmington Dental NY — Path A pitch (dglxss)

Independent design study / pitch rebuild of https://www.farmingtondentalny.com/

Craft winner: Motionsites `equilibrium` layout (Geist, full-bleed hero, nested service accordion, soft sticky section rail) with matte solid chrome instead of the shared liquid-glass blur and specular ring. Locks: EN | PT and dark | light.

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
- Instagram strip (`#instagram`) uses a local snapshot of public @farmingtondental posts and links out to each post. Lifestyle plates in `public/media` are generated film stills. Staff portraits in `public/brand` are unchanged.
