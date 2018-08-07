
function getData(callback) {

  setTimeout(function () {
    var data = {
      filmName: 'Mission: Impossible - Fallout'
    };
    
    callback(data);
  }, 250);
}

getData(function (data) {
  console.log(data);
});
