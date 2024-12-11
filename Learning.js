/*  printing someting

console.log(`output is here`)

*/

/*Popup alert

window.alert(`vanakam da mapla !!`)

*/

/* Calling with id

document.getElementById("myh").textContent = "vanakkam"
document.getElementById("myp").textContent = "onnum solla ella"

*/

/*Creating variable

let Sanjay=3578
let num=3.0

console.log(typeof Sanjay)
console.log(typeof (num))
console.log(`My lucy number is ${Sanjay}`)
console.log(`there no specific for float all are only numbers in JS ${num}`)
*/

/* Boolean
let online = true

console.log(typeof(online))
*/

/* Out put on Page
let Name = "Sanjay"
let num = 123
let bool = true
document.getElementById("myh").textContent = `Myname is ${Name}`
document.getElementById("myp").textContent = `My lucy number is ${num}`
document.getElementById("myp1").textContent = `I am a student ${bool}`
*/

/*
Operator presidant :
    1.paranthesis ()
    2.exponents **
    3.Multiplication & division & Modulo
    4.addition & Subtraction
    solving Left to right
*/

//let ans = 1 + 6 - 8 / 2 + (6+2)**2 % 4 //Output = 3
//let ans = ( 3 + 3) // output 6
//let ans = ( "3" + 3) // 33
//let ans = ( 3 + "3") // 33
//let ans = ( 3 + 3 + "3") // 3+3=6 and 3 : 63
//let ans = ("3" + 3 + 3 ) // 333
//let ans = (3 + "3" + 3) // 333
//let ans = 3 + 3 + 3 // 9
//document.getElementById("myp").textContent = ans

/* Accept input from User By using Window prompt
let num = window.prompt("enter the value of num: ")
//num = window.prompt("enter the value of num: ")
document.getElementById("myp").textContent = num
*/

/*
Accept user input by using HTML
HTML:
 <label>Username:</label>
    <input type="text" id="name"><br><hr>
    <button id="sub">Submit</button>
JS:
let name
document.getElementById("sub").onclick = function(){
    name = document.getElementById("name").value
    document.getElementById("myp").textContent = `Hello ${name} !!`
}
*/
//Random number
//let number = Math.floor(Math.random() * 100 + 1) // 100 is a range
//console.log(number)

/*
In JavaScript, strings come with a variety of methods that allow you to manipulate and work with them. Here’s a comprehensive list:

### String Methods

1. **`charAt(index)`**: Returns the character at the specified index.
2. **`charCodeAt(index)`**: Returns the Unicode of the character at the specified index.
3. **`codePointAt(position)`**: Returns a number representing the Unicode code point of the character at the specified position.
4. **`concat(...strings)`**: Combines the text of two or more strings and returns a new string.
5. **`endsWith(searchString[, length])`**: Checks if the string ends with the specified substring.
6. **`fromCharCode(...codes)`**: Converts Unicode values to characters and returns a string.
7. **`includes(searchString[, position])`**: Checks if the string contains the specified substring.
8. **`indexOf(searchValue[, fromIndex])`**: Returns the first index at which a given substring can be found.
9. **`lastIndexOf(searchValue[, fromIndex])`**: Returns the last index at which a given substring can be found.
10. **`localeCompare(compareString[, locales[, options]])`**: Compares two strings in the current locale.
11. **`match(regexp)`**: Retrieves the result of matching a string against a regular expression.
12. **`matchAll(regexp)`**: Returns an iterator of all matches, including capturing groups.
13. **`normalize([form])`**: Returns the Unicode Normalization Form of the string.
14. **`padEnd(targetLength[, padString])`**: Pads the current string with another string until it reaches the specified length.
15. **`padStart(targetLength[, padString])`**: Pads the current string with another string until it reaches the specified length.
16. **`repeat(count)`**: Returns a new string with a specified number of copies of the string.
17. **`replace(searchValue, newValue)`**: Returns a new string with some matches of a pattern replaced by a replacement.
18. **`replaceAll(search, replacement)`**: Returns a new string with all matches of a pattern replaced by a replacement.
19. **`search(regexp)`**: Executes a search for a match between a regular expression and the string.
20. **`slice(beginIndex[, endIndex])`**: Extracts a section of the string and returns it as a new string.
21. **`split([separator[, limit]])`**: Splits a string into an array of substrings.
22. **`startsWith(searchString[, position])`**: Checks if the string starts with the specified substring.
23. **`substr(start[, length])`**: Returns a portion of the string, starting at the specified index.
24. **`substring(indexStart[, indexEnd])`**: Returns a subset of a string between two indices.
25. **`toLocaleLowerCase([locales[, options]])`**: Returns the calling string value converted to lower case, according to any locale-specific case mappings.
26. **`toLocaleUpperCase([locales[, options]])`**: Returns the calling string value converted to upper case, according to any locale-specific case mappings.
27. **`toLowerCase()`**: Returns the calling string value converted to lower case.
28. **`toString()`**: Returns the string representation of the object.
29. **`toUpperCase()`**: Returns the calling string value converted to upper case.
30. **`trim()`**: Removes whitespace from both ends of the string.
31. **`trimEnd()`**: Removes whitespace from the end of the string.
32. **`trimStart()`**: Removes whitespace from the start of the string.
33. **`valueOf()`**: Returns the primitive value of a String object.

These methods are part of the `String` prototype in JavaScript and can be used on string instances.
*/

/*Using slice() method:

javascript
Copy code
const array = [1, 2, 3, 4, 5];
const slicedArray = array.slice(1, 3); // [2, 3]
Using splice() method (modifies the original array):

javascript
Copy code
const array = [1, 2, 3, 4, 5];
const splicedArray = array.splice(1, 3); // [2, 3, 4]
// Now array is [1, 5]
Using Spread Operator:

javascript
Copy code
const array = [1, 2, 3, 4, 5];
const slicedArray = [...array].slice(1, 3); // [2, 3]
Using Array.from():

javascript
Copy code
const array = [1, 2, 3, 4, 5];
const slicedArray = Array.from(array).slice(1, 3); // [2, 3]
Using Destructuring:

javascript
Copy code
const array = [1, 2, 3, 4, 5];
const [ , second, third] = array;
const slicedArray = [second, third]; // [2, 3]
String Slicing
Using substring() method:

javascript
Copy code
const str = "Hello World";
const substr = str.substring(1, 5); // "ello"
Using substr() method:

javascript
Copy code
const str = "Hello World";
const substr = str.substr(1, 4); // "ello"

const str = "Hello World";
const substr = str.slice(0,str.indexOf(" "));
const substr2 = str.slice(str.indexOf(" ")+1);
console.log(substr)
console.log(substr2)
*/