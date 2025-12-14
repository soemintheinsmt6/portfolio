# Portfolio (React + Vite + Framer Motion)

Soe Min Thein's personal portfolio with animated sections, modular structure and Google Analytics.

## Getting Started

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
  app/          # App setup (router, providers, store) [future]
  core/         # Core services (api, storage, config)
    config/
      ga.js     # GA id from env (VITE_GA_ID)
  features/     # Each feature is a self-contained module
    about/
    certificates/
    contact/
    experience/
    footer/
    hero/
    nav/
    projects/
    skills/
  shared/       # Reusable modules
    data/       # Re-exports central data
  components/   # Existing presentational components (kept for now)
  data/         # Existing data modules
```

Notes:
- `features/*` currently re-export from `components/*`. We can fully move code into features later.
- Data is split and frozen for immutability in `src/data/*` and re-exported via `src/shared/data`.

## Environment Variables

Create a `.env` file at the project root:

```env
VITE_GA_ID=G-XXXXXXXXXX
```

Vite exposes this at `import.meta.env.VITE_GA_ID`.

## Google Analytics (SPA)

- `index.html` dynamically loads `gtag.js` using `VITE_GA_ID` and sets `send_page_view: false`.
- `AnalyticsTracker` in `src/App.jsx` sends a page view on every route change:
  - Tracks both the main page (`/`) and certificates page (`/certificates`).

## Tech

- React 19, Vite, TailwindCSS
- framer-motion for animations
- react-router-dom for routing
- lucide-react + inline SVG icons

## Scripts

- `npm run dev` — start dev server
- `npm run build` — build production assets
- `npm run preview` — preview production build
- `npm run lint` — run ESLint
