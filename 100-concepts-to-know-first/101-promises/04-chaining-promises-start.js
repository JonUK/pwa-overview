

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

// TODO: Call the function addDiscount and then chain calls together
