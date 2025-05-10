let x = 5;

function double() {
  return new Promise((resolve, reject) => {
    resolve(x * 2);
   
  });
 
}
function addTen(x) {
  return new Promise((resolve, reject) => {
    resolve(x + 10);
  });
}
function intoThree(x) {
  return new Promise((resolve, reject) => {
    resolve(x * 3);
  });
}


double(x)
  .then(addTen)
  .then(intoThree)
  .then((result) => {
    console.log(result);
  }).catch(error => console.log("error"))



  //second way--------

  // Promise.resolve(5)
  // .then(x => x * 2)
  // .then(x => x + 10)
  // .then(x => x * 3)
  // .then(result => console.log("Final result is:", result))
  // .catch(err => console.log("Error:", err));
