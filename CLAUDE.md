# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a Next.js 16 (App Router) personal portfolio site with a terminal/hacker aesthetic.

### Page structure

`app/page.tsx` is a single scrolling page with sections navigable via anchor links (`#hero`, `#projects`, `#github`, `#contact`):

1. **Hero** — `AsciiHero` (figlet ASCII name art with staggered reveal) + `Terminal` (interactive CLI)
2. **Projects** — `ProjectsGrid`
3. **Experience** — `Timeline`
4. **GitHub Stats** — `GitHubStats` (server component, ISR 1h) + `StatsDisplay` (client)
5. **Contact** — `ContactForm`
6. **Footer** — `LiveStatus`

### Server/client split pattern

Data-fetching components are async server components; interactive/animated children are `"use client"` components. Example: `GitHubStats` (server) fetches GitHub API and passes data to `StatsDisplay` (client) for count-up animations and interactivity.

### Global wrappers (app/layout.tsx)

- `CursorTrail` — canvas-based mouse trail rendered globally at z-index 9999, pointer-events none
- `.grid-bg` fixed overlay — 48px green-tinted grid background

### Terminal component

`components/Terminal/Terminal.tsx` is the interactive CLI in the hero. It:
- Runs a boot sequence on mount (BOOT_LINES with 350ms delays)
- Processes commands defined in `commands.ts` (returns `CommandOutput[]` with types: `text | success | error | link | table`)
- Supports command history via arrow keys
- Scrolls only its own container, never the page

### Animation patterns

- **Framer Motion** for entrance animations (`initial`/`animate`/`whileInView` with staggered `delay`)
- **CSS animations** for terminal effects: `.cursor-blink` (1s step-end), `.terminal-scanline` (4s linear)
- **Canvas + requestAnimationFrame** for CursorTrail (throttled to ~80fps, 24-point max, 600ms lifetime)
- **IntersectionObserver** with `once: true` for scroll-triggered count-up animations in StatsDisplay

### Styling

- Tailwind CSS v4 (PostCSS plugin, not the v3 config file)
- Dark-only theme via CSS custom properties: `--background: #0a0a0a`, `--foreground: #e5e5e5`, `--accent: #00ff88`
- Responsive typography uses `clamp()` and `vw` units (e.g., ASCII art scales at `1.4vw`)
- Content max-width: `max-w-6xl` (1152px)

### Key dependencies

- `framer-motion` — all animations
- `figlet` — ASCII art generation in AsciiHero (server-side)
- `lucide-react` — icons
- Next.js 16, React 19, TypeScript, Tailwind v4
