---
version: 1.0.0
name: RS-Writing-Instruments-Design-System
source: VoltAgent/awesome-design-md
description: Bespoke luxury writing instrument atelier aesthetic. Dark obsidian canvas, champagne gold metallic accents, editorial serif typography, frosted glass depth, high-precision product cards, and smooth motion physics.

colors:
  primary: "#D4AF37"          # Champagne Gold
  primary-hover: "#F3E5AB"    # Bright Gold
  primary-muted: "#A68A2D"    # Antique Gold
  accent-nib: "#E5C158"       # Polished Brass/Nib Gold
  canvas-dark: "#090A0F"      # Deep Obsidian Canvas
  surface-card: "#12141D"     # Frosted Dark Card
  surface-card-hover: "#1A1D2B" # Card Hover Surface
  surface-glass: "rgba(18, 20, 29, 0.75)" # Glassmorphism Surface
  border-hairline: "rgba(212, 175, 55, 0.2)" # Subtle Gold Border
  border-gold-glow: "rgba(212, 175, 55, 0.4)" # Active Glow Border
  ink-primary: "#F8F9FA"      # Crisp White Text
  ink-secondary: "#9CA3AF"    # Slate Muted Text
  ink-tertiary: "#6B7280"     # Dim Subtext

typography:
  display-hero:
    fontFamily: "'Playfair Display', 'Cinzel', serif"
    fontSize: "3.5rem"
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: "-0.02em"
  heading-section:
    fontFamily: "'Playfair Display', 'Cinzel', serif"
    fontSize: "2.25rem"
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: "-0.01em"
  subheading:
    fontFamily: "'Inter', sans-serif"
    fontSize: "0.875rem"
    fontWeight: "600"
    letterSpacing: "0.15em"
    textTransform: "uppercase"
  body-text:
    fontFamily: "'Inter', sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"

layout_grid:
  container-max-width: "1280px"
  section-spacing: "6rem"
  card-border-radius: "12px"
  badge-border-radius: "9999px"

motion:
  hover-transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
  card-scale-hover: "scale(1.02)"
  scroll-behavior: "smooth"

components:
  product-card:
    background: "surface-card"
    border: "border-hairline"
    hover-border: "border-gold-glow"
    shadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
    hover-shadow: "0 20px 40px -15px rgba(212, 175, 55, 0.15)"
  buttons:
    primary-gold:
      bg: "linear-gradient(135deg, #D4AF37 0%, #AA7C11 100%)"
      text: "#090A0F"
      fontWeight: "600"
      boxShadow: "0 4px 20px rgba(212, 175, 55, 0.25)"
    outline-gold:
      bg: "transparent"
      border: "1px solid #D4AF37"
      text: "#D4AF37"
      hover-bg: "rgba(212, 175, 55, 0.1)"

rules:
  - "Always maintain dark luxury contrast with gold foil accents."
  - "All product cards must utilize subtle gold glowing borders on hover."
  - "Interactive buttons should feel tactile with soft ambient gold shadow drop."
  - "Use clear typography hierarchy: Serif for luxury headings, Sans-serif for UI & telemetry."
---

# DESIGN.md - RS Writing Instruments

Welcome to the **DESIGN.md** specification for **RS Writing Instruments**, structured according to the **VoltAgent/awesome-design-md** standard.

## 1. Design Vision
RS Writing Instruments represents the pinnacle of handcrafted pen luxury, bespoke nib craftsmanship, and fountain pen artistry. The visual identity reflects a dark obsidian gallery canvas illuminated by polished brass and warm champagne gold accents.

## 2. Color Palette & Tokens
- **Canvas Obsidian**: `#090A0F` (Base dark aesthetic)
- **Champagne Gold**: `#D4AF37` (Primary brand accent & gold foil highlights)
- **Antique Gold**: `#A68A2D` (Secondary muted gold)
- **Surface Obsidian**: `#12141D` (Card & modal dark glass surface)
- **Hairline Gold Border**: `rgba(212, 175, 55, 0.2)`
- **Gold Glow**: `rgba(212, 175, 55, 0.4)`

## 3. Typography Rules
- **Serif Display**: `Playfair Display` or `Cinzel` for high-craft luxury titles.
- **Modern UI Sans**: `Inter` for clean technical specifications, product pricing, and navigation controls.
- **Badges & Eyebrows**: Uppercase with `letter-spacing: 0.15em`.

## 4. Component Rules
- **Product Cards**: High contrast obsidian tiles with subtle 1px hairline gold borders, smooth transform lift on hover, and soft gold ambient box-shadow.
- **Glassmorphism Panels**: `backdrop-blur-md` with `rgba(18, 20, 29, 0.8)` background for luxury overlays and detail modals.
- **CTA Buttons**: Metallic gold gradient backgrounds (`linear-gradient(135deg, #D4AF37 0%, #AA7C11 100%)`) with dark obsidian text (`#090A0F`).

## 5. Agent Instructions
When building or modifying UI components in this workspace, refer to this `DESIGN.md` file to ensure visual consistency, luxury color harmony, and responsive perfection.
