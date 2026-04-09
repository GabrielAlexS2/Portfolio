# Design System: Gabriel Marques Portfolio
**Project ID:** 17072148938641750593

## 1. Visual Theme & Atmosphere
The design atmosphere is a sophisticated, editorial-style portfolio with high contrast and stark minimalism. It balances striking typography with generous whitespace, creating a "premium digital editorial" vibe. The aesthetic uses distinct intersectional sections spanning dark and vibrant backgrounds to maintain visual interest. It conveys a highly professional, modern, and slightly avant-garde tone, perfect for a high-end creative or frontend developer.

## 2. Color Palette & Roles
*   **Deep Onyx (#0A0A0A):** The core background color. Used for the majority of the site to create depth and contrast, serving as a canvas for typography and vibrant accents.
*   **Vibrant Emerald (#22C55E):** The primary brand and accent color. Used for the hero section background, primary action buttons, hover states, and graphic accents (like underlines and borders). It injects energy and a "tech" feel into the editorial layout.
*   **Pure White (#FFFFFF):** Used for primary text, headings, and outlines on dark backgrounds.
*   **Muted Platinum (rgba(255, 255, 255, 0.7) to text-gray-400):** Used for secondary text, descriptions, subtitles, and less prominent information to establish visual hierarchy without cluttering.

## 3. Typography Rules
*   **Primary Typeface (Sans-Serif):** `Inter` (weights: 300, 400, 500, 600). Used for all body copy, navigation, micro-copy, and structural text. It provides absolute clarity and modernism.
*   **Display Typeface (Serif):** `Space Grotesk` (weight: 700). Used exclusively for massive, editorial-style headings, numbers in lists, and high-impact statements. It features tight letter-spacing (`-0.05em`) and condensed line-height (`0.85`) for a bold, poster-like appearance.
*   **Text Effects:** Extensive use of uppercase tracking (letter-spacing) for small labels and navigation to mimic print design. "Outline text" (`-webkit-text-stroke`) is used as a graphic element for massive background typography and layered headings.

## 4. Component Stylings
*   **Buttons:** Either solid Dark/White capsules (`rounded-full`) or vibrant Emerald. They are completely pill-shaped with generous horizontal padding (`px-8 py-4`). Hover states include subtle scaling (`hover:scale-105`) and transition effects.
*   **Images & Media Containers:** Feature subtly rounded corners (`rounded-eight` or 8px). Often include grayscale filters (`grayscale`) that only reveal color on interaction, reinforcing the sophisticated editorial tone.
*   **Cards/Containers:** Generally avoid physical "cards" with borders or backgrounds, preferring implied structural containers through grid alignment and whitespace. When containers are used (like in testimonials), they adopt the Emerald background with rounded corners (`rounded-eight`).
*   **Lines & Dividers:** Very fine, subtle borders (`border-t border-gray-800` or `border-white/20`) are used to separate sections and list items cleanly.

## 5. Layout Principles
*   **Grid Structure:** Relies heavily on a strict 12-column grid (`grid-cols-12`) for asymmetric, magazine-like layouts. Elements deliberately span specific columns to create tension and balance.
*   **Generous Spacing:** Uses massive vertical padding between sections (`py-32 md:py-48`) to let the typography breathe.
*   **Interactivity:** Employs subtle reveal-on-scroll animations (fading up), custom hover underlines that grow from the center, and continuous marquee scrolling for background text. Layout elements often use blending modes (`mix-blend-difference`) for the fixed navigation to ensure legibility across sections.

## 6. Design System Notes for Stitch Generation
When generating screens for this interface:
- **Platform:** Web, Desktop-first
- **Theme:** Dark, editorial, high-contrast, minimalist
- **Background:** Deep Onyx (#0A0A0A)
- **Primary Accent:** Vibrant Emerald (#22C55E) for call-to-actions, hero sections, and highlights.
- **Text Primary:** Pure White (#FFFFFF)
- **Text Secondary:** Muted Platinum/Gray for body text that needs lower hierarchy.
- **Typography Layout:** Emphasize massive, bold `Space Grotesk` headers paired with clean `Inter` body text. Use uppercase with wide letter-spacing for small functional labels.
- **Components:** Pill-shaped buttons (fully rounded). Images should have 8px border-radius (`rounded-eight`) and often start grayscale.
- **Structure:** Use 12-column asymmetric grids. Maximize whitespace. Use fine 1px borders for separation instead of heavy drop shadows or card backgrounds.
