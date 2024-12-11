// In JavaScript, a NodeList is a collection of DOM nodes, typically returned by methods like querySelectorAll(),
// getElementsByClassName(), or childNodes. Although similar to an array, a NodeList is not a true array;
// it doesn’t have all array methods but can often be looped through to interact with each DOM element it contains.

// Types of NodeLists
// Static NodeLists: Created by methods like querySelectorAll(). A static NodeList doesn’t automatically update when the DOM changes.
// Live NodeLists: Created by methods like getElementsByClassName() or childNodes. A live NodeList updates automatically when the DOM changes.

let buttons = document.querySelectorAll(".mybuttons")

// buttons.forEach(event =>{
//     event.style.color = "white"
//     event.textContent += "😁"
// })






// buttons.forEach(event =>{
//     event.addEventListener("click", Action =>{
//         Action.target.style.backgroundColor = "black"
//         Action.target.style.color = "White"

//     })
// })






// buttons.forEach(event =>{
//     event.addEventListener("mouseover", Action =>{
//         Action.target.style.backgroundColor = "black"
//         Action.target.style.color = "White"

//     })
// })
// buttons.forEach(event =>{
//     event.addEventListener("mouseout", Action =>{
//         Action.target.style.backgroundColor = "aquamarine"
//         Action.target.style.color = "black"

//     })
// })


// const newbutton = document.createElement("Button") //step1
// newbutton.textContent = "Button5" //step2
// newbutton.classList = "mybuttons"
// document.body.appendChild(newbutton) //step3

// console.log(buttons) // only four buttons

// buttons = document.querySelectorAll(".mybuttons")


// console.log(buttons)  // 5 buttons


buttons.forEach(event =>{
        event.addEventListener("click", Action =>{
            Action.target.remove()
            buttons = document.querySelectorAll(".mybuttons")
            console.log(buttons) 
        })
    })
