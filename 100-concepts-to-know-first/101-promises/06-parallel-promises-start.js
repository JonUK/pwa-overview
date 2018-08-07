
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

// TODO: Use Promise.all to wait till both promises have resolved
