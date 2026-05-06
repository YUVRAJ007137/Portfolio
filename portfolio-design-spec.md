# YUVRAJ CHAUDHARI — PORTFOLIO DESIGN SPECIFICATION

**Status:** Ready for Code Generation  
**Version:** 1.0  
**Last Updated:** May 2026  
**Design Language:** Earthy Modern + Vibe Coder Aesthetic

---

## 🎨 COLOR PALETTE

### Primary Colors
- **Warm Black (Background)**: `#0D0D0B`
- **Dark Olive (Surface)**: `#1A1A14`
- **Sage Green (Accent)**: `#4ADE80`
- **Cream (Text)**: `#FAFAF0`

### Secondary
- **Muted Cream (Secondary Text)**: `#B8B8A8`
- **Frosted Dark (Nav BG on scroll)**: `#1A1A1499` (semi-transparent dark olive)

### Overlays & Accents
- Noise grain overlay: 5% opacity on all sections
- Sage green glow on hover: `#4ADE8044`

---

## 🔤 TYPOGRAPHY

| Use | Font | Weight | Size | Line Height |
|---|---|---|---|---|
| Hero Name | Bebas Neue | 700 | 72px (clamp: 48-96) | 1.1 |
| Section Titles | Satoshi | 700 | 32px | 1.2 |
| Body Text | Satoshi | 400 | 16px | 1.6 |
| Terminal/Mono | JetBrains Mono | 400 | 14px | 1.5 |
| Tags/Labels | Satoshi | 500 | 12px | 1 |

---

## 📐 LAYOUT STRUCTURE

### Full Page Layout
```
┌─────────────────────────────────────────┐
│  NAV BAR (sticky, 60px height)          │
├─────────────────────────────────────────┤
│                                         │
│  01. HERO SECTION (full screen height)  │
│                                         │
├─────────────────────────────────────────┤
│  02. STATS TICKER                       │
├─────────────────────────────────────────┤
│  03. EXPERIENCE TIMELINE                │
├─────────────────────────────────────────┤
│  04. PROJECTS TERMINAL                  │
├─────────────────────────────────────────┤
│  05. ABOUT STATEMENT                    │
├─────────────────────────────────────────┤
│  06. CONTACT SECTION                    │
├─────────────────────────────────────────┤
│  FOOTER (minimal)                       │
└─────────────────────────────────────────┘
```

### Responsive Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

---

## 🖼️ SECTION 01 — HERO

### Layout
- **Full screen height** (100vh)
- **Full bleed background image** — your silhouette photo
- **Content overlay** — bottom-left or center
- **Seamless merge** — image dark background matches page background `#0D0D0B`

### Hero Content
```
YUVRAJ CHAUDHARI
─────────────────────────
Full-Stack Developer · Nashik
```

**Styling:**
- Name: Bebas Neue, 72px, cream color
- Divider line: sage green, 2px height, full width of name
- Subtitle: Satoshi, 16px, muted cream
- **Blinking cursor** after name in sage green (blink every 1s)

### Animations
- Name character **types in** on page load (0.1s per character)
- Divider line **slides in from left** (0.8s delay)
- Subtitle **fades up** (1.2s delay)
- Cursor **blinks continuously** in sage green

### Noise Overlay
- 5% opacity grain texture across entire hero
- Subtle, adds film-like quality

### Mobile Behavior
- Text size scales down
- Content centers on screen
- No cursor animation (optional, performance)

---

## 🧭 NAVIGATION BAR

### Position
- **Fixed to top**
- **Height**: 60px
- **Padding**: 20px horizontal

### Content Layout
```
[YC Initials]  ........................  [Work] [About] [Contact]
```

**Left side:**
- Your initials "YC" — Satoshi Bold, 18px, cream
- No border, no background initially

**Right side (spaced 40px apart):**
- "Work" — links to projects section
- "About" — links to about section
- "Contact" — links to contact section
- Font: Satoshi, 14px, muted cream

