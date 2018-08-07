
function fastGetData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = { filmName: 'Mission: Impossible - Fallout' };
      resolve(data);
    }, 250);
  });
}

function slowGetData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = { filmName: 'Slender Man' };
      resolve(data);
    }, 500); // This one is a bit slower to resolve
  });
}

Promise.all([fastGetData(), slowGetData()])
  .then((values) => {
    console.log(values);
  })
