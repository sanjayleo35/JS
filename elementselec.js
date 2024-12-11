// In the DOM (Document Object Model), element selectors are methods provided by JavaScript to access and manipulate HTML elements.
// Here are the main types of element selectors you can use:
// getElementById(): Selects a single element by ID.
// getElementsByClassName(): Selects elements by class name (returns a live HTMLCollection).
// getElementsByTagName(): Selects elements by tag name (returns a live HTMLCollection).
// querySelector(): Selects the first matching element based on a CSS selector.
// querySelectorAll(): Selects all matching elements based on a CSS selector (returns a static NodeList).






// const headig = document.getElementById("message")
// headig.style.backgroundColor = "black"
// headig.style.color= "white"
// headig.style.textAlign = "center"

// console.log(headig)


// const fruits = document.getElementsByClassName("fruit")
//  fruits[2].style.color = "white"
//  fruits[2].style.backgroundColor = "black"

// for (let i in fruits){
//     fruits[i].style.backgroundColor = "black";
//     fruits[i].style.paddingBottom = "10px"
//     fruits[i].style.color = "white"

// }
// console.log(fruits)


// const elements = document.getElementsByTagName("h4")
// const lielements = document.getElementsByTagName("li")

// for(let element of elements){
//     element.style.backgroundColor = "gray"
// }
// for(let lielement of lielements){
//     lielement.style.backgroundColor = "Lightyellow"
// }

// console.log(elemennts)


// const fruits = document.querySelector(".fruit")  //Select first matching element

// fruits.style.backgroundColor = "yellow"  

const fruits = document.querySelectorAll("ul")

// for (let fruit of fruits){
//     fruit.style.backgroundColor = "Gray"
// }

fruits.forEach(fruit =>{
     fruit.style.backgroundColor = "Gray"
})