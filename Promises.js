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

walkthedog().then(value => {console.log(value); return cleanthekitchen() })
            .then(value => {console.log(value); return takeoutTrash()})
            .then(value => {console.log(value); console.log("All task are finished")})
            .catch(error => {console.error(error)})