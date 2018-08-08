
function getData() {

  return new Promise(function (resolve, reject) {

    setTimeout(function () {
      resolve({ filmName: 'Mission: Impossible - Fallout' });
      // TODO: Show what happens if the promise is rejected
    }, 250);

  });
}

getData()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error('Oh no... there was an error.', err);
  });
