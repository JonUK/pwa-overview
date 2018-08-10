
if ('serviceWorker' in navigator) {
  console.log('Congratulations! You have a modern browser which supports service worker.');

  navigator.serviceWorker.register('/204-indexeddb/sw.js')
    .then((registration) => {
      console.log('From sw-register.js.', 'The service worker was registered.');
    });
}
