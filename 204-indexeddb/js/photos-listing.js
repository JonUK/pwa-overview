
document.addEventListener('DOMContentLoaded', () => {

  DataAccess.getAllPhotos()
    .then(fillPhotosHtml);

});

function fillPhotosHtml(photos) {

  const ul = document.getElementById('cat-photos');

  photos.forEach(photo => {
    ul.append(getPhotoHtml(photo));
  });
}

function getPhotoHtml(photo) {

  const li = document.createElement('li');

  const link = document.createElement('a');
  link.href = `/204-indexeddb/photo.html?id=${photo.id}`;

  const heading = document.createElement('h2');
  heading.innerText = photo.title;

  const image = document.createElement('img');
  image.src = `/204-indexeddb/images/${photo.filename}`;

  link.append(heading);
  link.append(image);

  li.append(link);

  return li;
}