
// Progressive enhancement / feature detection
if ('serviceWorker' in navigator) {
  console.log('Congratulations! You have a modern browser which supports service worker.');

  navigator.serviceWorker.register('sw-start.js')
    .then((registration) => {
      console.log('From main.js.', 'The service worker was registered.');
    });
}
