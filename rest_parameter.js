function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(10, 20)); // Output: 30


function introduce(firstName, lastName, ...otherInfo) {
    console.log(`Hello, my name is ${firstName} ${lastName}.`);
    console.log(`Additional Info:`, otherInfo);
}

introduce("John", "Doe", 25, "New York", "Engineer");
// Output:
// Hello, my name is John Doe.
// Additional Info: [25, "New York", "Engineer"]


function findMax(...numbers) {
    return Math.max(...numbers); // Using spread operator to pass arguments
}

console.log(findMax(3, 5, 1, 9, 6)); // Output: 9
console.log(findMax(10, 20, 30, 5)); // Output: 30


function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}

console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
console.log(multiply(3, 4, 5)); // Output: [12, 15]


// Using arguments object
function oldSum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(oldSum(1, 2, 3)); // Output: 6

// Using rest parameter
function newSum(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(newSum(1, 2, 3)); // Output: 6


function logFruits(fruit1, fruit2, ...otherFruits) {
    console.log("First fruit:", fruit1);
    console.log("Second fruit:", fruit2);
    console.log("Other fruits:", otherFruits);
}

logFruits("Apple", "Banana", "Mango", "Orange", "Grapes");
// Output:
// First fruit: Apple
// Second fruit: Banana
// Other fruits: ["Mango", "Orange", "Grapes"]
