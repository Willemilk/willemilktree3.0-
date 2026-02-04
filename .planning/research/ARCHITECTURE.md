# Architecture Research: Next.js 15 Portfolio with Heavy Animations

**Domain:** Next.js 15 Portfolio Sites with Heavy CSS Animations
**Researched:** 2026-02-04
**Confidence:** HIGH

## Standard Architecture for Next.js 15 Portfolios

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Browser (Client Layer)                    │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │  Home   │  │  About  │  │  Cool   │  │  Nav    │        │
│  │  Page   │  │  Page   │  │  Stuff  │  │  Bar    │        │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘        │
│       │            │            │            │              │
├───────┴────────────┴────────────┴────────────┴──────────────┤
│                   Root Layout (Shared)                       │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  <html> + <body> + Global Navigation + Footer       │    │
│  └─────────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│                   Component Layer                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │  Social  │  │ Animated │  │  Button  │  │  Card    │    │
│  │  Links   │  │  Decor   │  │          │  │          │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
├─────────────────────────────────────────────────────────────┤
│                    Animation Layer (CSS)                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ Keyframes│  │  GPU     │  │ Staggered│  │ Global   │    │
│  │  Shared  │  │  Helpers │  │ Delays   │  │ Utilities│    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| **Root Layout** | Provides `<html>`, `<body>`, global nav, shared meta tags | `app/layout.tsx` - wraps all pages |
| **Page Components** | Route-specific content (Home, About, Cool Stuff) | `app/page.tsx`, `app/about/page.tsx`, `app/cool-stuff/page.tsx` |
| **Navigation** | Shared navigation with `<Link>` components, active state | `app/_components/Navigation.tsx` (client component for active state) |
| **Reusable UI** | Social links, cards, buttons, animated decorations | `app/_components/` (private folder, not routable) |
| **Animation Styles** | CSS keyframes, GPU optimization, stagger utilities | CSS Modules per component + global animation utilities |

## Recommended Project Structure

```
project-root/
├── app/                           # App Router (Next.js 15)
│   ├── layout.tsx                 # Root layout (REQUIRED - <html> + <body>)
│   ├── page.tsx                   # Home page (/)
│   ├── about/
│   │   └── page.tsx               # About page (/about)
│   ├── cool-stuff/
│   │   └── page.tsx               # Cool Stuff page (/cool-stuff)
│   ├── _components/               # Private - shared components (not routable)
│   │   ├── Navigation.tsx         # Main nav (client component)
│   │   ├── SocialLinks.tsx        # Social link cards
│   │   ├── AnimatedDecor.tsx      # Decorative animated elements
│   │   ├── Button.tsx             # Reusable button
│   │   └── Card.tsx               # Reusable card component
│   ├── _lib/                      # Private - utilities and helpers
│   │   ├── animation-utils.ts     # Animation timing, delays, stagger logic
│   │   └── constants.ts           # Colors, timings, URLs
│   └── globals.css                # Global styles, Tailwind imports
├── public/                        # Static assets
│   ├── icons/                     # SVG icons, decorative elements
│   └── images/                    # Images if needed
├── styles/                        # Additional CSS organization
│   ├── animations/                # Global animation keyframes
│   │   ├── glitter.module.css     # Glitter effect keyframes
│   │   ├── gradients.module.css   # Gradient animations
│   │   ├── floating.module.css    # Floating animations
│   │   └── pulsing.module.css     # Pulsing effects
│   └── gpu-acceleration.css       # will-change utilities, GPU helpers
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

### Structure Rationale

- **`app/_components/`**: Underscore prefix makes folder private (not routable). All shared components live here. Clean separation between routing (`app/`) and UI components.

- **`app/_lib/`**: Private utilities folder. Houses animation timing logic, constants, helper functions. Not part of routing system.

- **`styles/animations/`**: Dedicated folder for CSS animation keyframes organized by effect type. Using CSS Modules (`.module.css`) for local scoping prevents naming collisions when multiple effects run simultaneously.

- **Root-level `app/layout.tsx`**: Contains shared navigation, global meta tags, and wraps all pages. State persists during navigation (no re-render).

- **Page components at route level**: `app/page.tsx`, `app/about/page.tsx` follow Next.js 15 App Router conventions. Each is a simple Server Component importing needed UI components.

## Architectural Patterns

### Pattern 1: Layout-First with Nested Components

**What:** Build the root layout and navigation first, then page-specific components.

**When to use:** All portfolio sites. Establishes consistent structure before building pages.

**Trade-offs:**
- **Pros:** Ensures visual consistency, navigation works immediately, easy to test shared UI
- **Cons:** Requires thinking about global structure upfront

**Example:**
```typescript
// app/layout.tsx (Root Layout - Build FIRST)
import Navigation from './_components/Navigation'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}

