

function addDiscount(discount) {

  return new Promise(function (resolve, reject) {
    if (discount > 30) {
      reject("The discount cannot exceed 30");
    }

    setTimeout(function () {
      resolve(discount + 10);
    }, 250);
  })

}

// TODO: Call the function addDiscount and then chain calls together
addDiscount(10)
  .then(addDiscount)
  .then(function (discount) {
    console.log(discount);
  });
