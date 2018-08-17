
function getDataFast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ filmName: 'Mission: Impossible - Fallout' });
    }, 250);
  });
}

function getDataSlow() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ filmName: 'Slender Man' });
    }, 500); // This one is a bit slower to resolve
  });
}

Promise.all([getDataFast(), getDataSlow()])
  .then(values => {
    console.log(values);
  });
