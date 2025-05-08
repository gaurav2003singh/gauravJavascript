const num = [2, 3, 4, 5, 7];

const promise = new Promise((resolve, reject) => {
 const output = num.map ((i) =>{
    if (i % 2 === 0) {
      resolve("is even");
    } else {
      reject("isOdd");
    }
    
});
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })})
 
// function isEven(num) {
//   for (i = 0; i < num.length; i++) {
//     if (x%2 === 0) {

//       return false;
//     }else{
//         return false;
//     }
//   }
// }