### Interactions
- **On scroll down** (any amount):
  - Background becomes `#1A1A1499` (frosted dark olive)
  - Creates a subtle visual separation
  
- **Active section**:
  - Current link **underline grows from center** in sage green
  - Underline width: 30px, height: 2px
  - Animation: 0.3s ease-out

- **Hover on links**:
  - Text color → **sage green**
  - Smooth transition: 0.2s

### Mobile
- Remove right links, use **hamburger menu** (3 lines icon)
- Menu opens as **full-screen overlay** with centered links
- Links larger, spaced vertically

---

## 📊 SECTION 02 — STATS TICKER

### Layout
- **Full width horizontal strip**
- **Height**: 80px
- **Background**: dark olive `#1A1A14`
- **Padding**: 20px

### Content
```
18 Repos  ·  React + Python  ·  Nashik, IN  ·  Open to Work
```

**Styling:**
- Font: Satoshi, 16px, cream
- Separators: sage green dots (5px diameter)
- Numbers/key info: sage green, bold

### Animation (Desktop)
- Scrolls **horizontally** on infinite loop
- Speed: 30px/s
- Pause on hover

### Animation (Mobile)
- **Single line**, centered
- No scroll, visible at once
- Font size: 12px

---

## ⏳ SECTION 03 — EXPERIENCE TIMELINE

### Concept
A **horizontal sage green line** that extends rightward as user scrolls down. Experience cards appear above/below at data points.

### Line Behavior
- Starts at **left edge**, width 0
- Extends rightward based on **scroll progress**
- Line thickness: 3px
- Color: sage green `#4ADE80`
- Tip has **glowing arrowhead** (grows to 15px width)

### Experience Dots
- **Dots placed along the line** at equal intervals
- Dot size: 12px diameter, sage green
- On hover: dot expands to 16px
- Glow effect on hover: `#4ADE8044`

### Experience Cards
```
┌─────────────────────────────┐
│  Tech Desk, Thane           │
│  Full-Stack Developer       │
│  2024 — Present             │
└─────────────────────────────┘
```

**Card Styling:**
- Background: transparent (no box)
- Left border: 3px sage green
- Text: cream, monospace font
- Padding: 12px left, 20px vertical
- Font size: 14px

**Positioning:**
- Cards alternate: above line, below line, above, below...
- Distance from line: 40px vertical
- Horizontal center-aligned with dot

### Animations
- **On scroll**: line extends rightward
- **When line reaches dot**: card **fades up** (0.4s ease-out)
- **On scroll back up**: cards fade out, line retracts

### Data Structure
```javascript
const experiences = [
  {
    year: "2024 — Present",
    company: "Tech Desk, Thane",
    role: "Full-Stack Developer",
    tags: ["React", "Python", "Firebase"],  // optional
    note: "Building scalable web solutions"  // optional
  },
  {
    year: "2023",
    company: "Freelance",
    role: "Web Developer",
    tags: ["React", "JavaScript"],
    note: "Project-based development"
  }
  // Add more experiences here
]
```

### Mobile Behavior
- Line becomes **vertical** (top to bottom)
- Extends downward as user scrolls
- Cards positioned left/right alternating
- Dots still spaced equally

---

## 🚀 SECTION 04 — PROJECTS TERMINAL

### Layout
- **Dark olive background** `#1A1A14`
- **Padding**: 60px
- **Border-radius**: 12px
- **Monospace font**: JetBrains Mono, 14px
- **Text color**: sage green

### Terminal Window Style
```bash
~/yuvraj/projects $ ls -al

★ violence-detection-system    [TypeScript]  AI threat detection web app
▸ text-to-image-generator      [Python]      Local Stable Diffusion tool
▸ tech-desk-landing            [React]       Production landing page

~/yuvraj/projects $ _
```

### Visual Elements
- **Prompt line** at top: `~/yuvraj/projects $ ls -al`
- **Project lines**: each one is a row
- **Icons**: 
  - `★` = pinned/featured projects (appear first)
  - `▸` = regular projects
