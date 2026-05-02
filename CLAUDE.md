# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Efficiency & Credit-Saving Guardrails

### Operation Protocol: "Think Twice, Code Once"
- **Mandatory Planning Phase:** Before writing or modifying any code, provide a brief bulleted plan of intended changes. Wait for explicit approval ("GO", "Proceed") before executing any file writes.
- **Batch Processing:** Group all related logic, imports, and UI changes into a single write operation per file. Avoid incremental, line-by-line updates.
- **Context Pruning:** Only read files strictly necessary for the current task. If unsure of a logic block's location, ask for the specific file path instead of scanning the directory.

### Interaction Guidelines
- **Concise Communication:** Keep explanations brief. No flavor text, pleasantries, or repeating instructions back.
- **Direct-to-Code:** If a fix is trivial (e.g., a typo or missing import), include it in the current batch plan rather than a separate turn.
- **No Redundant Reads:** Use memory/cache for files already accessed in this session. Do not re-read a file unless confirmed it was updated externally.

### Coding Standards
- **Modular Architecture:** Break large files into smaller components. Small files are cheaper to read and rewrite in future turns.
- **DRY & Reuse:** Search for existing utilities/hooks before creating new ones.
- **Minimalist Comments:** Do not add verbose comments. Code should be self-documenting.

### Error Handling & Prevention
- **Fail Fast:** If a dependency is missing or a requirement is ambiguous, stop and ask. Do not guess a solution that will require credits to correct.
- **Syntax Validation:** Perform a mental lint check before writing to avoid fix-the-fix loops.
- **JSX Rule:** JSX must live in `.jsx` files. Never write JSX in `.js` files — Vite/rolldown will throw a parse error.

### Token Management
- After a major feature, suggest which files can be dropped from active context.
- For complex features, draft the architecture in Markdown first. Generate code only after the draft is approved.

---

## Overview

Professional portfolio website for Guilherme Dio, a Data Architect. React-based SPA built with Vite, dark-themed glassmorphic UI, deployed to GitHub Pages.

