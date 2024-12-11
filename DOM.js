// The DOM (Document Object Model) in JavaScript is a programming interface that allows developers to interact
// with HTML and XML documents in a structured way.
// Through the DOM, JavaScript can access and manipulate the content, structure, and styling of a web page in real-time.

document.title = "Leo "
document.body.style.backgroundColor = "hsl(2,0%,15%)"
document.body.style.color = "hsl(0,0%,100%)"
document.body.style.color = "white"

const username = "Sanjay"

const thecode = document.getElementById("message");

thecode.textContent += username === " " ? "Guest" :  username;


// console.log(document)
// console.dir(document)