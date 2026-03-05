# Rajiv Mahto — Developer Portfolio

A modern, responsive portfolio website built with React 19, Vite 7, and Tailwind CSS v4. Features a **MUI-style theme system** with dark/light mode, scroll animations, and a clean component architecture.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss&logoColor=white)

## ✨ Features

- **Dark / Light Mode** — MUI-inspired theme system with `ThemeProvider` context, persisted via `localStorage`, respects `prefers-color-scheme`
- **Scroll Animations** — Fade-up, slide-in reveals powered by Framer Motion
- **Sticky Navbar** — Glass-morphism backdrop-blur navigation
- **Responsive Design** — Mobile-first, fully responsive on all devices
- **SEO Optimized** — JSON-LD structured data, Open Graph, Twitter Cards, sitemap, canonical URLs
- **Performance** — Lazy-loaded below-fold sections with React `Suspense`
- **Accessible** — `aria-label`, `aria-expanded`, `rel="noopener noreferrer"` on all applicable elements

## 🛠 Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React 19, Vite 7, Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React, React Icons |
| **Deployment** | Vercel |

## 📁 Project Structure

```
src/
├── components/          # UI components
│   ├── common/          # Reusable (ErrorBoundary, SectionHeader, etc.)
│   ├── sections/        # Page sections (Hero, About, Skills, ...)
│   └── cards/           # Card components (ProjectCard, ImageGallery)
├── context/             # ThemeContext (dark/light mode)
├── data/                # Static data (profile, projects, skills, etc.)
├── hooks/               # Custom hooks (useScrollSpy)
├── styles/              # CSS + MUI-style theme config
│   ├── index.css
│   └── theme.js
├── utils/               # Utility functions
├── App.jsx              # Root with ThemeProvider + ErrorBoundary
└── main.jsx             # Entry point
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Theme Configuration

The theme system is modeled after Material UI's `createTheme()` API. Edit `src/styles/theme.js` to customize colors, typography, shadows, and transitions:

```js
export const theme = {
  palette: {
    light: {
      background: { default: '#f3f4f6', paper: '#ffffff' },
      text: { primary: '#111827', secondary: '#4b5563' },
      primary: { main: '#3b82f6' },
      // ...
    },
    dark: {
      background: { default: '#0f172a', paper: '#1e293b' },
      text: { primary: '#f1f5f9', secondary: '#cbd5e1' },
      primary: { main: '#60a5fa' },
      // ...
    }
  }
};
```

## 📄 License

© Rajiv Mahto. All rights reserved.