**Live Site:** [ggdio.github.io](https://ggdio.github.io/)
**Repo:** `ggdio/ggdio.github.io` (branch: `master`)
**Remote:** `git@github.com-ggdio:ggdio/ggdio.github.io.git`

---

## Project Structure

```
ggdio.github.io/
├── src/
│   ├── components/
│   │   ├── Layout/          # Header.jsx, Navbar.jsx
│   │   ├── Experience/      # ExperienceSection, ExperienceCard, CompactExperienceCard
│   │   ├── Skills/          # SkillsSection
│   │   ├── Testimonials/    # TestimonialWall, RecommendationCard
│   │   ├── KnowledgeHub/    # KnowledgeSection, ArticleCard
│   │   └── ui/              # Tag, FloatingSocials, ThemeToggle, LanguageToggle, ParticleBackground
│   ├── data/
│   │   ├── resumeData.js    # Source of truth: name, contact, skills (shared); en/pt sub-objects
│   │   └── linkedinData.json# Articles and LinkedIn recommendations
│   ├── hooks/
│   │   ├── useLanguage.js       # LanguageContext + useLanguage hook (no JSX)
│   │   ├── LanguageProvider.jsx # React context provider (JSX)
│   │   └── useTheme.js          # Theme toggle hook
│   ├── i18n/
│   │   ├── en.js            # English translation strings
│   │   └── pt.js            # Portuguese (PT-BR) translation strings
│   ├── index.css            # Global styles, Tailwind @theme, CSS variables, .glass/.text-gradient
│   ├── App.jsx              # Root: LanguageProvider wraps AppContent; renders all sections + footer
│   └── main.jsx             # Entry point
├── public/
│   ├── og-preview.png       # OG social preview (1200x630) — regenerate after layout changes
│   ├── favicon.svg
│   └── resume.pdf
├── vite.config.js           # Vite + @tailwindcss/vite plugin (no separate tailwind.config.js)
└── package.json
```

---

## Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` (theme defined in `index.css` `@theme` block)
- **Animations:** Framer Motion 12
- **Icons:** Lucide React 1.8
- **Utilities:** clsx, tailwind-merge
- **Deployment:** GitHub Pages via GitHub Actions (auto-deploys on push to `master`)

---

## Common Commands

Run from `ggdio.github.io/`:

```bash
npm run dev              # Vite dev server (port 5173, may fall back to 5174)
npm run build            # Production bundle → dist/
npm run lint             # ESLint
npm run preview          # Preview production build locally
```

OG preview screenshot (1200x630):
```bash
google-chrome --headless=new --screenshot=public/og-preview.png --window-size=1200,630 --hide-scrollbars --disable-gpu http://localhost:5173/
```

---

## Color System & CSS Variables

Defined in `src/index.css` `@theme` block and `:root` / `:root.light`:

| Token | Dark | Light |
|---|---|---|
| `--color-brand` | `#0A66C2` (LinkedIn blue) | same |
| `--color-accent-violet` | `#8B5CF6` | same |
| `--bg-primary` | `#0B0B0B` | `#f8fafc` |
| `--text-primary` | `#ffffff` | `#0f172a` |
| `--text-muted` | `#cbd5e1` | `#475569` |
| `--glass-bg` | `rgba(0,0,0,0.4)` | `rgba(255,255,255,0.4)` |

Theme switches by toggling `.light` class on `:root` (via `useTheme.js`).

Custom utility classes: `.glass`, `.text-gradient`, `.border-gradient`.

---

## Key Architecture Patterns

### i18n (Internationalization)
- **Languages:** EN-US (default) and PT-BR
- **Translation files:** `src/i18n/en.js` and `src/i18n/pt.js` — plain JS objects, no library
- **Context:** `LanguageContext` in `src/hooks/useLanguage.js`; provider in `src/hooks/LanguageProvider.jsx`
- **Hook:** `const { language, t } = useLanguage()` — `t` is the active translation object
- **Sections covered:** nav, header badge/button, experience, skills categories, endorsements, knowledge hub, footer
- **Skill names and article titles stay in English** in both modes (proper names / brand names)

### resumeData structure
```js
export const resumeData = {
  name: 'Guilherme Dio',          // shared
  contact: { ... },               // shared
  skills: { leadership, cloud, data, architecture, storage, software },  // shared
  en: { role, about, experience: [...] },
  pt: { role, about, experience: [...] },
};
```
Components read language-specific data via `resumeData[language]`.

### Theme Toggle
- `useTheme.js` adds/removes `.light` class on `document.documentElement`
- `ThemeToggle.jsx` in `components/ui/` renders a sun/moon icon button

### ParticleBackground
- `src/components/ui/ParticleBackground.jsx` — canvas-based animated particle network
- 70 particles in brand blue + accent violet, slow drift, fading connection lines ≤150px
- Placed as the **second child** in `<header>` (after the violet blob, before the content div)
- **Do not use negative z-index on the canvas** — it will be hidden behind the stacking context of `overflow-hidden` containers. Rely on DOM order instead.

### Z-index layering in Header
| Layer | Element | How |
|---|---|---|
| Back | Violet gradient blob | First in DOM, no z-index |
| Mid | `<ParticleBackground />` canvas | Second in DOM, no z-index |
| Front | Content `<div>` | `relative z-10` |

### Component Organization
- Feature-based grouping (Experience, Skills, etc.)
- Generic/reusable UI → `components/ui/`
- Each section component manages its own data consumption

---

## Deployment

- Push to `master` → GitHub Actions builds and publishes `dist/` to GitHub Pages
- Live site updates within ~2 minutes
- After layout changes: regenerate `public/og-preview.png` and commit it

---

## Code Standards

- No test suite — manual testing via dev server
- ESLint with React Hooks rules enforced
- Modern browsers only (ES2020+)
- **JSX only in `.jsx` files** — Vite/rolldown rejects JSX in `.js`

---

## Common Workflows

### Adding / updating content
- **Experience / about / role:** Edit `resumeData.en` and `resumeData.pt` in `src/data/resumeData.js`
- **Skills:** Edit `resumeData.skills` (shared); update category labels in `src/i18n/en.js` and `src/i18n/pt.js`
- **Articles / recommendations:** Edit `src/data/linkedinData.json`

### Adding a new translated string
1. Add the key to `src/i18n/en.js` and `src/i18n/pt.js`
2. Consume via `const { t } = useLanguage()` in the component

### Updating the OG preview
1. `npm run dev`
2. Run the Chrome headless screenshot command above
3. Commit `public/og-preview.png`

---

## Troubleshooting

- **Dev server doesn't start:** `npm install`; check Node ≥16
- **Tailwind class not applying:** Must be a static string — no dynamic template literals
- **Build fails:** Usually a missing import or syntax error; check `npm run build` output
- **JSX parse error in `.js` file:** Move JSX to a `.jsx` file
- **Canvas particles invisible:** Do not apply negative z-index to the canvas element inside `overflow-hidden` containers — use DOM order for stacking
