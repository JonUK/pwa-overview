
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

// TODO: Get data from fastGetData and console log before getting data from slowGetData and console logging