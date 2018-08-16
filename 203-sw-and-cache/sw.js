
const STATIC_CACHE_NAME = 'static-v1.1';

const pathsToCache = [
  '/203-sw-and-cache/', // The server is serving up index.html as the default document
  '/203-sw-and-cache/dog-pics.html', // A second page on the website
  '/203-sw-and-cache/main.js',
  '/203-sw-and-cache/css/styles.css',

  '/203-sw-and-cache/images/cat1.jpg',
  '/203-sw-and-cache/images/cat2.jpg',
  '/203-sw-and-cache/images/cat3.jpg',

  // TODO: Add this image back to the paths list
  //'/203-sw-and-cache/images/cat4.jpg',

  '/203-sw-and-cache/images/dog1.jpg',
  '/203-sw-and-cache/images/dog2.jpg'
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

  event.respondWith(

    caches.match(event.request) // Try and find the item in any of the caches
      .then(response => {

        if (response) { // If we have a cache hit return it else get from the network
          return response;
        }

        console.log('Not in cache.', event.request.url);
        return fetch(event.request);
      })
  );
});







