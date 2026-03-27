# Project Overview
A framework-less web project using HTML, CSS, and JavaScript, designed to demonstrate modern web standards and responsive design.

# Project Features
- Simple "Hello World" index page.
- Basic structure with `index.html`, `style.css`, and `main.js`.
- Connected to GitHub repository `runningbong/product-initiative-work.git`.

# Current Implementation Plan: Dark and White Mode
The goal is to implement a seamless theme switching mechanism between Dark and White modes.

## Plan & Steps
1.  **Define CSS Variables**: In `style.css`, define `--bg-color`, `--text-color`, and other theme-related variables for both `:root` (White mode default) and a `.dark-theme` class.
2.  **Add Theme Toggle UI**: Add a button to `index.html` that allows users to switch between themes.
3.  **Implement Toggle Logic**: In `main.js`, add event listeners to the toggle button to switch the `.dark-theme` class on the `body` element.
4.  **Persist Theme Preference**: Use `localStorage` in `main.js` to remember the user's theme preference across sessions.
5.  **Refine Visuals**: Use modern CSS features like `:has()`, Container Queries, and `oklch` color spaces as recommended in `GEMINI.md`.
6.  **Verify & Deploy**: Test the toggle locally, then commit and push to the GitHub repository. Finally, initialize and deploy to Firebase Hosting if requested.