// app/page.tsx (Home Page - Build SECOND)
import SocialLinks from './_components/SocialLinks'
import AnimatedDecor from './_components/AnimatedDecor'

export default function HomePage() {
  return (
    <div>
      <h1>Welcome</h1>
      <SocialLinks />
      <AnimatedDecor />
    </div>
  )
}
```

### Pattern 2: CSS Modules for Animation Isolation

**What:** Use CSS Modules (`.module.css`) for component-specific animations to avoid naming collisions.

**When to use:** When components have unique animation needs or when multiple effects with similar names exist.

**Trade-offs:**
- **Pros:** Local scoping prevents conflicts, easy to co-locate with component, explicit imports
- **Cons:** Global keyframes need `:global()` wrapper, slightly more verbose

**Example:**
```typescript
// app/_components/GlitterCard.tsx
import styles from './GlitterCard.module.css'

export default function GlitterCard() {
  return <div className={styles.card}>Sparkle!</div>
}

// app/_components/GlitterCard.module.css
@keyframes :global(glitter-shimmer) {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.card {
  animation: glitter-shimmer 2s infinite;
}
```

**Why `:global()`?** Keyframe names in CSS Modules get hashed. Use `:global()` to prevent hashing so keyframes can be reused across components.

### Pattern 3: Staggered Animation with CSS Custom Properties

**What:** Use CSS custom properties (`--delay`) and `calc()` to stagger multiple simultaneous animations.

**When to use:** When animating lists, grids, or multiple decorative elements that should animate in sequence.

**Trade-offs:**
- **Pros:** Pure CSS (no JS), GPU-friendly, clean markup
- **Cons:** Less flexible than JS-based staggering

**Example:**
```typescript
// app/_components/SocialLinks.tsx
import styles from './SocialLinks.module.css'

const socials = ['Twitter', 'GitHub', 'LinkedIn']

export default function SocialLinks() {
  return (
    <div className={styles.container}>
      {socials.map((name, idx) => (
        <a
          key={name}
          className={styles.link}
          style={{ '--delay': `${idx * 0.1}s` } as React.CSSProperties}
        >
          {name}
        </a>
      ))}
    </div>
  )
}

// app/_components/SocialLinks.module.css
.link {
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: var(--delay, 0s);
  opacity: 0;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Pattern 4: GPU Acceleration with `will-change` and `transform`

**What:** Use `will-change` property judiciously on elements with complex animations, and prefer `transform`/`opacity` for all animations.

**When to use:** For high-frequency animations (hover effects, continuous loops) on specific elements. NOT for every animated element.

**Trade-offs:**
- **Pros:** Offloads to GPU, smoother 60fps performance, prevents layout thrashing
- **Cons:** Overuse increases memory consumption, can hurt mobile battery life

**Example:**
```css
/* styles/gpu-acceleration.css - Global utilities */

/* Use ONLY on elements with continuous/complex animations */
.will-change-transform {
  will-change: transform;
}

.will-change-opacity {
  will-change: opacity;
}

/* Remove after animation completes */
.animation-complete {
  will-change: auto;
}

/* GPU-friendly animation - ALWAYS use transform, not top/left */
@keyframes float-correct {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* ANTI-PATTERN - forces layout recalc */
@keyframes float-wrong {
  0%, 100% { top: 0; }
  50% { top: -20px; }
}
```

**Best Practice:** Apply `will-change` in CSS on `:hover` or when animation class is added. Remove when animation ends.

### Pattern 5: Client Component for Navigation Active State

**What:** Use a Client Component for navigation to detect active route with `usePathname`.

**When to use:** When navigation needs to highlight the current page.

**Trade-offs:**
- **Pros:** Works with Next.js App Router, clean separation of concerns
- **Cons:** Navigation becomes Client Component (but this is unavoidable for active state)

**Example:**
```typescript
// app/_components/Navigation.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navigation.module.css'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        className={pathname === '/' ? styles.active : ''}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={pathname === '/about' ? styles.active : ''}
      >
        About
      </Link>
      <Link
        href="/cool-stuff"
        className={pathname === '/cool-stuff' ? styles.active : ''}
      >
        Cool Stuff
      </Link>
    </nav>
  )
}
```

## Data Flow

### Page Rendering Flow

```
User navigates to /about
    ↓
Next.js App Router matches route
    ↓
Server renders page component (app/about/page.tsx)
    ↓
Root layout wraps content (app/layout.tsx)
    ↓
Client hydrates interactive components (Navigation, animations)
    ↓
CSS animations trigger on page load
```

### Animation Lifecycle

```
Component mounts
    ↓
CSS class applied (e.g., .fade-in)
    ↓
Browser checks will-change property
    ↓
Element promoted to GPU layer (if transform/opacity)
    ↓
Animation runs at 60fps
    ↓
Animation completes → remove will-change (if applied dynamically)
```

### Key Data Flows

1. **Navigation State**: `usePathname()` hook → Navigation component → Active class applied
2. **Animation Triggers**: Component mount → CSS animation class → Keyframes execute
3. **Staggered Effects**: Array index → CSS custom property `--delay` → calc() → Individual delays

## Performance Optimization Strategies for Heavy Animations

### Critical Performance Guidelines

| Strategy | Implementation | Why |
|----------|---------------|-----|
| **GPU-Only Properties** | Only animate `transform` and `opacity` | Runs on compositor thread, avoids layout/paint |
| **Stagger Animation Start** | Use `animation-delay` with `calc()` | Prevents frame drops when 10+ animations start simultaneously |
| **Selective `will-change`** | Apply only to 2-3 most complex animations | Promotes to GPU layer but costs memory |
| **Remove `will-change` After** | Set to `auto` when animation ends | Frees GPU memory, prevents resource exhaustion |
| **Avoid Animating Layout Properties** | Never animate `width`, `height`, `top`, `left` | Forces layout recalculation every frame |
| **Use CSS over JS** | Prefer CSS animations/transitions | Native browser code is faster than JS libraries |

### Animation Budget for Portfolio Site

**Acceptable Simultaneous Animations:**
- **Continuous (always running)**: 3-5 max (gradient backgrounds, subtle floats)
- **On-load (triggered by page navigation)**: 8-12 max (fade-ins, slide-ins)
- **Hover effects**: Unlimited (triggered individually by user)

**Stagger Pattern for 10+ Elements:**
```css
/* Instead of all starting at once */
.item {
  animation: fadeIn 0.4s ease-out;
  animation-delay: calc(var(--index) * 0.05s); /* 50ms stagger */
}
```

### CSS Animation Organization for Performance

```css
/* styles/animations/critical.css - Load first */
/* High-priority, above-fold animations */
@keyframes hero-title-slide {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* styles/animations/decorative.css - Load second */
/* Lower-priority decorative effects */
@keyframes background-shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* styles/animations/interactive.css - Load last */
/* Hover effects, user-triggered animations */
@keyframes button-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| **3 pages, hardcoded content** | Current structure is perfect. No database, no API routes needed. |
| **Add blog (10-50 posts)** | Add `app/blog/[slug]/page.tsx` with MDX or JSON data. Still no backend needed. |
| **Add CMS (100+ pages)** | Integrate headless CMS (Sanity, Contentful). Add API routes in `app/api/`. |

### Scaling Priorities (if expanding beyond portfolio)

1. **First bottleneck**: Too many simultaneous animations on initial page load
   - **Fix**: Implement progressive enhancement - core content first, animations stagger in

2. **Second bottleneck**: CSS file size grows with many animation effects
   - **Fix**: Split CSS into critical (inline) and deferred (load after paint)

For a 3-page portfolio with hardcoded content, scaling is NOT a concern. The architecture is appropriately sized.

## Anti-Patterns to Avoid

### Anti-Pattern 1: Animating Non-GPU Properties

**What people do:** Animate `width`, `height`, `top`, `left`, `margin` thinking it's equivalent to `transform`.

**Why it's wrong:** These properties trigger layout recalculation on every frame (60 times per second). Causes jank, stuttering, dropped frames.

**Do this instead:** Use `transform: translateX()`, `translateY()`, `scale()` for movement and sizing.

```css
/* ❌ WRONG - Causes layout thrashing */
@keyframes slide-wrong {
  from { left: -100px; }
  to { left: 0; }
}

/* ✅ CORRECT - GPU accelerated */
@keyframes slide-correct {
  from { transform: translateX(-100px); }
  to { transform: translateX(0); }
}
```

### Anti-Pattern 2: Global `will-change: transform` on Everything

**What people do:** Apply `will-change: transform` to all animated elements thinking "more GPU = more performance."

**Why it's wrong:** Each element promoted to GPU layer consumes memory. On mobile, 20+ promoted elements = browser crashes or stuttering.

**Do this instead:** Apply `will-change` only to 2-3 most complex/continuous animations. Remove after animation ends.

```css
/* ❌ WRONG - Every element promoted to GPU */
.animated {
  will-change: transform;
  animation: bounce 1s;
}

/* ✅ CORRECT - Only continuous animations */
.background-gradient {
  will-change: background-position; /* Continuous, complex */
  animation: gradient-shift 10s infinite;
}

.fade-in-item {
  /* No will-change - one-time animation, not complex enough */
  animation: fadeIn 0.5s;
}
```

### Anti-Pattern 3: Putting All Components in `app/` Without Private Folders

**What people do:** Create `app/components/Navigation.tsx` thinking it's like Pages Router.

**Why it's wrong:** In App Router, folders in `app/` become routes unless prefixed with `_`. `app/components/` would create a `/components` route.

**Do this instead:** Use `app/_components/` (underscore prefix) for shared components.

```bash
# ❌ WRONG - Creates unwanted routes
app/
├── components/
│   └── Navigation.tsx    # Accessible at /components (broken route)
└── page.tsx

# ✅ CORRECT - Private folder, not routable
app/
├── _components/
│   └── Navigation.tsx    # Not routable
└── page.tsx
```

### Anti-Pattern 4: Co-locating Animation CSS in Every Component

**What people do:** Define the same `@keyframes` in multiple component CSS Modules.

**Why it's wrong:** Duplicates keyframes in the bundle, increases CSS size, harder to maintain.

**Do this instead:** Extract shared keyframes to `styles/animations/shared.css` or use `:global()` in one central file.

```css
/* ❌ WRONG - Duplicated in 5 different component CSS files */
/* GlitterCard.module.css */
@keyframes shimmer { ... }

/* PulsingButton.module.css */
@keyframes shimmer { ... } /* Same animation, duplicated */

/* ✅ CORRECT - Centralized shared animations */
/* styles/animations/shared.css */
@keyframes shimmer { ... }

/* Import in global CSS or use in components */
/* Components reference by name */
.card {
  animation: shimmer 2s infinite;
}
```

### Anti-Pattern 5: JavaScript Animation Libraries for Simple Effects

**What people do:** Install Framer Motion or GSAP for simple fade-in/slide-in animations.

**Why it's wrong:** Adds 20-50KB to bundle, requires JavaScript execution, slower than native CSS, more complex to maintain.

**Do this instead:** Use CSS animations for 90% of portfolio effects. Reserve JS libraries for complex sequencing (if needed).

```typescript
// ❌ WRONG - 45KB library for a fade-in
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  Content
</motion.div>

// ✅ CORRECT - 0KB CSS solution
<div className={styles.fadeIn}>
  Content
</div>

/* styles/animations.css */
.fadeIn {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Exception:** Use GSAP/Framer Motion if you need complex timeline sequencing (multiple animations coordinated) or scroll-triggered animations with precise control. For simple on-load effects, CSS is always faster.

## Recommended Build Order (Component Dependencies)

### Phase 1: Foundation (Build FIRST)
1. **Root Layout** (`app/layout.tsx`)
   - Sets up `<html>`, `<body>`, global meta tags
   - Imports global CSS
   - No dependencies

2. **Global CSS** (`app/globals.css`)
   - Tailwind imports (if using)
   - CSS reset/normalize
   - Root-level custom properties (colors, timings)
   - No dependencies

3. **Navigation Component** (`app/_components/Navigation.tsx`)
   - Client Component using `usePathname()`
   - Depends on: Root Layout to import it
   - Include basic styling (no animations yet)

### Phase 2: Pages (Build SECOND)
4. **Home Page** (`app/page.tsx`)
   - Simplest page structure
   - Hardcoded content only
   - No components yet - just placeholder content

5. **About Page** (`app/about/page.tsx`)
   - Similar structure to Home
   - Hardcoded content

6. **Cool Stuff Page** (`app/cool-stuff/page.tsx`)
   - Similar structure to Home
   - Hardcoded content

**Why this order?** Validates routing, navigation, and layout structure work before adding complex components.

### Phase 3: Reusable Components (Build THIRD)
7. **Social Links Component** (`app/_components/SocialLinks.tsx`)
   - Self-contained, no dependencies
   - Add to Home page first

8. **Card Component** (`app/_components/Card.tsx`)
   - Generic wrapper for content sections
   - Used on multiple pages

9. **Button Component** (`app/_components/Button.tsx`)
   - Generic interactive element
   - Used across pages

### Phase 4: Decorative Components (Build FOURTH)
10. **Animated Decoration Component** (`app/_components/AnimatedDecor.tsx`)
    - Non-critical visual flourish
    - Add last since it's purely decorative

### Phase 5: Animation Layer (Build LAST)
11. **Animation Utilities** (`styles/animations/`)
    - Extract shared keyframes
    - Add GPU acceleration helpers
    - Implement staggering logic

12. **Component-Specific Animations**
    - Add animation CSS to individual components
    - Apply `will-change` selectively
    - Test performance with all animations running

**Why this order?** Content and functionality first, decorative animations last. If animations cause performance issues, they're isolated and easy to adjust.

### Dependency Graph

```
Root Layout (no dependencies)
    ↓
Navigation Component (needs layout to import it)
    ↓
Page Components (need layout + navigation)
    ↓
Reusable UI Components (need pages to use them)
    ↓
Decorative Components (need pages to use them)
    ↓
Animation Styles (need components to apply to)
```

**Critical Path:** Root Layout → Navigation → Pages → Components → Animations

## Integration Points

### Next.js 15 App Router Integration

| Feature | Integration Pattern | Notes |
|---------|---------------------|-------|
| **Routing** | File-system based in `app/` | Folders = routes, `page.tsx` makes route public |
| **Layouts** | `layout.tsx` at each level | Root layout required, nests automatically |
| **Navigation** | `<Link>` from `next/link` | Client-side navigation with prefetching |
| **Active Routes** | `usePathname()` in Client Component | Navigation must be Client Component |
| **Metadata** | `metadata` export in layouts/pages | SEO meta tags |

### CSS Integration

| Approach | When to Use | Integration |
|----------|-------------|-------------|
| **CSS Modules** | Component-specific styles and animations | Import `.module.css` files in components |
| **Global CSS** | Root-level styles, Tailwind imports | Import in `app/layout.tsx` |
| **Tailwind Utility Classes** | Quick styling, responsive layouts | Use `className="..."` directly |

### Animation Integration Points

| Animation Type | Where Defined | Where Applied |
|---------------|---------------|---------------|
| **Shared Keyframes** | `styles/animations/shared.css` | Import globally in `app/globals.css` |
| **Component-Specific** | `Component.module.css` | Import in component file |
| **GPU Utilities** | `styles/gpu-acceleration.css` | Import globally, apply classes selectively |
| **Stagger Delays** | CSS custom properties in component | Set `style={{ '--delay': '...' }}` in JSX |

## TypeScript Considerations

### Component Props Typing

```typescript
// app/_components/SocialLinks.tsx
interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
}

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
}

export default function SocialLinks({ links, className }: SocialLinksProps) {
  // Component implementation
}
```

### CSS Module Types

TypeScript automatically generates types for CSS Modules. No manual typing needed:

```typescript
// TypeScript knows styles.card, styles.title, etc. exist
import styles from './Card.module.css'

<div className={styles.card}>
  <h2 className={styles.title}>Title</h2>
</div>
```

### CSS Custom Properties in JSX

```typescript
// Type assertion needed for CSS variables
<div
  style={{ '--delay': '0.2s' } as React.CSSProperties}
  className={styles.animated}
>
  Content
</div>
```

## Sources

### Official Next.js Documentation (HIGH Confidence)
- [Next.js 15 Project Structure](https://nextjs.org/docs/app/getting-started/project-structure)
- [Next.js 15 Routing](https://nextjs.org/docs/app/building-your-application/routing)
- [Next.js 15 Layouts and Pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages)
- [Next.js 15 CSS](https://nextjs.org/docs/app/getting-started/css)

### Architecture Best Practices (MEDIUM-HIGH Confidence)
- [The Ultimate Guide to Organizing Your Next.js 15 Project Structure](https://www.wisp.blog/blog/the-ultimate-guide-to-organizing-your-nextjs-15-project-structure)
- [Best Practices for Organizing Your Next.js 15 2025](https://dev.to/bajrayejoon/best-practices-for-organizing-your-nextjs-15-2025-53ji)
- [Next js Folder Structure Best Practices for Scalable Applications (2026 Guide)](https://www.codebydeep.com/blog/next-js-folder-structure-best-practices-for-scalable-applications-2026-guide)
- [Modern Full Stack Application Architecture Using Next.js 15+](https://softwaremill.com/modern-full-stack-application-architecture-using-next-js-15/)
- [Next.js Architecture in 2026](https://www.yogijs.tech/blog/nextjs-project-architecture-app-router)

### CSS Animation Performance (MEDIUM-HIGH Confidence)
- [How We Boosted React Website Performance with Heavy Animations Using Next.js](https://medium.com/@ssd_design/how-to-improve-performance-on-a-react-website-with-heavy-design-and-animation-ae7d655da349)
- [How to Keep Rich Animations Snappy in Next.js 15](https://medium.com/@thomasaugot/how-to-keep-rich-animations-snappy-in-next-js-15-46d90f503b15)
- [CSS in 2026: 7 Features That Let the Browser Do the Work](https://www.southwellmedia.com/blog/css-2026-7-features-that-let-browsers-do-the-work)
- [CSS / JS Animation Trends 2026: Motion & Micro-Interactions](https://webpeak.org/blog/css-js-animation-trends/)

### GPU Acceleration (HIGH Confidence)
- [CSS GPU Acceleration: will-change & translate3d Guide](https://www.lexo.ch/blog/2025/01/boost-css-performance-with-will-change-and-transform-translate3d-why-gpu-acceleration-matters/)
- [Boosting Web Performance With CSS GPU Acceleration](https://www.testmu.ai/blog/css-gpu-acceleration/)
- [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/)

### CSS Modules & Animation Organization (MEDIUM Confidence)
- [Keyframe animations in CSS Modules](https://gravitydept.com/blog/keyframe-animations-in-css-modules)
- [CSS Architecture: CSS File Organization](https://www.sitepoint.com/css-architecture-css-file-organization/)
- [Streamline Your Frontend Workflow with Next.js CSS Modules](https://www.dhiwise.com/post/nextjs-css-modules-best-practice)

---
*Architecture research for: Next.js 15 Portfolio with Heavy CSS Animations*
*Researched: 2026-02-04*
