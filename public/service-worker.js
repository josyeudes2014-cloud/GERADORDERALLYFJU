const CACHE_VERSION = 'v6';
const CACHE_NAME = `rally-cache-${CACHE_VERSION}`;
const PRECACHE_URLS = [
    '/',
    '/index.html',
    '/offline.html',
    '/manifest.json',
    '/pwa_icon.png'
];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil((async () => {
        const keys = await caches.keys();
        await Promise.all(keys.filter(k => k.startsWith('rally-cache-') && k !== CACHE_NAME).map(k => caches.delete(k)));
        await self.clients.claim();
    })());
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);

    if (url.origin !== self.location.origin) {
        return;
    }

    if (url.pathname.startsWith('/admin/') || url.pathname.endsWith('/js/config.js')) {
        event.respondWith((async () => {
            try {
                return await fetch(req, { cache: 'no-store' });
            } catch (_) {
                const cache = await caches.open(CACHE_NAME);
                const cached = await cache.match(req);
                return cached || Response.error();
            }
        })());
        return;
    }

    if (req.mode === 'navigate') {
        event.respondWith((async () => {
            try {
                const preload = await event.preloadResponse;
                if (preload) return preload;
                const network = await fetch(req);
                return network;
            } catch (_) {
                const cache = await caches.open(CACHE_NAME);
                const cached = await cache.match('/offline.html');
                return cached || Response.error();
            }
        })());
        return;
    }

    event.respondWith(
        caches.match(req).then(cached => cached || fetch(req).then(resp => {
            const respClone = resp.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, respClone)).catch(() => {});
            return resp;
        }).catch(() => cached))
    );
});

self.addEventListener('push', event => {
    try {
        const data = event.data ? event.data.json() : {};
        const title = (data.notification && data.notification.title) || 'Notificação';
        const options = {
            body: (data.notification && data.notification.body) || '',
            icon: '/pwa_icon.png',
            badge: '/pwa_icon.png',
            data: data.fcmOptions || {}
        };
        event.waitUntil(self.registration.showNotification(title, options));
    } catch (_) {}
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
});
