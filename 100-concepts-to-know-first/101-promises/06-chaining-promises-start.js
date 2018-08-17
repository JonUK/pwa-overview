
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

// TODO: Get data from fastGetData and console log before getting data from slowGetData and console logging




// NOTE: Real-world usage is get data where requests / data are dependent on each other
