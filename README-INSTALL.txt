# Daily Progress Tracker — Installable PWA

## What's included
- `index.html`: the tracker app
- `manifest.webmanifest`: app name, icon, and home-screen display settings
- `service-worker.js`: offline app-shell caching
- `icons/`: app icons

Your tasks and settings are stored in this browser on this device. They are not automatically synced to another phone or browser. Use the app's export feature to keep backups.

## Install it on Android
A Progressive Web App must be served from **HTTPS** (or localhost). Opening `index.html` directly from a file manager will let you use the page, but browser installation and offline caching will not work.

### Easiest route: GitHub Pages
1. Extract this ZIP.
2. Sign in to GitHub and create a new public repository (for example, `daily-progress-tracker`).
3. Upload all the extracted files and the `icons` folder, keeping the folder structure.
4. In the repository, open **Settings → Pages**.
5. Under the build/deployment section, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. Open the published HTTPS address in Chrome on your Android phone.
7. Tap **Install app** if it appears, or Chrome's **⋮ menu → Install app / Add to Home screen**.

You can also host the same folder on another HTTPS static host. Do not rename or separate the manifest, service worker, or icons.

## Important
- This ZIP does not publish the app online for you; you choose and control the hosting account.
- Keep the exported JSON backup somewhere safe before clearing browser data or changing phones.
