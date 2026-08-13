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
  assets/               # Static assets
    Illustrations/      # SVG and Lottie animations
      certification.svg
      colloborate.svg
      contact.json
      developer.json
      team.json
    images/             # Project screenshots
    logos/              # Brand logos
  components/           # Presentational components
    About.jsx
    Certificates.jsx
    CertificatesPage.jsx
    Contact.jsx
    Experience.jsx
    Footer.jsx
    Hero.jsx
    Nav.jsx
    Projects.jsx
    Skills.jsx
    SkillsPage.jsx
    ThemeSwitcher.jsx
  core/                 # Core services
    config/
      ga.js             # GA id from env (VITE_GA_ID)
    theme/
      ThemeContext.jsx  # Theme provider
      themes.js         # Theme definitions
  data/                 # Data modules
    certificates.js
    experience.js
    index.js
    projects.js
    skills.js
    utils.js
  shared/               # Reusable modules
    data/
      index.js          # Re-exports central data
  App.jsx               # Main app component
  data.js               # Legacy data exports
  index.css             # Global styles
  main.jsx              # Entry point
public/
  s-icon.png            # Favicon
```

Notes:
- Data is split and frozen for immutability in `src/data/*` and re-exported via `src/shared/data`.

## Environment Variables

Google Analytics is configured for deployment in the Vercel project dashboard:

1. Open **Project Settings → Environment Variables**.
2. Add `VITE_GA_ID` with the GA4 measurement ID (`G-XXXXXXXXXX`).
3. Enable it for the **Production** environment and redeploy the project.

Vite embeds `VITE_GA_ID` at build time and exposes it to the app through
`import.meta.env.VITE_GA_ID`. The variable must therefore be present before the
Vercel production build runs.

For optional local analytics testing, create a `.env.local` file (it is ignored
by Git):

```env
VITE_GA_ID=G-XXXXXXXXXX
```

## Google Analytics (SPA)

- `index.html` dynamically loads `gtag.js` using `VITE_GA_ID` and sets `send_page_view: false`.
- `AnalyticsTracker` in `src/App.jsx` sends a page view on every route change:
  - Tracks the main (`/`), certificates (`/certificates`) and skills (`/skills`) routes.

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
