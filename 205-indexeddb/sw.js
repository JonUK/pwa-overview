
const IMAGE_CACHE_NAME = 'cat-photos-v1.1';

const pathsToCache = [
  '/205-indexeddb/', // The server is serving up index.html as the default document
  '/205-indexeddb/css/styles.css',

  '/205-indexeddb/js/data-access.js',
  '/205-indexeddb/js/photo.js',
  '/205-indexeddb/js/photos-listing.js',
  '/205-indexeddb/js/sw-register.js',

  '/205-indexeddb/images/cat1.jpg',
  '/205-indexeddb/images/cat2.jpg',
  '/205-indexeddb/images/cat3.jpg',
  '/205-indexeddb/images/cat4.jpg'
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






