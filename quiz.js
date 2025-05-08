let x = 5;

function double(x) {
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
  }).catch("error")
