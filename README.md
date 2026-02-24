# Kenneth Yu – Portfolio Website

A personal portfolio site built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Hero** – Introduction with profile photo
- **About Me** – Bio, tech stack, and image carousel
- **Experience** – Expandable accordion (mobile) and tabs (desktop)
- **Contact** – Email with copy-to-clipboard

Responsive layout, lazy-loaded images, and accessible navigation with scroll-to-section behavior.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Vitest

## Requirements

- Node.js 18+

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
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm test` | Run tests |

## Deployment

Build output is in `dist/`. Suitable for static hosting (Vercel, Netlify, GitHub Pages, etc.). Configure SPA fallback if needed so all routes serve `index.html`.
