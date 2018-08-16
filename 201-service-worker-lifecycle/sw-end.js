
// Note: When working in a service worker, we refer to the worker itself by the keyword self

self.addEventListener('install', event => {
  console.log('From sw.js.', 'Install event fired.', event);
});

self.addEventListener('activate', event => {
  console.log('From sw.js.', 'Activate event fired.', event);
});

self.addEventListener('fetch', event => {
  var url = event.request.url;

  console.log(url);

  if (url.endsWith('.jpg')) {
    event.respondWith(fetch('/201-service-worker-lifecycle/images/dog.jpg'));
  }

  // TODO: Also show a new response with text content and how this works on all paths

});