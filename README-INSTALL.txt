DAILY PROGRESS TRACKER — VERSION 3

Upload all five files from this folder to the ROOT of your existing GitHub Pages repository, replacing the existing files:
- index.html
- manifest.webmanifest
- service-worker.js
- icon-192.png
- icon-512.png

Commit to main. Then open the GitHub Pages website in Chrome and refresh.

NEW IN V3
- Progress check-in presets: 50%, 70%, and 100% of planned minutes.
- Custom actual minutes remain editable.
- Live preview shows actual minutes and percentage of planned time.
- Optional browser notifications for scheduled task start and deadline.
- Enable notifications in Settings > Task notifications.

NOTIFICATION LIMITATION
This PWA checks task times while the app page is running. Android/Chrome may suspend the page and timers after the app is closed or the phone is in battery-saving mode. Reliable reminders while fully closed require a push-notification server/backend or a native Android app with scheduled alarms. Do not rely on this version as an alarm clock.

DATA
Tasks remain stored locally in browser storage on each device. Updating these files on the same website origin should preserve existing local data, but export a JSON backup before updating as a precaution.
