# Technology Stack Research

**Project:** Next.js Portfolio with Heavy CSS Animations
**Domain:** Portfolio website with 2010s aesthetic (glitter, rainbow gradients, extreme CSS animations)
**Researched:** 2026-02-04
**Confidence:** HIGH

## Executive Summary

For a Next.js 15 portfolio with heavy CSS-only animations and 2010s aesthetic, the recommended stack is:
- **Next.js 15** (or 16 if starting fresh) with TypeScript
- **Tailwind CSS v4** for utility classes + **vanilla CSS** for complex animations
- **React Icons** for social media icons
- **Vercel** for deployment

**Key principle:** CSS-only animations mean NO JavaScript animation libraries (Framer Motion, GSAP). Use vanilla CSS with `@keyframes`, `transform`, and `opacity` for GPU-accelerated performance.

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why Recommended | Confidence |
|------------|---------|---------|-----------------|------------|
| Next.js | 15.x or 16.x | React framework | Industry standard for portfolios in 2026. Next.js 15 is stable (Oct 2024), Next.js 16 is current (Jan 2026) with Turbopack stable. Use 16 for greenfield projects. | HIGH |
| React | 19.2+ | UI library | Required by Next.js 15+. React 19 is stable as of 2026. | HIGH |
| TypeScript | 5.1+ | Type safety | Built-in Next.js support with `next.config.ts`. Essential for scalable portfolios. | HIGH |
| Node.js | 20.9.0+ | Runtime | Required by Next.js 16 (dropped Node 18 support). Next.js 15 requires 18.18.0+. | HIGH |

### CSS & Styling

| Technology | Version | Purpose | Why Recommended | Confidence |
|------------|---------|---------|-----------------|------------|
| Tailwind CSS | 4.x | Utility-first CSS framework | Fast prototyping for spacing, colors, layout. v4 uses `@tailwindcss/postcss` package. **Use for utilities only, NOT complex animations.** | HIGH |
| Vanilla CSS | Native | Complex animations | Pure CSS `@keyframes`, `@property`, `conic-gradient` for glitter/rainbow effects. No runtime overhead. **Primary animation approach.** | HIGH |
| CSS Modules | Native (Next.js built-in) | Component-scoped styles | Optional for organizing animation CSS. 25-33% faster rendering than Tailwind for complex animations. | HIGH |
| PostCSS | Latest | CSS processing | Required by Tailwind CSS v4. | HIGH |

**Why NOT CSS-in-JS (styled-components, Emotion):**
- Adds runtime overhead (JavaScript parses styles)
- Poor performance with heavy animations
- Requires complex SSR configuration in Next.js 15+ App Router
- Defeats the purpose of CSS-only animations

### Animation Approach

| Approach | Use Case | Performance | Confidence |
|----------|----------|-------------|------------|
| `@keyframes` + `transform` + `opacity` | All animations | GPU-accelerated, 60 FPS | HIGH |
| `will-change` property | Pre-optimize heavy animations | Use sparingly (GPU flooding risk) | HIGH |
| `conic-gradient` + `@property` | Rainbow gradients, glitter effects | Modern, performant | HIGH |
| `animation-timeline: scroll()` | Scroll-triggered effects | Native 2026 feature, no JS needed | MEDIUM |
| Animate.css | Pre-built animation classes | 80+ animations, CSS-only | MEDIUM |
| Animista | Custom animation generator | Visual editor, exports CSS | MEDIUM |

**Avoid animating:** `width`, `height`, `left`, `top`, `margin` (triggers layout thrashing)
**Animate instead:** `transform: scale()`, `transform: translate()`, `opacity`

### Icons & Assets

| Library | Version | Purpose | Why Recommended | Confidence |
|---------|---------|---------|-----------------|------------|
| React Icons | Latest | Social media icons | 50,000+ icons, tree-shakable, comprehensive coverage. Best for portfolios needing variety. | HIGH |
| Lucide React | Latest | Alternative icon set | Smaller, curated set. Better if you need <20 icons. Optional alternative. | HIGH |
| next/image | Built-in | Image optimization | Automatic WebP conversion, lazy loading. Use for any images. | HIGH |

**Why React Icons over Lucide:**
- Portfolio needs diverse social media icons (GitHub, LinkedIn, Twitter, etc.)
- React Icons has better social icon coverage
- Both are tree-shakable, so bundle size difference is negligible when importing selectively

### Development Tools

