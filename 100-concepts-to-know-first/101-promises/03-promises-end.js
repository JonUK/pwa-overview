
function getData() {

  return new Promise(function (resolve, reject) {

    setTimeout(function () {
      var data = {
        filmName: 'Mission: Impossible - Fallout'
      };

      // TODO: Show what happens if the promise is rejected
      
      resolve(data);
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
