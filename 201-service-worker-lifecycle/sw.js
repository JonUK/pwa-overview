
console.log('From sw.js.', 'Hello from the service worker. The JavaScript was parsed OK.');

// Note: When working in a service worker, we refer to the worker itself by the keyword self.

self.addEventListener('install', (event) => {

  // TODO: Delay the install by providing a promise to event.waitUntil

  event.waitUntil(promise);

  //console.log('From sw.js.', 'Install event fired.', event);
});

self.addEventListener('activate', (event) => {

  // TODO: Make a change and show how the new service worker is waiting to replace the old one

  console.log('From sw.js.', 'Activate event fired.', event);
});
