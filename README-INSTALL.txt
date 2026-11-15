NC PROGRESS V5.9 — INSTALL / UPDATE

Files: upload every file in this ZIP to the root of your GitHub Pages repository, replacing the existing files. Keep the two PNG icons and service-worker.js alongside index.html and manifest.webmanifest.

INSTALLABILITY FIX
V5.7's index.html did not link its web app manifest. V5.8 added the manifest link, icon metadata, and a versioned service-worker cache. After deployment, open the HTTPS GitHub Pages URL in Chrome.

PROFILE
Display name and profile picture are stored in this browser and included in JSON/sync exports. Pictures are resized before storage.

BACKUP / TRANSFER
A weekly on-device safety snapshot is stored locally where browser storage allows. Export JSON backup or Export sync file to move data. Importing a backup replaces the local dataset, so deletions are mirrored.

IMPORTANT CLOUD SYNC LIMITATION
Google Drive automatic cloud sync is NOT connected in this build. A real Google Drive connection requires an OAuth client ID, authorized origin/redirect configuration, and a secure sign-in/token flow. This build does not fake cloud sync.

INTRO / REFRESH
The Nafi × CGPT → NC Progress opening animation plays once on first launch. Normal refreshes do not replay it and the current menu remains saved. Clearing site data/reinstalling resets the first-launch experience.

DATA SAFETY
Before replacing app files, export a JSON backup from Settings. Replacing code files on GitHub Pages does not itself erase browser localStorage, but clearing site data or changing the origin can.


V5.9 DAY BOUNDARY
The app day changes at 4:00 AM local Bangladesh time (Asia/Dhaka). The period from 12:00 AM through 3:59 AM is treated as the previous app day. Tasks, Salah marks, and daily statistics use this same date boundary.

V5.9 INSIGHTS & ANIMATION
The Insights page has been rewritten in beginner-friendly language. Each chart explains what it shows and includes an expandable “More info” section. Charts animate when drawn (bars rise, the trend line reveals, and the task ring fills). Cards and interactive controls have subtle motion. The mobile bottom navigation no longer repeats the NC logo, and all pages have extra scroll clearance so the final content is not hidden behind the fixed menu.
