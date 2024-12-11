
// Async/Await in JavaScript
// async/await is a modern way to handle asynchronous operations in JavaScript.
// It allows you to write asynchronous code that looks and behaves like synchronous code, making it more readable and easier to debug.

// Promises in JavaScript
// A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation.
// Promises are used to handle asynchronous tasks more cleanly than traditional callbacks, helping to avoid callback hell.

// Why Use Promises?
// To handle asynchronous code (like API calls or setTimeout).
// To write cleaner, more readable, and maintainable code.
// To chain multiple asynchronous operations together.

function walkthedog(){

    

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const walkedDog = true

            if(walkedDog){
                resolve("You walk the dog")
            }
            else{
                reject("You didn't walk the dog")
            }

        },1500)
    })
}

function cleanthekitchen(){

    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const cleankitchen = true

            if(cleankitchen){
                resolve("You clean the kitchen")
            }
            else{
                reject("You didn't clean the kitchen")
            }

        },2500)
    })
}

function takeoutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const trash = false
            if(trash){
                resolve("You take out the trash")
                }
            else{
                reject("You didn't take out the trash")
            }

        },500)
    })
}

async function doCharm() {
    try {
        const walkdog = await walkthedog();
        console.log(walkdog);
        
        const cleanKitchen = await cleanthekitchen();
        console.log(cleanKitchen);
        
        const takeoutTrash = await takeoutTrash();
        console.log(takeoutTrash);

        console.log("All done");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

doCharm()