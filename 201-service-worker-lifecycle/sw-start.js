
// Note: When working in a service worker, we refer to the worker itself by the keyword self

self.addEventListener('install', event => {
  console.log('From sw.js.', 'Install event fired.');
});

self.addEventListener('activate', event => {
  console.log('From sw.js.', 'Activate event fired.');
});

// TODO: Add an event listener to the fetch event and console log the URLs
// TODO: Intercept "*.jpg" files and return a different image (dog.jpg) using fetch API (event.respondWith)
// TODO: Confirm the svg is not affected
// TODO: Respond to the page request with a fixed response (text & html using headers / content-type: text/html )

// https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent

