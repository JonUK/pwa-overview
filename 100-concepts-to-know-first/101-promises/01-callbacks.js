
function getData(callback) {

  setTimeout(function () {
    var data = {
      filmName: 'Mission: Impossible - Fallout'
    };

    callback(data);
  }, 250);
}

function displayData(data) {
  console.log(data);
}

getData(displayData);

// TODO: Show the shorter format where an anonymous function used
