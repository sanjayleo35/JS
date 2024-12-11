const mybox = document.getElementById("mybox")
const button = document.getElementById("button")




// mybox.addEventListener("click",event =>{
//      event.target.style.backgroundColor = "skyblue"
//     event.target.textContent = "You touched me 🥰"
// })



// function colorchange(event){
//     event.target.style.backgroundColor = "tomato"
//     event.target.textContent = "You touched me 🥰"
// }

// mybox.addEventListener("click",colorchange)


// mybox.addEventListener("mouseover",event =>{
//    event.target.style.backgroundColor = "yellow"
//    event.target.textContent = "touch me ❤️"
// })

// mybox.addEventListener("mouseout",event =>{
//    event.target.style.backgroundColor = "green"
//    event.target.textContent = "Click me 😊"
// })

button.addEventListener("click",event =>{
mybox.style.backgroundColor = "skyblue"
mybox.textContent = "You touched me 🥰"
})

button.addEventListener("mouseover",event =>{
    mybox.style.backgroundColor = "yellow"
    mybox.textContent = "touch me ❤️"
})
    
button.addEventListener("mouseout",event =>{
    mybox.style.backgroundColor = "green"
    mybox.textContent = "Click me 😊"
    })
