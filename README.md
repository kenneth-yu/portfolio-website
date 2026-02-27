# Kenneth Yu – Portfolio Website

A personal portfolio site built with React, TypeScript, Vite, Tailwind CSS, and React Router 7 (static site generation).

## Features

- **Hero** – Introduction with profile photo
- **About Me** – Bio, tech stack, and image carousel
- **Experience** – Expandable accordion (mobile) and tabs (desktop)
- **Contact** – Email with copy-to-clipboard

Responsive layout, lazy-loaded images, accessible navigation with scroll-to-section behavior, and **pre-rendered HTML** for SEO.

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router 7 (framework mode, static site generation)
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
| `npm run build` | Production build (static) |
| `npm run start` | Serve production build locally |
| `npm run preview` | Preview production build (alias for start) |
| `npm test` | Run tests |

## Deployment

Build output is in `build/client/` – static HTML, assets, and prerendered content. No Node.js server required.

Deploy `build/client/` to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages). Set the publish directory to `build/client`.
