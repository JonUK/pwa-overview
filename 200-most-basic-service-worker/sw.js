
// NOTE: We have no access to the window object here and no access to the page

console.log('From sw.js.', 'Hello from the service worker. The JavaScript was parsed OK.');

// TODO: Add install & activate event handlers (at the same time)
// TODO: Show how new service worker is installed but in "waiting to be active" state
// TODO: Show scope and clients in the Chrome DevTools
// Note: When working in a service worker, we refer to the worker itself by the keyword self
