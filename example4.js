const marks = 54;

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (marks >= 40) {
      resolve("congatulations you passed");
    } else {
      reject("fail");
    }
  }, 2000);
});

promise2.then(result => console.log(result))
.catch(error=>console.log(error));
