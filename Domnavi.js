// DOM (Document Object Model) navigation in JavaScript allows us to traverse through elements and nodes in an HTML document.
// Here’s a breakdown of the main methods and properties used for navigating the DOM



// ------------- .firstelementchild ------------------------

// const element = document.getElementById("Vegetables")

// const fruit = element.firstElementChild
// fruit.style.backgroundColor = "lightblue"

// const element = document.querySelectorAll("ul")
// element.forEach(elements =>{
//     const firstChild = elements.firstElementChild;
//     firstChild.style.backgroundColor = "lightblue"
// })

// ------------- .lastElementchild ------------------------

// const element = document.getElementById("Vegetables")

// const fruit = element.lastElementChild
// fruit.style.backgroundColor = "lightblue"

// const element = document.querySelectorAll("ul")
// element.forEach(elements =>{
//     const lastChild = elements.lastElementChild;
//     lastChild.style.backgroundColor = "lightblue"
// })


// ------------- .nextElementSibling ------------------------

// const element = document.getElementById("Vegetables")
// const element = document.getElementById("Apple")
// const nextSibling = element.nextElementSibling
// nextSibling.style.backgroundColor = "lightblue"

// ------------- .PreviousElementSibling ------------------------

// const element = document.getElementById("Fruit")
//const element = document.getElementById("Orange")
// const previousSibling = element.previousElementSibling
// previousSibling.style.backgroundColor = "lightblue"

// ------------- .ParentElement------------------------

// const element = document.getElementById("Apple")
// const parent = element.parentElement
// parent.style.backgroundColor = "lightblue"


// ------------- .Children------------------------

const element = document.getElementById("Fruit")
const children = element.children

children[0].style.backgroundColor = "lightblue"


// Array.from(children).forEach(child =>{
//     child.style.backgroundColor = "lightblue"
// })
console.log(children)




