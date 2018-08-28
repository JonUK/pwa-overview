
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}


DataAccess.getAllPhotos()
  .then(photos => {
    console.log('All photos from server.', photos);
  });

// TODO: Ensure update on reload is enabled
// TODO: Show how a new database is created and a new store
// let dbPromise = idb.open('films-db', 1, upgradeDb => {
//   let store = upgradeDb.createObjectStore('films', { keyPath: 'filmId' }); // keyPath is the unique id for item in store
// });


// TODO: Show how new items can be added to the store
// TODO: Show how items are updated when put is called again
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
// should work offline once the photos data has been retrieved once.
// DataAccess.getAllPhotosWithDbFallback()
//   .then(photos => {
//     console.log('All photos from server or offline DB.', photos);
//   });