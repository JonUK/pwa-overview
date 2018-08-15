
class DataAccess {

  /**
   * Server root URL
   */
  static get SERVER_ROOT_URL() {
    return 'http://localhost:3000/';
  }

  static getAllPhotos() {

    return fetch(DataAccess.SERVER_ROOT_URL + 'photos')
      .then((response) => {
        return response.json();
      });
  }

  static getPhoto(photoId) {

    return fetch(DataAccess.SERVER_ROOT_URL + `photos/${photoId}`)
      .then((response) => {
        return response.json();
      });
  }

  static getPhotoComments(photoId) {

    return fetch(DataAccess.SERVER_ROOT_URL + `photos/${photoId}/comments`)
      .then((response) => {
        return response.json();
      });
  }

}