async function myFunction() {
    return "Hello";
}



// This is equivalent to:
// async function myFunction() {
//     return Promise.resolve("Hello");
// }

myFunction().then(result => console.log(result));  // Output: "Hello"
