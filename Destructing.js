// destructuring is a convenient way of extracting values from arrays or properties from objects and assigning them to variables in a concise manner.
// It helps avoid repetitive code and improves readability.
// []=> array destructing
// {}=> Object destructing

const fruit = [ "apple",'mango','pineapple',"banana","strawberry"]
const [first,second,third,...fourth] = fruit;

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);

const person1 = {
    name: "Sanjay",
    age: 22,
    city: "Chennai",
    job:"developer"
    
};
const person2 = {
    name: "Spartan",
    age: 29,
    city: "trichy"


};

const {name, age, city,job="Unemployed"} = person2;
console.log(name); 
console.log(age);  
console.log(city); 
console.log(job); 
// const {name, age, city,job="Unemployed"} = person1;
// console.log(name); 
// console.log(age);  
// console.log(city); 
// console.log(job); 



// const user = {
//     name: "John",
//     address: {
//         city: "New York",
//         zip: 10001
//     }
// };

// const { name, address: { city, zip } } = user;
// console.log(city); 
// console.log(zip);  

function display({name,age,city,job="Velaiku poda"}){
    console.log(name);
    console.log(age);
    console.log(city);
    console.log(job)
}
display(person2)