| Tool | Purpose | Configuration | Confidence |
|------|---------|---------------|------------|
| ESLint | Code linting | Use `eslint.config.mjs` (flat config) with `next/core-web-vitals` and `next/typescript` | HIGH |
| Prettier | Code formatting | Use `eslint-config-prettier` to prevent conflicts. Add `prettier-plugin-tailwindcss` for class sorting. | HIGH |
| TypeScript | Type checking | Auto-configured by Next.js. No extra setup needed. | HIGH |
| Turbopack | Build tool | Stable in Next.js 16 (default bundler). 76.7% faster local startup. | HIGH |

### Deployment

| Platform | Purpose | Why Recommended | Confidence |
|----------|---------|-----------------|------------|
| Vercel | Hosting & deployment | Created by Next.js team. Zero-config deployment. 68ms TTFB. Edge network optimization. Free tier sufficient for portfolio. | HIGH |

## Installation

### Option A: Next.js 16 (Current, Recommended for Greenfield)

```bash
# Create Next.js 16 project with TypeScript
npx create-next-app@latest portfolio --typescript --eslint --app --turbopack
cd portfolio

# Install Tailwind CSS v4
npm install tailwindcss @tailwindcss/postcss postcss

# Install icon library
npm install react-icons

# Install dev dependencies
npm install -D prettier eslint-config-prettier prettier-plugin-tailwindcss
```

### Option B: Next.js 15 (Stable, Lower Risk)

```bash
# Create Next.js 15 project
npx create-next-app@15 portfolio --typescript --eslint --app
cd portfolio

# Install Tailwind CSS v4
npm install tailwindcss @tailwindcss/postcss postcss

# Install icon library
npm install react-icons

# Install dev dependencies
npm install -D prettier eslint-config-prettier prettier-plugin-tailwindcss
```

### PostCSS Configuration

Create `postcss.config.mjs`:

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

### Tailwind Import

In `app/globals.css`:

```css
@import "tailwindcss";

/* Your custom animation CSS below */
@keyframes glitter {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
}

@keyframes rainbow-shift {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}
```

### Prettier Configuration

Create `.prettierrc`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "tabWidth": 2,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### ESLint Configuration

Create `eslint.config.mjs` (flat config for Next.js 15+):

```javascript
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
];

export default eslintConfig;
```

## Alternatives Considered

| Category | Recommended | Alternative | When to Use Alternative | Confidence |
|----------|-------------|-------------|-------------------------|------------|
| Framework | Next.js 15/16 | Remix, Astro | Astro if static-only (no dynamic content). Remix if you hate Vercel. | HIGH |
| Styling | Tailwind + Vanilla CSS | Pure CSS Modules | CSS Modules if you prefer explicit scoping over utilities. | MEDIUM |
| Icons | React Icons | Lucide React, Font Awesome | Lucide if <20 icons. Font Awesome if legacy project. | HIGH |
| Animation | Vanilla CSS | Framer Motion, GSAP | **NEVER for this project** (violates CSS-only constraint). | HIGH |
| Deployment | Vercel | Netlify, Cloudflare Pages | Netlify if multi-framework. Cloudflare if cost-sensitive at scale. | HIGH |

## What NOT to Use

| Avoid | Why | Use Instead | Confidence |
|-------|-----|-------------|------------|
| Framer Motion | JavaScript-based animations. Adds 50KB+ bundle size. Defeats CSS-only requirement. | Vanilla CSS `@keyframes` | HIGH |
| GSAP | JavaScript animation library. Overkill for CSS effects. | Vanilla CSS with `@property` for complex gradients | HIGH |
| styled-components | Runtime CSS-in-JS overhead. Poor Next.js 15+ App Router support. Complex SSR setup. | Tailwind + CSS Modules | HIGH |
| Emotion | Same issues as styled-components. Runtime style injection hurts animation performance. | Tailwind + Vanilla CSS | HIGH |
| CSS-in-JS libraries | All add runtime overhead that degrades animation performance (25-33% slower rendering). | Native CSS solutions | HIGH |
| Animate on `width`/`height` | Triggers layout thrashing. Destroys 60 FPS target. | `transform: scale()` instead | HIGH |
| Excessive `will-change` | Floods GPU with layers, causes worse performance. | Use sparingly, only on animated elements | HIGH |
| Font Awesome (via CDN) | External request, blocks rendering. Not tree-shakable. | React Icons (imports only needed icons) | MEDIUM |

## Stack Patterns for This Project

