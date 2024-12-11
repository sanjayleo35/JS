let fruits = ["Apple", "Banana", "Mango"];
let copiedFruits = [...fruits]; // Copy of the original array

console.log(copiedFruits); // ["Apple", "Banana", "Mango"]

let fruits1 = ["Apple", "Banana"];
let fruits2 = ["Mango", "Orange"];
let allFruits = [...fruits1, ...fruits2]; // Merging two arrays

console.log(allFruits); // ["Apple", "Banana", "Mango", "Orange"]


let fruits3 = ["Apple", "Banana"];
let newFruits = ["Grapes", ...fruits, "Orange"];

console.log(newFruits); // ["Grapes", "Apple", "Banana", "Orange"]


let numbers = [3, 5, 7, 2, 9];

// Without spread operator
let maxNumber1 = Math.max(numbers); // Incorrect usage
console.log(maxNumber1); // NaN

// With spread operator
let maxNumber2 = Math.max(...numbers); // Correct usage
console.log(maxNumber2); // 9


let greeting = "Hello";
let letters = [...greeting];

console.log(letters); // ["H", "e", "l", "l", "o"]


let firstWord = "Hello";
let secondWord = "World";

let combined = [...firstWord, " ", ...secondWord].join('');
console.log(combined); // "Hello World"


let firstWord1 = "Hello";
let secondWord1 = "World";

let combined1 = [...firstWord, " ", ...secondWord].join('');
console.log(combined); // "Hello World"