- **Stack tags**: `[TypeScript]` in brackets, sage green
- **Description**: one-line, muted cream color
- **Cursor** at bottom: blinking `_` in sage green

### Project Row Structure
```
★ project-name          [Stack]    Description of what it does
```

**Spacing:**
- Project name: 30 characters max
- Stack tag: 15 characters max
- Description: remaining space
- Columns align vertically

### Interactions
- **Hover on project row**:
  - Background becomes slightly lighter `#252520`
  - Text becomes brighter cream
  - Show a **subtle right arrow** (→) at end
  - Transition: 0.2s

- **Click on project**:
  - Open project link (if provided)
  - Or show a **modal with full details**

### Data Structure
```javascript
const projects = [
  {
    name: "Violence Detection System",
    stack: "TypeScript",
    description: "Real-time AI threat detection web app",
    link: "https://github.com/...",        // optional
    pin: true                              // featured
  },
  {
    name: "Text-to-Image Generator",
    stack: "Python",
    description: "Local Stable Diffusion v1 implementation",
    link: "https://github.com/...",
    pin: false
  }
  // Add more projects here
]
```

### Sorting Rules
- **Pinned projects** (`pin: true`) always appear first
- Pinned projects get `★` icon
- Unpinned projects get `▸` icon
- Within each group, sort by recency (newest first) or manual order

### Mobile Behavior
- **Font size**: 12px
- **Padding**: 20px
- **Columns collapse** to fit: project name + stack only
- Description hidden (show on tap)

---

## 👤 SECTION 05 — ABOUT STATEMENT

### Layout
- **Full width**
- **Centered content**
- **Padding**: 80px horizontal
- **Background**: warm black `#0D0D0B`

### Content
```
I ship ideas as products.
Fast, functional, and real.
```

**Styling:**
- Font: Satoshi Bold, 32px, cream
- Line height: 1.4
- Text-align: center
- Two lines only (keep it short)

### Skills Tags Below
- Small spacing: 20px from statement
- Tags displayed inline, wrapping
- Background: dark olive `#1A1A14`
- Text: cream, 12px
- Padding: 6px 12px each tag
- Border-radius: 20px
- Separator dots: sage green

Example:
```
React  ·  Python  ·  JavaScript  ·  TypeScript  ·  Firebase
```

### Data Structure
```javascript
const skills = ["React", "Python", "JavaScript", "TypeScript", "Firebase"]
```

### Mobile
- Font size: 24px
- Padding: 40px horizontal
- Tags stack vertically if needed

---

## 📬 SECTION 06 — CONTACT

### Layout
- **Full width**
- **Centered**
- **Padding**: 100px vertical, 40px horizontal
- **Background**: warm black `#0D0D0B`

### Content
```
Got an idea?

[ Let's build it → ]
```

**Text:**
- "Got an idea?" — Satoshi, 24px, cream

**Button:**
- Text: "Let's build it →"
- Background: sage green `#4ADE80`
- Text color: warm black (inverted)
- Font: Satoshi Bold, 16px
- Padding: 14px 28px
- Border-radius: 6px
- Hover: 
  - Background slightly darker sage green
  - Scale up to 1.05
  - Transition: 0.2s

**Email Link (optional):**
- Below button (optional)
- Text: your email
- Color: muted cream
- Hover: sage green

### Data
```javascript
const contact = {
  email: "yuvrajsc42@gmail.com",
  cta: "Let's build it →"
}
```

### Mobile
- Font sizes scale down 20%
- Button full width on mobile

---

## 🔗 FOOTER

### Layout
- **Minimal**
- **Padding**: 20px
- **Text-align**: center
- **Border-top**: 1px solid `#1A1A14`

### Content
```
© 2026 Yuvraj Chaudhari  ·  Made with curiosity
```

**Styling:**
- Font: Satoshi, 12px, muted cream
- Links: sage green on hover

---

## 🎬 GLOBAL ANIMATIONS & INTERACTIONS

