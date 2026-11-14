NC PROGRESS V5.8 — INSTALL / UPDATE

Files: upload every file in this ZIP to the root of your GitHub Pages repository, replacing the existing files. Keep the two PNG icons and service-worker.js alongside index.html and manifest.webmanifest.

INSTALLABILITY FIX
V5.7's index.html did not link its web app manifest. V5.8 adds the manifest link, icon metadata, and a versioned service-worker cache. After deployment, open the HTTPS GitHub Pages URL in Chrome.

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
