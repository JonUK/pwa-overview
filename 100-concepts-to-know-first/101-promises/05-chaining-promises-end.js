
function addDiscount(discount) {

  return new Promise(function (resolve, reject) {
    if (discount >= 30) {
      reject("The maximum discount has been applied.");
    }

    setTimeout(function () {
      resolve(discount + 10);
    }, 250);
  })

}

addDiscount(10)
  .then(addDiscount)
  .then(function (discount) {
    console.log(discount);
  })
  .catch(function (err) {
    console.error('Oh no... there was an error.', err);
  });
