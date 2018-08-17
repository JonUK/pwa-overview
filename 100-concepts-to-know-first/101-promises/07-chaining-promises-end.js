
function getDataFast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ filmName: 'Mission: Impossible - Fallout' });
    }, 500);
  });
}

function getDataSlow() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ filmName: 'Slender Man' });
    }, 1000); // This one is a bit slower to resolve
  });
}

getDataFast()
  .then(fastData => {
    console.log(fastData);
    return getDataSlow(); // The return from this function is another promise
  })
  .then(slowData => {
    console.log(slowData);
  })
  .catch(err => {
    console.error(err); // If either promise rejects, catch is executed
  });
