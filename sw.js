// Offline support for Oliver and the Ghosts.
// The game is saved on the device the first time it loads, so the Home Screen app opens
// without internet. When online, the newest version is fetched first, so updates still arrive.

const CACHE = 'oliver-v2';
const CORE = [
  './',
  'index.html',
  'manifest.webmanifest',
  'apple-touch-icon.png',
  'icon-192.png',
  'icon-512.png'
];

// The rounded title font comes from Google Fonts; save it at install time too, so even the very
// first offline launch shows it. (If that fails, the iPad's own rounded font is used instead.)
const FONT_CSS = 'https://fonts.googleapis.com/css2?family=Grandstander:wght@700;900&display=swap';
async function saveFont(cache) {
  try {
    const res = await fetch(FONT_CSS);
    if (!res.ok) return;
    const css = await res.clone().text();
    await cache.put(FONT_CSS, res);
    const files = [...css.matchAll(/url\((https:[^)]+)\)/g)].map(m => m[1]);
    await Promise.all(files.map(u => fetch(u).then(r => r.ok ? cache.put(u, r) : null).catch(() => null)));
  } catch (e) { /* the fallback font is fine */ }
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(CORE).then(() => saveFont(cache)))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // The rounded title font: keep a copy once it has loaded.
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(cache => cache.put(req, copy));
        return res;
      }))
    );
    return;
  }

  // The game's own files: try the network first (to pick up updates), fall back to the saved copy.
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(req).then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put(req, copy));
        }
        return res;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('index.html')))
    );
  }
});
