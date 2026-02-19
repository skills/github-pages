const CACHE = 'tetris-v1';

// Chemins relatifs par rapport à la position du SW
const ASSETS = [
  new URL('./tetris.html',    self.location).href,
  new URL('./icons/icon.svg', self.location).href,
  new URL('./manifest.json',  self.location).href,
];

// Installation : mise en cache des assets principaux
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activation : nettoyage des anciens caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch : cache-first pour les ressources locales
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const swBase = new URL('./', self.location).href;

  // Ressources du même "dossier" que le SW → cache first
  if (e.request.url.startsWith(swBase) || url.origin === self.location.origin) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(resp => {
          if (resp && resp.ok) {
            const clone = resp.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return resp;
        });
      })
    );
    return;
  }

  // Ressources externes (polices Google…) → network first, cache en fallback
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
