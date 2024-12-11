const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Using filter() with inline function expression to filter even numbers
const isEven = numbers.filter(function(element) {
  return element % 2 === 0;
});

// 2. Using map() with inline function expression to double the numbers
const doubled = isEven.map(function(element) {
  return element * 2;
});

// 3. Using reduce() with inline function expression to sum the numbers
const sum = doubled.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});

// Logging results
console.log("Even numbers:", isEven);    // Output: [2, 4, 6, 8, 10]
console.log("Doubled numbers:", doubled); // Output: [4, 8, 12, 16, 20]
console.log("Sum of doubled numbers:", sum); // Output: 60
