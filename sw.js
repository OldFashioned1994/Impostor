/* Service worker: caparazón offline + caché de fuentes para los 3 juegos.
   App shell cache-first; fuentes de Google con runtime cache. */
const CACHE = 'dibuja-impostor-v2';
const SHELL = ['./', './index.html', './mimica.html', './pictionary.html'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(SHELL.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (_) { return; }

  // Fuentes de Google: cache-first en runtime (para que offline conserve la tipografía)
  if (url.hostname.indexOf('fonts.googleapis.com') >= 0 || url.hostname.indexOf('fonts.gstatic.com') >= 0) {
    e.respondWith(
      caches.open(CACHE).then(c => c.match(req).then(hit =>
        hit || fetch(req).then(resp => { try { c.put(req, resp.clone()); } catch (_) {} return resp; }).catch(() => hit)
      ))
    );
    return;
  }

  // Mismo origen: cache-first con fallback a red y, sin red, a la app shell
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(req).then(hit =>
        hit || fetch(req).then(resp => {
          const cp = resp.clone();
          caches.open(CACHE).then(c => { try { c.put(req, cp); } catch (_) {} });
          return resp;
        }).catch(() => caches.match('./'))
      )
    );
  }
});
