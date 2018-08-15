
const IMAGE_CACHE_NAME = 'cat-photos-v1.1';

const pathsToCache = [
  '/204-indexeddb/', // The server is serving up index.html as the default document
  '/204-indexeddb/js/sw-register.js',
  '/204-indexeddb/css/styles.css',

  '/204-indexeddb/images/cat1.jpg',
  '/204-indexeddb/images/cat2.jpg',
  '/204-indexeddb/images/cat3.jpg',
  '/204-indexeddb/images/cat4.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(IMAGE_CACHE_NAME)
      .then(cache => {
        return cache.addAll(pathsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
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







