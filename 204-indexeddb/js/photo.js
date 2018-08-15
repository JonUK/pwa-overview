

document.addEventListener('DOMContentLoaded', () => {

  let photoId = getQueryStringValue('id');

  var promises = [
    DataAccess.getPhoto(photoId),
    DataAccess.getPhotoComments(photoId)
  ];

  Promise.all(promises)
    .then(values => {
      let photo = values[0];
      let comments = values[1];

      fillPageHtml(photo, comments)
    })
    .catch(err => {
      console.error('An error occurred.', err);
    })


});

function fillPageHtml(photo, comments) {

  const breadcrumb = document.getElementById('breadcrumb');
  const breadcrumbPageName = document.createElement('span');
  breadcrumbPageName.innerText = photo.title;
  breadcrumb.append(breadcrumbPageName);

  const imageContainer = document.getElementById('image-container');
  const image = document.createElement('img');
  image.src = `/204-indexeddb/images/${photo.filename}`;
  imageContainer.append(image);

  const commentsContainer = document.getElementById('comments-container');

  comments.forEach(comment => {
    commentsContainer.append(getCommentHtml(comment));
  })
}

function getCommentHtml(comment) {

  const div = document.createElement('div');
  div.classList.add('comment');

  const commentName = document.createElement('div');
  commentName.innerText = comment.name;
  commentName.classList.add('name');


  const commentText = document.createTextNode(comment.body);

  div.append(commentName);
  div.append(commentText);

  return div;
}

function getQueryStringValue(queryStringName) {

  const urlParams = new URLSearchParams(window.location.search);
  const photoId = urlParams.get(queryStringName);

  if (!photoId) {
    throw Error(`A value wasn't found for the query string parameter '${queryStringName}'`);
  }

  return parseInt(photoId, 10);
}
