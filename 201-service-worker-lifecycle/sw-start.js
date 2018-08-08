
console.log('From sw.js.', 'Hello from the service worker. The JavaScript was parsed OK.');

// Note: When working in a service worker, we refer to the worker itself by the keyword self

self.addEventListener('install', (event) => {
  console.log('From sw.js.', 'Install event fired.', event);
});

self.addEventListener('activate', (event) => {
  console.log('From sw.js.', 'Activate event fired.', event);
});

// TODO: Add an event listener to the fetch event and console log the URLS
// TODO: Intercept "*.jpg" files and return a different image using fetch API (event.respondWith)
// TODO: Confirm the svg is not affected

