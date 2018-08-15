
class DataAccess {

  /**
   * Server root URL
   */
  static get SERVER_ROOT_URL() {
    return 'http://localhost:3000/';
  }

  static getAllPhotos() {

    return fetch(DataAccess.SERVER_ROOT_URL + 'photos')
      .then(response => {

        if (!response.ok) {
          throw new Error(`Fetch response has unexpected HTTP status ${response.status}`)
        }

        return response.json();
      });
  }

  static getAllPhotosWithDbFallback() {

    return new Promise((resolve, reject) => {

      DataAccess.getAllPhotos()
        .then(photosFromServer => {
          resolve(photosFromServer);
          DataAccess.addPhotosToDb(photosFromServer);
        })
        .catch(err => {
          console.warn('The network request failed. This is expected if offline.', err);

          DataAccess.getPhotosFromDb()
            .then(offlinePhotos => {

              if (!offlinePhotos.length) {
                console.warn('No photos were found in the offline database')
              }

              resolve(offlinePhotos);

            })
            .catch(reject)
        });

    });
  }

  static getPhotosFromDb() {
    return DataAccess.openDatabase()
      .then((db) => {
        let transaction = db.transaction('photos', 'readonly');
        let store = transaction.objectStore('photos');
        return store.getAll();
      });
  }

  static addPhotosToDb(photos) {
    return DataAccess.openDatabase()
      .then((db) => {
        let transaction = db.transaction('photos', 'readwrite');
        let store = transaction.objectStore('photos');
        photos.forEach(photo => store.put(photo));
      });
  }

  /**
   * Get an instance of the indexedDB promise for the database
   */
  static openDatabase() {
    return idb.open('photos-db', 1, (upgradeDb) => {

      if (!upgradeDb.objectStoreNames.contains('photos')) {
        upgradeDb.createObjectStore('photos', {keyPath: 'id'});
      }

    });
  }
}