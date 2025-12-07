# Design Guidelines: Gamal Tarek Portfolio Website

## Design Approach: Reference-Based (Modern Developer Portfolio)

Drawing inspiration from contemporary developer portfolios like those on Awwwards, combined with Linear's clean typography and Stripe's refined spacing. The design emphasizes visual storytelling through a timeline-based narrative, showcasing professional growth and projects with impact.

**Core Principles:**
- Bold typography with dramatic scale contrast
- Generous whitespace to create breathing room
- Strong visual hierarchy through size and positioning
- Subtle, purposeful animations that enhance rather than distract

---

## Typography System

**Font Families:**
- Primary: 'Inter' (Google Fonts) - All UI elements, body text
- Display: 'Space Grotesk' (Google Fonts) - Headlines, hero text

**Hierarchy:**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl, font-bold
- Section Headers: text-4xl md:text-5xl, font-bold
- Subsection Headers: text-2xl md:text-3xl, font-semibold
- Card Titles: text-xl font-semibold
- Body Text: text-base md:text-lg, leading-relaxed
- Small Text/Labels: text-sm, font-medium

---

## Layout System

**Spacing Primitives:** Tailwind units 4, 8, 12, 16, 20, 24
- Section padding: py-20 md:py-32
- Card spacing: p-8
- Element margins: mb-4, mb-8, mb-12
- Grid gaps: gap-8 md:gap-12

**Container Strategy:**
- Max-width sections: max-w-7xl mx-auto px-6 md:px-8
- Full-bleed elements: w-full (for hero, contact map)
- Content blocks: max-w-4xl for text-heavy sections

**Grid Patterns:**
- Skills: grid-cols-2 md:grid-cols-4
- Services: grid-cols-1 md:grid-cols-3
- Portfolio: grid-cols-2 md:grid-cols-3 (masonry-style)
- Timeline: Single column with left-aligned content

---

## Component Library

### Navigation
Sticky header with blur backdrop, horizontal navigation with smooth scroll anchors. Logo left, nav links center/right, theme toggle button (sun/moon icon from Heroicons). Mobile: hamburger menu with slide-in panel.

### Hero Section
Full viewport height (min-h-screen) with centered content. Large display headline with typing animation effect for role/title. Subheading with brief introduction (2-3 lines). Primary CTA button "Hire Me" with blur backdrop (backdrop-blur-md bg-white/10) and secondary "Download CV" button. Decorative gradient orbs in background (absolute positioned, blur-3xl).

**Hero Image:** Large, professional headshot or workspace photo positioned right side on desktop (50% width), full-width on mobile. Image should have subtle overlay gradient.

### About Section
Two-column layout: Left - Personal info list (Birthday, Age, Email, Phone, Location, Availability) in clean dl/dd format. Right - Skills progress bars with animated fill on scroll. Bio paragraph max-w-2xl. CTA buttons below.

### Experience & Education Timeline
Vertical timeline with alternating left/right cards on desktop, single column on mobile. Timeline line runs down center/left. Each card includes:
- Year badge (pill-shaped, absolute positioned)
- Title (text-xl font-semibold)
- Duration subtitle
- Description paragraph
- Decorative dot connector to timeline

### Services Section
3-column grid of service cards. Each card:
- Icon (Heroicons outline) at top, size-12
- Service title
- Brief description (2-3 lines)
- Hover: subtle lift transform and shadow increase

### Portfolio/Projects Section
Masonry-style grid gallery. Each project card:
- Project thumbnail image (16:10 aspect ratio)
- Overlay on hover with project title and view icon
- Lightbox/modal on click for larger view
- Filter buttons above grid (All, Web, Design, etc.)

**Portfolio Images:** 9 project screenshots/thumbnails displaying previous work. Images should be high-quality, consistent aspect ratio. Use actual project screenshots from the GitHub repo images.

### Contact Section
Split layout: Left - Contact form (Name, Email, Subject, Message fields with modern input styling, outlined focus states). Right - Contact info cards (Phone, Email, Location, Website) each with icon and value. Below: Embedded Google Map (rounded corners, h-96). Social media icons footer.

### Footer
Simple centered layout with:
- Email and phone links
- Social icons (Facebook, Twitter, Instagram) from Heroicons
- Theme color customization UI (small color palette selector)
- Copyright text

---

## Images Strategy

**Required Images:**
1. **Hero Image:** Professional portrait or workspace shot (right side, 50% width desktop)
2. **Portfolio Gallery:** 9 project thumbnails (use existing images from /img/1.png through /img/9.png)
3. **Map:** Embedded Google Maps iframe for Egypt location

**Image Treatment:**
- Border radius: rounded-lg for cards, rounded-2xl for hero
- Hover effects: scale-105 transform on portfolio items
- Loading: Add subtle skeleton/placeholder during load

---

## Accessibility & Interactions

- Focus states: ring-2 ring-offset-2 for all interactive elements
- Smooth scroll behavior: scroll-smooth on html
- Skip to content link for keyboard navigation
- Form validation: inline error messages with red text and icon
- Loading states: spinner icons for form submission
- Dark mode: Implement with class="dark" toggle, use dark: variants throughout

---

## Critical Text Corrections

Fix these in English content:
- "Welcom" → "Welcome"
- "Develo|" → "Developer"
- "wxperience" → "experience"
- "experties" → "expertise"
- "webside" → "website"
- "desiner" → "designer"
- "Heir Me" → "Hire Me"