
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

// TODO: Use Promise.all to wait till both promises have resolved
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#Syntax


// TODO: Show ES6 arrow function usage
// NOTE: Real-world usage is get data where requests / data not dependent on each other
