// Define an array of fruits
let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

// Array Methods:

// 1. push() - Add element to the end of the array
fruits.push("Grapes");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Mango", "Orange", "Grapes"]

// 2. pop() - Remove the last element from the array
fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Cherry", "Mango", "Orange"]

// 3. shift() - Remove the first element from the array
fruits.shift();
console.log(fruits); // ["Banana", "Cherry", "Mango", "Orange"]

// 4. unshift() - Add element to the beginning of the array
fruits.unshift("Pineapple");
console.log(fruits); // ["Pineapple", "Banana", "Cherry", "Mango", "Orange"]

// 5. indexOf() - Find the index of an element in the array
console.log(fruits.indexOf("Mango")); // 3

// 6. splice() - Remove elements and optionally add new ones
fruits.splice(2, 1); // Removes 1 element at index 2
console.log(fruits); // ["Pineapple", "Banana", "Mango", "Orange"]

// 7. slice() - Create a new array by slicing part of an existing array
let slicedFruits = fruits.slice(1, 3); // Slices from index 1 to 3 (not including 3)
console.log(slicedFruits); // ["Banana", "Mango"]

// 8. join() - Join all array elements into a string
let fruitString = fruits.join(", ");
console.log(fruitString); // "Pineapple, Banana, Mango, Orange"

// 9. reverse() - Reverse the array
fruits.reverse();
console.log(fruits); // ["Orange", "Mango", "Banana", "Pineapple"]

// 10. sort() - Sort the array alphabetically
fruits.sort();
console.log(fruits); // ["Banana", "Mango", "Orange", "Pineapple"]

// 11. includes() - Check if an element is in the array
console.log(fruits.includes("Cherry")); // false
console.log(fruits.includes("Mango"));  // true

// 12. map() - Apply a function to each element and create a new array
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); // ["BANANA", "MANGO", "ORANGE", "PINEAPPLE"]

// 13. filter() - Filter elements based on a condition
let filteredFruits = fruits.filter(fruit => fruit.startsWith("M"));
console.log(filteredFruits); // ["Mango"]

// 14. find() - Find the first element that matches a condition
let findFruit = fruits.find(fruit => fruit === "Mango");
console.log(findFruit); // "Mango"

// 15. reduce() - Accumulate values to a single result
let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength); // Total length of all fruit names

// 16. concat() - Concatenate two arrays
let moreFruits = ["Kiwi", "Papaya"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["Banana", "Mango", "Orange", "Pineapple", "Kiwi", "Papaya"]

// 17. length - Get the length of the array
console.log(fruits.length); // 4

// 18. isArray() - Check if a variable is an array
console.log(Array.isArray(fruits)); // true

// Regular for loop to print each fruit
console.log("Using Regular For Loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Advanced for-of loop to print each fruit
console.log("Using Advanced For-Of Loop:");
for (let fruit of fruits) {
    console.log(fruit);
}
