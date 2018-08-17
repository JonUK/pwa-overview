
const STATIC_CACHE_NAME = 'static-v1.1';

const pathsToCache = [
  '/203-sw-and-cache/', // The server is serving up index.html as the default document
  '/203-sw-and-cache/dog-pics.html', // A second page on the website
  '/203-sw-and-cache/main.js',
  '/203-sw-and-cache/css/styles.css',

  '/203-sw-and-cache/images/cat1.jpg',
  '/203-sw-and-cache/images/cat2.jpg',
  '/203-sw-and-cache/images/cat3.jpg',
  '/203-sw-and-cache/images/cat4.jpg',

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

    caches.open(STATIC_CACHE_NAME)
      .then(cache => {

        return cache.match(event.request) // Try and find the item in the cache
          .then(response => {

            if (response) { // If we have a cache hit return item else get from the network
              return response;
            }

            return fetch(event.request);
          });
      })
  );

  // TODO: Show this page works fine when offline
  // TODO: Show there are no true requests being made to the server
  // TODO: Show how a CSS change is not updated automatically (when update on reload not enabled)
  // TODO: Show how in Chrome DevTools the bypass for network option can be used

});

// TODO: Change caching strategy to "stale-while-revalidate" (serve from cache then fetch and update cache)
// self.addEventListener('fetch', event => {
//
//   event.respondWith(
//
//     caches.open(STATIC_CACHE_NAME)
//       .then(cache => {
//
//         return cache.match(event.request)
//           .then(responseFromCache => { // Returns "undefined" if not cache match
//
//             let fetchPromise = fetch(event.request)
//               .then(responseFromNetwork => {
//                 cache.put(event.request, responseFromNetwork.clone()); // A response is "consumable" and can only be used once
//                 return responseFromNetwork;
//               });
//
//             return responseFromCache || fetchPromise;
//           })
//       })
//   );
//
// });







