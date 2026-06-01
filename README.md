# Thetective — Website

Marketing website for **Thetective**, an Indonesian software studio. Implemented
from the Figma design ([source](https://www.figma.com/design/YZqhLGl0HChGomDr0MAv7z/))
via the Figma MCP.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS v4** (configured via `@tailwindcss/vite`, tokens in `src/index.css`)
- **React Router** for client-side routing
- Font: **Space Grotesk** (Google Fonts)

## Pages

| Route    | Page  | Sections                                                                              |
| -------- | ----- | ------------------------------------------------------------------------------------- |
| `/`      | Home  | Hero · Trusted by · Quiet builders of *loud* outcomes · What we do · Selected work · Let's talk |
| `/about` | About | A small team for *large* systems · Our story · How we work · The people behind it · Let's talk |

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:5173
```

```bash
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
```

## Structure

```
public/assets/        Images, brand logos and icons exported from Figma
src/
  data.ts             All page copy + asset references (single source of truth)
  index.css           Tailwind import + brand design tokens (@theme)
  App.tsx             Router + scroll management
  components/
    ui.tsx            Container, SectionKicker, ArrowUpRight, Logo
    Navbar.tsx
    Footer.tsx
    ConsultationSection.tsx   Shared "Let's talk" CTA used on both pages
  pages/
    Home.tsx
    About.tsx
```

## Design tokens

Pulled directly from the Figma file (no Figma variables were defined, so values
are captured as CSS custom properties in `src/index.css`):

- Cream background `#fafaf7`, ink `#0a0a0a`
- Accent blue `#2563eb` (highlighted words, links, focus states)
- Neutral text grey `#404040` → `#a1a1a1`
