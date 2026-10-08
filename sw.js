// Geofit Logistics Hub — minimal service worker.
// Its only job is to let Chrome/Edge offer "Install app".
// It deliberately caches NOTHING: every open fetches the latest version
// of the site straight from GitHub, so updates always show up on refresh.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (event) { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (event) { event.respondWith(fetch(event.request)); });
