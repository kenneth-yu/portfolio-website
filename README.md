# Kenneth Yu – Portfolio Website

A personal portfolio site built with React, TypeScript, Vite, Tailwind CSS, and React Router 7 with SSR.

## Features

- **Hero** – Introduction with profile photo
- **About Me** – Bio, tech stack, and image carousel
- **Experience** – Expandable accordion (mobile) and tabs (desktop)
- **Contact** – Email with copy-to-clipboard

Responsive layout, lazy-loaded images, accessible navigation with scroll-to-section behavior, and **server-side rendering** for SEO.

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router 7 (framework mode with SSR)
- Tailwind CSS
- Vitest

## Requirements

- Node.js 20+

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build (client + server) |
| `npm run start` | Run production server |
| `npm run preview` | Preview production build (alias for start) |
| `npm test` | Run tests |

## Deployment

Build output is in `build/`:
- `build/client/` – Static assets and prerendered HTML
- `build/server/index.js` – Node.js server for SSR

For **SSR deployment**: Run `npm run start` on a Node.js server (e.g. DigitalOcean App Platform, Railway).

For **static deployment**: The root route (`/`) is prerendered at build time. Deploy `build/client/` to Vercel, Netlify, or similar—no Node server required for the single-page portfolio.
