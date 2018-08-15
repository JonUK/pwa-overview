
if ('serviceWorker' in navigator) {
  console.log('Congratulations! You have a modern browser which supports service worker.');

  navigator.serviceWorker.register('sw.js')
    .then(registration => {
      console.log('From main.js.', 'The service worker was registered.');
    });
}


DataAccess.getAllPhotos()
  .then(photos => {
    console.log('All photos from server.', photos);
  });


// TODO: Show how a new database is created and a new store
// var dbPromise = idb.open('films-db', 1, upgradeDb => {
//   let store = upgradeDb.createObjectStore('films', { keyPath: 'filmId' });
// });


// TODO: Show how new items can be added to the store
// dbPromise.then(db => {
//   let transaction = db.transaction(['films'], 'readwrite');
//   let store = transaction.objectStore('films');
//
//   store.put({ filmId: 1, name: 'Double Execution' });
//   store.put({ filmId: 2, name: 'Sudden Extermination' });
//   store.put({ filmId: 3, name: 'Terminal Payback' });
// });


// TODO: Show how to get all the items in a store
// dbPromise.then(db => {
//   let transaction = db.transaction(['films'], 'readonly');
//   let store = transaction.objectStore('films');
//
//   store.getAll()
//     .then(films => {
//       console.log('Films.', films);
//     });
// });


// TODO: Use the method DataAccess.getAllPhotosWithDbFallback to get photos which
// should work offline once the photos have been retrieved once.
// DataAccess.getAllPhotosWithDbFallback()
//   .then(photos => {
//     console.log('All photos from server or offline DB.', photos);
//   });





