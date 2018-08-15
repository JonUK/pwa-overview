
function fastGetData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ filmName: 'Mission: Impossible - Fallout' });
    }, 500);
  });
}

function slowGetData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ filmName: 'Slender Man' });
    }, 1500); // This one is a bit slower to resolve
  });
}

fastGetData()
  .then(function(fastData) {
    console.log(fastData);
    return slowGetData(); // The return from this function is another promise
  })
  .then(function (slowData) {
    console.log(slowData);
  })
  .catch(function (err) {
    console.error(err); // If either promise rejects, catch is executed
  });