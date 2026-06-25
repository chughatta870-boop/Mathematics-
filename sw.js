// ============================================================
//  SERVICE WORKER — sw.js
//  Mathematics PWA App — Class 9 & 10
// ============================================================

const CACHE_NAME = 'math-app-v1.0.0';
const OFFLINE_URL = './index.html';

// Files to cache on install
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&family=JetBrains+Mono:wght@400;600&family=Inter:wght@300;400;600;700&display=swap',
];

/* ── INSTALL ── */
self.addEventListener('install', event => {
  console.log('[SW] Installing Math App Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      console.log('[SW] Installation complete');
      return self.skipWaiting(); // Activate immediately
    }).catch(err => {
      console.error('[SW] Cache failed:', err);
    })
  );
});

/* ── ACTIVATE ── */
self.addEventListener('activate', event => {
  console.log('[SW] Activating Math App Service Worker...');
  event.waitUntil(
    Promise.all([
      // Delete old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(name => name !== CACHE_NAME)
            .map(name => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      }),
      // Claim all clients immediately
      self.clients.claim()
    ])
  );
  console.log('[SW] Activation complete');
});

/* ── FETCH (Cache First, then Network) ── */
self.addEventListener('fetch', event => {
  const { request } = event;

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip chrome-extension and other non-http requests
  if (!request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(request).then(cachedResponse => {
      if (cachedResponse) {
        // Return cached version
        // Also update cache in background (stale-while-revalidate)
        event.waitUntil(
          fetch(request)
            .then(networkResponse => {
              if (networkResponse && networkResponse.ok) {
                caches.open(CACHE_NAME).then(cache => {
                  cache.put(request, networkResponse.clone());
                });
              }
            })
            .catch(() => {}) // Ignore network errors during background update
        );
        return cachedResponse;
      }

      // Not in cache — try network
      return fetch(request)
        .then(networkResponse => {
          // Don't cache error responses
          if (!networkResponse || !networkResponse.ok) {
            return networkResponse;
          }

          // Cache successful network responses
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseToCache);
          });

          return networkResponse;
        })
        .catch(() => {
          // Network failed — serve offline fallback for navigation requests
          if (request.mode === 'navigate') {
            return caches.match(OFFLINE_URL);
          }
          // For other requests, return a simple offline response
          return new Response('آفلائن — براہ کرم انٹرنیٹ سے منسلک ہوں', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({ 'Content-Type': 'text/plain; charset=utf-8' })
          });
        });
    })
  );
});

/* ── BACKGROUND SYNC ── */
self.addEventListener('sync', event => {
  if (event.tag === 'sync-progress') {
    console.log('[SW] Background sync: progress data');
  }
});

/* ── PUSH NOTIFICATIONS ── */
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || '📐 ریاضی یاددہانی';
  const options = {
    body: data.body || 'آج کی ریاضی مشق کریں!',
    icon: './icons/icon-192.png',
    badge: './icons/icon-72.png',
    vibrate: [200, 100, 200],
    data: { url: data.url || './' },
    actions: [
      { action: 'open', title: 'کھولیں' },
      { action: 'dismiss', title: 'بعد میں' }
    ]
  };
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

/* ── NOTIFICATION CLICK ── */
self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.action === 'dismiss') return;

  const urlToOpen = event.notification.data?.url || './';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(windowClients => {
        // Focus existing window if open
        for (const client of windowClients) {
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        // Open new window
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

/* ── MESSAGE HANDLER ── */
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

console.log('[SW] Math App Service Worker loaded — Version:', CACHE_NAME);
