const promise1 = new Promise(function(resolve, reject){
    const isName = false;

    setTimeout(()=>{
        if(isName){
            resolve("hello from gaurav in 2 seconds")
        }else{
            reject("something went wrong")
        }
    },2000)
})

promise1.then(result =>console.log(result))
.catch(error =>console.log(error))                

// here error and result are  function parameters , where result takes msg from resolve and error resieves from reject ..with the help of .then and .catch|

