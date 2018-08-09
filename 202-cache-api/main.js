
// Progressive enhancement / feature detection (inside Service Worker we know this will be available)
if (window.caches) {

  caches.open('images-cache')
    .then((cache) => {
      cache.add('/202-cache-api/images/cat1.jpg'); // The fetch API will be used behind the scenes

      // TODO: Show how multiple requests can be cached via the cache.addAll function

      // TODO: Show how we can get a item from the cache with cache.match
    });
}


