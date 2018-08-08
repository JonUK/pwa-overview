
// Progressive enhancement / feature detection
if ('serviceWorker' in navigator) {
  console.log('Congratulations! You have a modern browser which supports service worker.');

  // The scope is the path where the sw.js exists.
  // The service worker only can run and work withing the location.
  // TODO: Show the scope of the service worker in Chrome DevTools.
  navigator.serviceWorker.register('sw.js')
    .then((registration) => {
      console.log('From main.js.', 'The service worker was registered.', registration);
    });
}
