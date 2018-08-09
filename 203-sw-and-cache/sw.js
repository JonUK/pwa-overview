
const IMAGE_CACHE_NAME = 'images-v1.1';

const pathsToCache = [
  '/', // The server is serving up index.html as the default document
  '/dog-pics.html', // A second page on the website
  '/main.js',
  '/css/styles.css',

  '/images/cat1.jpg',
  '/images/cat2.jpg',
  '/images/cat3.jpg',
  '/images/cat4.jpg',

  '/images/dog1.jpg',
  '/images/dog2.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(IMAGE_CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});





