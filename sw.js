const CACHE = 'tetris-v1';
const ASSETS = [
  '/tetris.html',
  '/icons/icon.svg',
  '/manifest.json',
];

// Installation : on met les assets en cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activation : on supprime les anciens caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch : cache-first pour les assets locaux, network-first pour le reste (polices…)
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Assets locaux → cache first
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(resp => {
          if (resp.ok) {
            const clone = resp.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return resp;
        });
      })
    );
    return;
  }

  // Ressources externes (polices Google) → network first, fallback cache
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
