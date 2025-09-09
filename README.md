## EVCO Website – Production Guide

A production-ready React + Vite site styled with Tailwind CSS and shadcn/ui components.

### Tech stack
- **Build tool**: Vite
- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS
- **UI library**: shadcn/ui

### Requirements
- Node.js 18+ (recommend LTS) and npm 9+
- Optional: `pnpm` or `bun` if you prefer those managers

### Install & develop
```bash
npm install
npm run dev
```
The dev server runs locally and supports hot reload.

### Production build
```bash
npm run build   # outputs to dist/
npm run preview # serve the built app locally for a quick check
```

### Environment variables
This site is static and does not require runtime secrets. If you add any, create a `.env` file and prefix variables with `VITE_` to expose them to the client.

### Deployment options
The output in `dist/` is a static site. Any static host or CDN works.

- **Vercel**
  - Framework preset: Vite
  - Build command: `npm run build`
  - Output directory: `dist`

- **Netlify**
  - Build command: `npm run build`
  - Publish directory: `dist`

- **GitHub Pages**
  - Build locally or via Actions, then publish `dist/` to `gh-pages` branch.
  - If deploying to a subpath, set `base` in `vite.config.ts` accordingly.

- **Nginx/Static server**
  - Copy `dist/` to your server and serve as root.
  - Example Nginx snippet:
    ```nginx
    server {
      listen 80;
      server_name example.com;
      root /var/www/evco/dist;
      location / { try_files $uri /index.html; }
    }
    ```

### Commands
- **npm run dev**: Start local dev server
- **npm run build**: Create production build in `dist/`
- **npm run preview**: Preview the production build

### Quality gates (recommended)
- Lint and type-check locally or in CI:
```bash
npm run lint || echo "configure eslint if needed"
npx tsc --noEmit
```

### File structure (key parts)
```
src/
  components/    # UI sections and shadcn components
  pages/          # Route-level pages
  assets/         # Images used across the site
  main.tsx        # App bootstrap
  index.css       # Tailwind base
```

### Updating hero image
- Replace the file at `src/assets/hero-architecture.jpg` or import a new file in `src/components/HeroSection.tsx`.

### Contact button behavior
The “GET IN TOUCH” button smooth-scrolls to the contact form using the element with `id="contact"` in `src/components/ContactSection.tsx`.

### SEO and performance checklist
- Set a descriptive `<title>` and meta tags in `index.html`.
- Provide descriptive `alt` text for images.
- Compress images and prefer modern formats (WebP/AVIF) when possible.
- Enable CDN caching for `dist/` assets.

### Support & maintenance
- Keep dependencies updated.
- Run a production build and `npm run preview` before deploying.
- Monitor error logs via your hosting provider; this is a static site so failures are rare.
