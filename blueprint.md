# Project Overview
A framework-less web project using HTML, CSS, and JavaScript, designed to demonstrate modern web standards and responsive design.

# Project Features
- Modern Theme Switcher (Dark/Light mode).
- Partnership Inquiry Form with Formspree integration.
- Responsive design using CSS Baseline features.
- High-quality aesthetics with OKLCH colors and soft shadows.

# Current Implementation Plan: Responsive Form Optimization
The goal is to ensure the partnership form and overall layout are fully responsive and visually appealing on all devices, especially mobile.

## Plan & Steps
1.  **Refine Global Spacing**: Use logical properties (e.g., `padding-block`, `margin-inline`) and `clamp()` for responsive spacing.
2.  **Optimize Form Layout**: Use CSS Grid and Container Queries to adjust the form layout based on its container size.
3.  **Mobile-First Adjustments**: 
    - Adjust `body` padding for smaller viewports.
    - Scale down `form-container` padding on mobile.
    - Ensure the floating theme toggle doesn't obstruct content.
4.  **Typography Scaling**: Fine-tune font sizes for headings and labels using responsive units.
5.  **Validation**: Test the layout across different screen widths (mobile, tablet, desktop) using the browser preview.
