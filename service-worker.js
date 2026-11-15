/* NC Progress V8 service worker: notification taps open the matching app screen. */
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const data = event.notification.data || {};
  const fallback = self.registration.scope;
  let target = fallback;
  try {
    const candidate = new URL(data.url || fallback, self.registration.scope);
    const scope = new URL(self.registration.scope);
    if (candidate.origin === scope.origin && candidate.href.startsWith(scope.href)) {
      target = candidate.href;
    }
  } catch (_) {}

  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of windows) {
      if (new URL(client.url).origin === self.location.origin) {
        try {
          const navigated = await client.navigate(target);
          return (navigated || client).focus();
        } catch (_) {
          return client.focus();
        }
      }
    }
    if (self.clients.openWindow) return self.clients.openWindow(target);
  })());
});
