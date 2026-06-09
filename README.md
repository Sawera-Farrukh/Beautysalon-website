# Photographer Style Template

A high-end, dark-themed single-page website template with dramatic animations, built for photographers, creative studios, and visual artists. Features GSAP-powered scroll animations, 3D transforms, particle effects, custom cursor, and a noise texture overlay.

## Features

- Full-screen hero with chromatic aberration effect
- GSAP ScrollTrigger-powered scroll animations throughout
- 3D card transforms and parallax scrolling
- Interactive custom cursor (desktop)
- Canvas-based floating particle field
- Noise texture overlay for cinematic feel
- Typewriter, blur-reveal, clip-path, and elastic animations
- Floating image preview on service hover
- Animated price counter
- Marquee text in footer with highlighted characters
- Fully responsive with mobile menu
- Reduced motion support

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 3
- GSAP (ScrollTrigger)
- Lucide React (icons)
- Geist font (Google Fonts)

## Project Structure

```
src/
  config.ts           # All content configuration (edit this file)
  App.tsx             # Root component
  App.css             # Default Vite styles (unused)
  index.css           # Global styles, CSS variables, animations
  main.tsx            # Entry point
  sections/
    Hero.tsx          # Full-screen hero with parallax
    About.tsx         # About section with dual images + author bio
    Works.tsx         # Portfolio grid with 3D card hover
    Services.tsx      # Service list with floating image preview
    FAQ.tsx           # Accordion FAQ with alternating layout
    Testimonials.tsx  # 3D testimonial cards
    Pricing.tsx       # Pricing plans with animated counter
    Blog.tsx          # Blog posts with clip-path reveal
    Contact.tsx       # Contact form with diagonal divider
    Footer.tsx        # Footer with marquee and link columns
  components/
    Navigation.tsx    # Fixed navbar with mobile menu
    CustomCursor.tsx  # Custom red cursor (desktop only)
    ParticleField.tsx # Canvas particle animation
    ui/               # shadcn/ui components
  hooks/
    useInView.ts      # Intersection Observer hook
    useMousePosition.ts # Mouse position tracker
    use-mobile.ts     # Mobile breakpoint detection
  lib/
    utils.ts          # Utility functions
public/
  images/             # Place your images here
```

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Edit `src/config.ts` with your content

3. Add images to `public/` directory

4. Start development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```
