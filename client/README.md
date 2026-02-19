# Sk Salone - Beauty Salon Website

## Project Overview
A modern, responsive beauty salon website built with React, Vite, and Tailwind CSS. The design focuses on a premium, elegant aesthetic with gold accents and script typography, tailored for a high-end beauty fashion experience.

## Features Implemented

### Navigation Bar
- **Fixed Positioning**: Sticky navbar (`fixed top-0`) ensures navigation is always accessible while scrolling.
- **Responsive Design**: Fully responsive navigation with a mobile menu overlay.
- **Custom Social Icons**: Unique "cross-wrapper" design for social media links (Facebook, Instagram, LinkedIn) with gold accents.
- **Styling**: Tailored layout with refined padding and shadow for visual separation.

### Hero Section
- **Elegant Typography**: "Welcome" text styled with the "Great Vibes" script font.
- **Visual Depth**: Background image overlay with subtle opacity to add texture without distracting from the content.
- **Contact Info**: Custom-designed "Call Us" and "Mail Us" icon boxes with decorative gold outer lines and `react-icons`. The phone icon is mirrored for a unique stylistic touch.
- **Carousel**: Auto-sliding image gallery showcasing salon visuals.
- **Layout**: Optimized height (`calc(100vh - 15px)`), with left-aligned text and content for a balanced look.

### About Section
- **Typography**: "About Us" heading consistently uses the "Great Vibes" script font.
- **Layout**: Two-column responsive grid featuring a main image, contact info, and business statistics.
- **Design Consistency**: Contact information box matches the width of the main image for perfect alignment. Phone icon is mirrored to match the Hero section style.
- **Interactive Elements**: "Read More" button with a consistent gold background style.

### Service Section
- **Grid Layout**: Responsive grid displaying services (Haircut, Makeup, Manicure, etc.) with custom icons.
- **Interactive Cards**: Hover effects on service cards for better user engagement.
- **Icons**: Uses `lucide-react` for modern, clean service iconography.

### Price Section
- **Split Layout**: A striking two-column design with a gold left panel and dark right panel.
- **Pricing List**: Clear, elegant list of services with images and prices.
- **Responsive**: Adapts seamlessly from desktop split-screen to mobile vertical layout.

### Gallery Section
- **Grid Layout**: A responsive image grid displaying the salon's best work.
- **Hover Effects**: Images scale up on hover for an interactive feel.
- **Integration**: Seamlessly integrated into the navigation menu under "Pages".

### Team / Members Section
- **Grid Layout**: Responsive grid displaying team members with high-quality images.
- **Interactive Cards**: Smooth zoom effect on hover for member images.
- **Info Overlay**: Elegant overlay card with glassmorphism effect displaying member name, role, and social links.
- **Social Icons**: Custom "framed" social icons consistent with the Navbar style.

### Clients / Testimonials Section
- **Carousel**: Interactive client testimonials slider.
- **Design**: Clean, modern cards highlighting client feedback and ratings.

### Blog Section
- **Grid Layout**: Responsive grid showcasing recent blog posts with images and excerpts.
- **Styling**: Distinctive gold background (`#C5A059`) for text content blocks, creating a checkerboard visual with images.
- **Interactive Elements**: Custom outlined "Read More" buttons with precise cursor behavior (`cursor: pointer`) and hover effects.

### Footer
- **Comprehensive Layout**: A rich 4-column footer (Brand, Links, Links, Newsletter).
- **Dark Theme**: Deep charcoal background (`#191919`) with gold text (`#c79a5b`) for a premium look.
- **Social Integration**: Custom "framed" social icons with gold background and black icons, matching the Service section style.
- **Interactive Elements**: Hover effects on links (changing from gold to white) and a functional-looking newsletter input.

## Technologies Used
- **Frontend Framework**: React 18+
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (v4) & Custom CSS variables
- **Icons**: React Icons (`react-icons/fa`, `react-icons/bs`), `lucide-react`
- **Fonts**: Google Fonts ("Great Vibes", "Allura", "Playfair Display")

## Design System

### Package Details
- **Name**: `client` (Sk Salone Frontend)
- **Version**: `0.0.0`
- **Type**: Module

### Color Palette
| Variable | Hex Code | Usage |
| :--- | :--- | :--- |
| `--primary` | `#c79a5b` | Main accent, buttons, icons (Gold) |
| `--secondary` | `#191919` | Footer background, dark elements (Charcoal) |
| `--btn-gold` | `#c79a5b` | Button background |
| `Background` | `#f5f1ed` | Section backgrounds (Light Beige) |
| `Card Bg` | `#e9e6e2` | Card/Box backgrounds |

### Typography
- **Script Font**: `'Great Vibes', cursive` (Used for "Welcome", "About Us", decorative headings)
- **Serif Font**: `'Playfair Display', serif` (Used for main headings like "Beauty Salon")
- **Body Font**: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif` (Used for standard text)

## Setup & Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Recent Updates
- **Navigation Overhaul**:
    - **Fixed Navbar**: The navigation bar is now fixed to the top of the viewport with a subtle shadow, ensuring constant access to menu links.
    - **Smooth Scrolling**: Implemented hash-based navigation (`/#about`, `/#service`, etc.) allowing smooth scrolling to specific sections on the home page instead of reloading routes.
    - **Scroll Padding**: Added scroll padding to ensure section headings are not hidden behind the fixed navbar when navigating.
- **Global Theming**: Consolidated all color and font variables into `index.css` (`:root`) for consistent design tokens across the app.
- **Footer Implementation**: Added a full-featured footer with responsive design and custom social icons.
- **Clients Page**: Added a Testimonials/Clients section to the home page and as a standalone route.
- **Hero & About Refinements**:
    - **Alignment**: Shifted Hero text and contact info to left-alignment to create a more structured layout.
    - **Visual Consistency**: Unified the "Call" and "Mail" icon styles across Hero and About sections, including mirroring the phone icon (`scaleX(-1)`) to match design specifications.
    - **Sizing**: Adjusted About section contact box to match the width of the main image.
- **Blog Section**: Updated the "Read More" button to ensure correct cursor (`pointer`) behavior for better UX.
- **UI Refinements (Latest)**:
    - **Footer**: Adjusted horizontal padding (`px-18`) for the left column to improve visual balance on large screens.
    - **About Section**: Optimized vertical padding and grid gaps to remove excessive white space on mobile devices.
    - **Price Section**: Refined background colors (Gold `#c29355` & Black) and layout consistency for the split-screen design.
