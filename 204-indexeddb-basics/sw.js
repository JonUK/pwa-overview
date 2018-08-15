
const STATIC_CACHE_NAME = 'static-v1.2';

const pathsToCache = [
  '/204-indexeddb-basics/', // The server is serving up index.html as the default document
  '/204-indexeddb-basics/data-access.js',
  '/204-indexeddb-basics/idb.js',
  '/204-indexeddb-basics/main.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        return cache.addAll(pathsToCache);
      })
  );
});

self.addEventListener('fetch', event => {

  const url = event.request.url;

  if (url.startsWith('http://localhost:3000')) {
    return; // Don't attempt to handle API requests
  }

  event.respondWith(

    caches.match(event.request) // Try and find the item in any of the caches
      .then(response => {

        if (response) { // If we have a cache hit return it else get from the network
          return response;
        }

        return fetch(event.request);
      })
  );
});







