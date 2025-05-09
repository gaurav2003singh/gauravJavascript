// const promise = new Promise(function(reject, resolve){
//     resolve("hello world")
//     reject("error")
// })

const promise = new Promise((resolve, reject) => {
    let isSuccessful = true;
  
    if (isSuccessful) {
      resolve("Task completed!");
    } else {
      reject("Task failed.");
    }
  });
  
  promise
    .then(result => console.log("✅", result))   // Runs if resolved
    .catch(error => console.log("❌", error));   // Runs if rejected
  