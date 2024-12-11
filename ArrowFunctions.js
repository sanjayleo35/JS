const greet = function(){
    window.alert("hello")
}

const Greet = () => console.log("Vanakam da mapla")

const printInfo = (name, age) => {
    console.log(`Name: ${name}`);
    console.log(`Your are ${age} years old`)};
  

setTimeout(function(){console.log("Sanjay")},2000)  //Normal function
setTimeout(() => console.log("Sanjayleo"),2000) //Arrow function

const num = [1,2,3,4,6,8,5,7,8,9,]

const answer = num.map((element) => Math.pow(element,2))
const cube = num.map((element) => Math.pow(element,3))
const even = num.filter((element) => element % 2 === 0)
const odd = num.filter((element) => element % 2 !== 0)

const maximum = num.reduce((first,next) => Math.max(first,next))
const sum = num.reduce((first,next) => first+next)
console.log(sum)
  