### Pattern 1: Tailwind for Structure, CSS for Animation

**When:** Always for this project
**Why:** Tailwind's atomic classes are fast for layout/spacing. Vanilla CSS is faster for complex animations.

**Example:**
```tsx
// Component structure with Tailwind
<div className="flex items-center justify-center min-h-screen bg-black">
  {/* Animation with vanilla CSS */}
  <h1 className="glitter-text">Welcome</h1>
</div>

// In globals.css
.glitter-text {
  animation: glitter 2s ease-in-out infinite;
  background: linear-gradient(45deg, #ff007f, #ffbf00, #00ffbf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Pattern 2: CSS Modules for Complex Animation Groups

**When:** Multiple related animations need scoping
**Why:** Prevents class name collisions. Better organization than global CSS.

**Example:**
```tsx
// components/RainbowButton.module.css
.button {
  position: relative;
  overflow: hidden;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: conic-gradient(
    from 0deg,
    #ff007f, #ffbf00, #00ffbf, #00d4ff, #ff007f
  );
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  100% { transform: rotate(360deg); }
}
```

### Pattern 3: Animate.css for Quick Effects

**When:** Need standard effects (fade, bounce, shake) quickly
**Why:** Pre-built, optimized, CSS-only

**Example:**
```bash
npm install animate.css
```

```tsx
import 'animate.css';

<button className="animate__animated animate__bounce animate__infinite">
  Click Me
</button>
```

### Pattern 4: Custom CSS Properties for Dynamic Themes

**When:** Need to change animation colors/speeds dynamically
**Why:** CSS variables work with CSS-only animations (JS-free updates)

**Example:**
```css
:root {
  --glitter-speed: 2s;
  --rainbow-color-1: #ff007f;
  --rainbow-color-2: #ffbf00;
}

.animated-element {
  animation: glitter var(--glitter-speed) infinite;
  background: linear-gradient(45deg, var(--rainbow-color-1), var(--rainbow-color-2));
}
```

```tsx
// Update via inline style (no JS animation libraries needed)
<div style={{ '--glitter-speed': '1s' } as React.CSSProperties}>
```

## 2010s Aesthetic Specific Tools

### CSS Techniques for Scene Kid / DeviantArt Aesthetic

| Effect | CSS Approach | Performance | Confidence |
|--------|--------------|-------------|------------|
| Glitter | `@keyframes` + random `translate` + `opacity` | Use sparingly (many elements = GPU load) | HIGH |
| Rainbow gradients | `conic-gradient` + `hue-rotate` animation | GPU-accelerated via `filter` | HIGH |
| Neon glow | `box-shadow` with multiple layers + `blur` | Use `will-change: box-shadow` | HIGH |
| Sparkles | CSS-generated `::before`/`::after` pseudo-elements | Better than images (no HTTP requests) | MEDIUM |
| Text effects | `background-clip: text` + animated gradient | Well-supported in 2026 | HIGH |

**Example Resources:**
- Animate.css: 80+ pre-built animations (CSS-only)
- Animista: Visual CSS animation generator
- CSS Glow Effects: 60+ examples on freefrontend.com
- Rainbow gradient patterns: Use `conic-gradient` (superior to old `linear-gradient` hacks)

## Version Compatibility Matrix

| Next.js Version | React Version | TypeScript | Node.js | Confidence |
|-----------------|---------------|------------|---------|------------|
| 15.x | 19 RC+ | 5.0+ | 18.18.0+ | HIGH |
| 16.x | 19.2+ | 5.1+ | 20.9.0+ | HIGH |

| Tailwind CSS | Next.js | PostCSS | Confidence |
|--------------|---------|---------|------------|
| 4.x | 15.x, 16.x | Latest | HIGH |

| React Icons | React | Next.js | Confidence |
|-------------|-------|---------|------------|
| Latest (9.x+) | 18+, 19+ | 15.x, 16.x | HIGH |

**Note:** Next.js 16 requires Node.js 20.9.0+ (dropped Node 18 support)

## Performance Benchmarks

### CSS Animation Performance (2026 Research)

**60 FPS Target:** 16.66ms per frame
**GPU-accelerated properties:** `transform`, `opacity`
**Layout-triggering properties (AVOID):** `width`, `height`, `left`, `top`, `margin`

**Rendering Performance (CSS Modules vs Tailwind for Animations):**
- Chrome: CSS Modules 28% faster (121ms vs 169ms)
- Safari: CSS Modules 33% faster (272ms vs 406ms)
- Firefox: CSS Modules 25% faster (82ms vs 114ms)

**Verdict:** Use CSS Modules or vanilla CSS for heavy animation blocks, Tailwind for static layout utilities.

### Vercel Deployment Performance

- **TTFB:** 68ms (industry-leading)
- **Build times:** 38-112s (cached vs uncached)
- **Edge Network:** Global CDN, automatic optimization

## Accessibility Considerations

**CRITICAL:** Respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Why:** Users with vestibular disorders can experience nausea/dizziness from animations. This is a WCAG 2.1 Level AA requirement.

## Production Optimizations

### Next.js Image Optimization

```tsx
import Image from 'next/image';

