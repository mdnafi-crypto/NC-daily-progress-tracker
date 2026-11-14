NC Progress App V5.6
====================

Install/update on Android:
1. Export a JSON backup from Settings before replacing an existing deployment.
2. Extract this ZIP.
3. Upload all six files to the root of your existing GitHub Pages repository, replacing the previous versions.
4. Commit the changes and open the HTTPS app. If the old screen remains, close the installed PWA and reopen it after the service worker updates.

V5.6 visual update:
- Restores the original reference UI palette: green #16a34a, emerald #15803d, slate surfaces, and the original green/blue/amber/purple metric accents.
- Rebuilds the dashboard around the original four KPI cards: Completion Rate, Consistency Score, Productivity Streak, and Time Ratio.
- Restores the green-to-emerald motivational banner, large task list, and task-status doughnut chart with planned/completed/pending summaries.
- Keeps the NC logo in the menu, sliding blue-light active navigation indicator, and floating + shortcut.
- Keeps the V5.2 functional features: task timer/check-in, actual-time presets/custom time, Personal Emergency with optional explanation and 8-hour editing, recurring-task duplicate prevention, weekly/15-day/month/custom analytics, Salah and optional Chasht tracking, notifications, calendar/history, dark mode, JSON backup/restore and CSV export.

Data remains stored locally in this browser on this device. Keep regular JSON backups. Browser notifications are most reliable while the app is open; Android may restrict background activity.

V5.6 refresh behavior: the app remembers the last open menu page and selected date. Refreshing reloads saved data and returns to that same page. The NC intro animation appears only on the first launch, not on every refresh.

V5.6 menu update: replaced the text-symbol navigation marks with custom inline SVG icons inspired by the supplied reference image: Today (sun/check), Plan (checklist), Insights (bulb/chart), Calendar, History (stopwatch/trend), and Settings (gear/wrench). Icons inherit the active menu color and scale for mobile.
V5.6 current-task check-in: on app launch (and when the app becomes visible again), NC Progress checks the phone's local clock and today's pending tasks. If the current time falls inside a task's scheduled start/deadline window, it opens that task's progress check-in popup. Tasks without a start time are not auto-opened. If multiple tasks overlap, the earliest-starting matching task is shown first. The same task popup is not repeatedly reopened within 10 minutes after it was shown.
