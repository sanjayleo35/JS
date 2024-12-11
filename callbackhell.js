// What is Callback Hell?
// Callback hell is a situation in JavaScript where multiple nested callbacks are used to handle asynchronous tasks.
// This deeply nested structure makes the code:

// Hard to read
// Difficult to maintain
// Prone to bugs
// It typically looks like a "pyramid of doom" because of the increasing indentation.

function task1(Callback){
    setTimeout( () => {
        console.log("Task1 complete")
        Callback()
    },1000)
}

function task2(Callback){
    setTimeout(() => {
        console.log("Task2 complete")
        Callback()
    },2000)
}

function task3(Callback){
    setTimeout(() => {
        console.log("Task3 complete")
        Callback()
    },1200)
}

function task4(Callback){
    setTimeout(() => {
        console.log("Task4 complete")
        Callback()
    },1500)
}

task1(() =>{
    task2(() =>{
        task3(() =>{
            task4(() =>{
                console.log("All task are completed")
            })
        })
    })
})