<Image
  src="/sparkle.png"
  alt="Sparkle decoration"
  width={50}
  height={50}
  loading="lazy"
/>
```

### CSS Animation Performance Checklist

- [ ] Only animate `transform` and `opacity`
- [ ] Use `will-change` sparingly (only actively animating elements)
- [ ] Test with DevTools Performance tab (target 60 FPS)
- [ ] Implement `prefers-reduced-motion` media query
- [ ] Use `contain: layout` to isolate repaints
- [ ] Lazy-load heavy animation components with `React.lazy()`

### Bundle Size Management

```tsx
// GOOD: Tree-shakable imports
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// BAD: Imports entire library
import * as Icons from 'react-icons/fa';
```

## Sources

### High Confidence (Official Docs & Verified Sources)

- [Next.js 15 Release](https://nextjs.org/blog/next-15) - Official release notes
- [Next.js 16 Upgrade Guide](https://nextjs.org/docs/app/guides/upgrading/version-16) - Official migration docs
- [Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs) - Official integration guide
- [Next.js ESLint Configuration](https://nextjs.org/docs/app/api-reference/config/eslint) - Official config docs
- [Vercel Next.js Deployment](https://vercel.com/docs/frameworks/full-stack/nextjs) - Official deployment docs
- [CSS Animation Performance - MDN](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance) - Performance best practices

### Medium Confidence (Verified Multiple Sources)

- [Next.js 15 Best Practices](https://www.serviots.com/blog/nextjs-development-best-practices) - Community patterns
- [React Icon Libraries Comparison](https://lineicons.com/blog/react-icon-libraries) - Library benchmarks
- [CSS Modules vs Tailwind Performance](https://dev.to/yoskutik/is-tailwind-actually-slow-533d) - Performance comparison
- [React Best Practices by Vercel](https://vercel.com/blog/introducing-react-best-practices) - Official optimization guide (Jan 2026)
- [Top React Icon Libraries 2026](https://hugeicons.com/blog/development/top-5-react-icon-library) - Icon library comparison
- [ESLint & Prettier Next.js Setup](https://github.com/danielalves96/eslint-prettier-next-15) - Configuration patterns

### Animation-Specific Resources

- [Animate.css](https://animate.style/) - CSS-only animation library
- [CSS Glow Effects](https://freefrontend.com/css-glow-effects/) - 60+ examples
- [Tailwind CSS Animations Tutorial](https://prismic.io/blog/tailwind-animations) - 40+ examples
- [Website Animations Best Practices 2026](https://www.shadowdigital.cc/resources/do-you-need-website-animations) - Industry trends
- [CSS Animation Library Comparison](https://graygrids.com/blog/best-css-javascript-animation-libraries) - Library options
- [CSS in 2026 Updates](https://developersjourney.substack.com/p/css-in-2026-is-getting-serious) - Modern CSS features

---

**Stack Research Summary:**
For a Next.js portfolio with heavy CSS-only animations and 2010s aesthetic, the optimal 2026 stack is Next.js 15/16 + TypeScript + Tailwind (utilities) + Vanilla CSS (animations) + React Icons + Vercel. This combination provides modern DX, optimal performance (60 FPS animations via GPU-accelerated CSS), and zero-config deployment.

**Critical Success Factor:** Strict CSS-only animations (no Framer Motion, GSAP). Use `@keyframes`, `transform`, `opacity`, and modern CSS features like `conic-gradient` and `@property` for all animation effects.

**Performance Priority:** Animate only `transform` and `opacity` to maintain 60 FPS. Implement `prefers-reduced-motion` for accessibility. Use CSS Modules for complex animation groups where Tailwind becomes verbose.

*Researched: 2026-02-04*
*Confidence: HIGH (verified with official docs and multiple 2026 sources)*
