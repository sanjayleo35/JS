// The classList property in JavaScript is part of the DOM API and provides a set of methods to work with the class attribute of HTML elements.
// It allows you to efficiently add, remove, toggle, or check for the presence of CSS classes on an element.

// Key Features of classList
// Readability: Makes the code cleaner and easier to read compared to using the className property.
// Flexibility: Allows manipulation of individual classes without overwriting the entire class attribute.
// Dynamic Interaction: Makes it easy to manage styles dynamically based on user actions or events.


const myh1 = document.getElementById("myh1")
const mybutton = document.getElementById("myButton")



 mybutton.classList.add("enabled")

// mybutton.addEventListener("mouseover",event =>{
//     mybutton.classList.add("hover")
// })
// mybutton.addEventListener("mouseout",event =>{
//     mybutton.classList.remove("hover")
// })

myh1.classList.add("enabled")

myh1.addEventListener("click",event =>{

    // mybutton.classList.replace("enabled","disabled")

   if( myh1.classList.contains("disabled")){

    event.target.textContent += '😡'
   }
   else{
    event.target.classList.replace('enabled','disabled')
   }
})


mybutton.addEventListener("click",event =>{

    // mybutton.classList.replace("enabled","disabled")

   if( mybutton.classList.contains("disabled")){

    event.target.textContent += '😡'
   }
   else{
    event.target.classList.replace('enabled','disabled')
   }
})

// mybutton.classList.remove("enabled")





let mybuttons = document.querySelectorAll(".mybuttons")

mybuttons.forEach(button =>{
    button.classList.add("enabled")
})

mybuttons.forEach(button =>{

    button.addEventListener("mouseover",event =>{
        event.target.classList.toggle("hover")
    })
})

mybuttons.forEach(button =>{

    button.addEventListener("click",event =>{
        event.target.classList.replace("enabled","disabled")
    })
})


mybuttons.forEach(button =>{

    button.addEventListener("click",event =>{

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "😡"
        }
        else{
        event.target.classList.replace("enabled","disabled")
        }
    })
})
