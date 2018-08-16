
// Progressive enhancement / feature detection
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw-start.js');
}
