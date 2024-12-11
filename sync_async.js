// Synchronous JavaScript:
// Synchronous means that tasks are executed one after another in a single thread.
// Each operation waits for the previous one to complete before moving on to the next one.
// This is the default behavior in JavaScript.

// Asynchronous JavaScript:
// Asynchronous programming allows tasks to run in the background, without blocking the execution of subsequent code.
// When an asynchronous task completes, a callback function or promise is executed to handle the result.
// handle with : callback , promises , Async/Await

function fun1(callback){
    setTimeout( () => {
        console.log("sanjayleo");
        callback();
                    },3000)
}
function fun2(){
    console.log("sanjay1");
    console.log("sanjay2");

}
fun1(fun2)