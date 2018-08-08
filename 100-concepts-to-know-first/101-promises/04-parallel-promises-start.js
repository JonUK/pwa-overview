
function fastGetData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ filmName: 'Mission: Impossible - Fallout' });
    }, 250);
  });
}

function slowGetData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ filmName: 'Slender Man' });
    }, 500); // This one is a bit slower to resolve
  });
}

// TODO: Use Promise.all to wait till both promises have resolved
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#Syntax
