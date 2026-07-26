# Rahul Biradar — Portfolio (V2)

Version 2 of the personal portfolio — an evolution of the original design, rebuilt with React (Vite), plain CSS, React Icons, and Framer Motion.

## What changed from V1

V1 was built with Tailwind CSS: a gradient (purple → indigo → blue) navbar, full-bleed stock-photo backgrounds behind frosted-glass content cards, a teal-blue scroll-to-top button, and yellow hover accents.

V2 keeps that exact visual identity but rebuilds and elevates it:

- **Same brand gradient** (purple → indigo → blue) — now a proper set of CSS custom properties, driving the navbar mark, buttons, tags, and section accents.
- **Same glassmorphic card pattern** — content still floats in frosted-glass cards, but the background is now an animated aurora/gradient-mesh in the brand colors instead of hotlinked stock photography. Same immersive feel, no generic photos, better performance, works in both themes.
- **Same teal-blue scroll-to-top FAB** and yellow-accented hover states, carried over directly.
- **New:** dark/light theme toggle (persisted), real Framer Motion animations (fade/slide/hover — the dependency existed in V1 but wasn't used), a proper type pairing (Sora + Inter + JetBrains Mono), and three new sections V1 didn't have: Professional Summary, Work Experience, and Footer.
- **Content:** updated experience, and the old fresher projects (Todo App, Jobby, Nxt Trendz clone) replaced with current enterprise projects (Alpha ERP, Medayus, Kalakakshaaha) — descriptions, responsibilities, and tech stack only, no demo/GitHub links per project.
- Plain CSS throughout — no Tailwind.

## Tech Stack

- **React 18** + **Vite**
- **Plain CSS** — custom design system with CSS variables, no framework
- **Framer Motion** — subtle fade-in, slide-up, and hover animations
- **React Icons** — `react-icons/hi` and `react-icons/fa`

## Getting Started

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173` by default.

### Build for production

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Project Structure

```
portfolio-v2/
├── index.html                 # Document shell + SEO meta tags
├── public/
│   ├── favicon.svg
│   └── resume.pdf             # Downloadable resume (linked from Hero & Contact)
├── scripts/
│   └── generate_resume.py     # Regenerates resume.pdf from portfolio data
├── src/
│   ├── main.jsx
│   ├── App.jsx                 # Section composition + lazy loading
│   ├── index.css               # Design tokens (dark/light) + glass-card system
│   ├── data/
│   │   └── portfolio.js        # Single source of truth for all content
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useActiveSection.js
│   │   └── useScrollVisible.js
│   └── components/
│       ├── AuroraBackdrop.jsx / .css   # Animated gradient-mesh backdrop
│       ├── Navbar.jsx / .css
│       ├── ThemeToggle.jsx / .css
│       ├── Hero.jsx / .css
│       ├── Summary.jsx / .css
│       ├── Experience.jsx / .css
│       ├── Projects.jsx / .css
│       ├── ProjectCard.jsx / .css
│       ├── Skills.jsx / .css
│       ├── Contact.jsx / .css
│       ├── Footer.jsx / .css
│       └── ScrollToTop.jsx / .css
└── package.json
```

## Updating Content

All content lives in one file:

```
src/data/portfolio.js
```

Edit it and every section updates automatically.

## Replacing the Resume

`public/resume.pdf` is served by the "Download Resume" buttons in Hero and Contact. Replace it with your own PDF (keep the filename, or update the `href` in `Hero.jsx` / `Contact.jsx` if renamed). Re-run `python3 scripts/generate_resume.py` to regenerate it from `src/data/portfolio.js` after content changes.

## Browser Support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari — latest two versions). Backdrop blur degrades gracefully on unsupported browsers.
