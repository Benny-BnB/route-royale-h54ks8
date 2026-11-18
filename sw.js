// sw.js : service worker, pour que l'app marche hors ligne après un premier chargement.
// IMPORTANT : change le numéro de VERSION à chaque mise en ligne, sinon les téléphones gardent l'ancienne version.
const VERSION = 'ma-non-v4';

const FILES = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'content.js',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
  'assets/stop-01.svg',
  'assets/stop-02.svg',
  'assets/stop-03.svg',
  'assets/stop-04.svg',
  'assets/stop-05.svg',
  'assets/stop-06.svg',
  'assets/stop-07.svg',
  'assets/stop-08.svg',
  'assets/stop-09.svg',
  'assets/stop-10.svg',
  'assets/stop-11.svg',
  'assets/stop-12.svg',
  'assets/stop-13.svg',
  'assets/stop-14.svg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Réponse immédiate depuis le cache (rapide, même sans réseau), et mise à jour en arrière-plan.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const cached = await cache.match(req, { ignoreSearch: true });
    const refresh = fetch(req)
      .then((res) => { if (res && res.ok) cache.put(req, res.clone()); return res; })
      .catch(() => null);
    if (cached) { e.waitUntil(refresh); return cached; }
    const res = await refresh;
    if (res) return res;
    if (req.mode === 'navigate') { const home = await cache.match('./'); if (home) return home; }
    return Response.error();
  })());
});