### Page Load
1. Noise grain appears (instant)
2. Hero name types in (2s total)
3. Divider line slides in (0.8s, with 0.5s delay)
4. Subtitle fades up (0.4s, with 1.2s delay)
5. Nav bar appears (fades in 0.5s)

### Scroll Behaviors
- **Nav bar**: gains frosted background on any downward scroll
- **Timeline line**: extends rightward smoothly (linked to scroll progress)
- **Timeline cards**: fade in as line reaches their dot
- **Project rows**: hover effect highlights the row
- **Smooth scroll**: all page transitions smooth (not jarring)

### Cursor/Pointer
- Custom cursor on interactive elements (optional — pointer on hover)
- Project rows show **right arrow** on hover

### Touch Devices
- Hover effects become tap effects
- Terminal cards show full description on tap
- Smoother animations (reduce motion if preferred)

---

## 📱 RESPONSIVE DESIGN

### Mobile-First Approach
- **Base design**: 320px width
- **Tablet breakpoint**: 768px
- **Desktop breakpoint**: 1024px

### Key Changes
| Element | Mobile | Tablet | Desktop |
|---|---|---|---|
| Hero text size | 48px | 64px | 72px |
| Section padding | 20px | 40px | 60px |
| Terminal font | 12px | 13px | 14px |
| Timeline | Vertical | Horizontal | Horizontal |
| Nav | Hamburger | Hamburger | Horizontal |
| Stats ticker | Single line | Single line | Scrolling |

---

## 🖼️ ASSET REQUIREMENTS

### Images
- **Hero silhouette photo**: desk_background.png (already provided)
  - Must be **full bleed**, dark background
  - Recommended: 1920x1080 minimum

### Fonts (Load from Google Fonts or local)
- Bebas Neue
- Satoshi (or alternative modern sans)
- JetBrains Mono

### No Additional Assets Needed
- All decorative elements use pure CSS/SVG
- Color palette is CSS variables

---

## 🔧 TECHNICAL REQUIREMENTS

### Framework
- **React** recommended for dynamic content
- State management for timeline scroll progress
- Component-based (reusable slots)

### Performance
- Lazy load images
- Optimize animations (use CSS transforms, not layout shifts)
- Debounce scroll events for timeline
- Minimize network requests

### Accessibility
- Semantic HTML
- Alt text for images
- Keyboard navigation support
- Color contrast meets WCAG AA

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 📋 DATA ENTRY GUIDE

When ready to add content, only modify these sections:

```javascript
// ✏️ EDIT THESE ARRAYS

const experiences = [ /* Add experience slots here */ ]
const projects = [ /* Add project slots here */ ]
const skills = [ /* Add skill tags here */ ]
const contact = { /* Add contact info here */ }
```

**Everything else is auto-handled by the design system.**

---

## ✅ DESIGN CHECKLIST

Before code generation:
- [ ] All colors locked (Earthy Modern palette)
- [ ] Typography paired (Bebas Neue + Satoshi + JetBrains Mono)
- [ ] Hero layout defined (full bleed silhouette)
- [ ] Navigation finalized (minimal, frosted on scroll)
- [ ] Timeline concept clear (horizontal line, scroll-linked)
- [ ] Terminal projects defined (monospace, icons, hover)
- [ ] About section simple (2 lines + tags)
- [ ] Contact minimal (button + email)
- [ ] Data structures defined (slot-based)
- [ ] Mobile behavior specified (responsive breakpoints)
- [ ] Animations documented (easing, timing, triggers)

---

## 🎯 DESIGN PHILOSOPHY

This portfolio embodies **Vibe Coder** energy:
- **No fluff**: Every pixel serves a purpose
- **Fast shipping**: Simple, slot-based data entry
- **Modern tools**: Terminal aesthetic, monospace fonts
- **Warmth**: Earthy colors, human silhouette
- **Confidence**: Minimal copy, strong statements
- **Real**: Shows actual projects, not tutorials

**"I ship ideas as products. Fast, functional, and real."**

---

**Ready for code generation.** 🚀
