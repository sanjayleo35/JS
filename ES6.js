// ES6 (ECMAScript 2015) introduced a native module system in JavaScript, which allows you to break your code into smaller, reusable files.
// With ES6 modules, you can export functions, objects, or variables from one file and import them into another file.

// Importing named exports
import { add, subtract } from './MathUtil.js';

console.log(add(5, 3)); 
console.log(subtract(5, 3)); 

// Importing default export
import multiply from './MathUtil.js';

console.log(multiply(5, 3)); 
