// The sort() method in JavaScript is used to sort the elements of an array in place and returns the sorted array.
// The default sorting order is based on the Unicode code point values of the elements, 
// which means it sorts elements as strings by default, even if they are numbers.

const alpha = ['a','f','b','y','r','q','m','c','v']
alpha.sort()
const numbers=[1,2,3,4,56,78,765,43,3,456,78,7654]
numbers.sort((a,b) => a-b)
// console.log(numbers)
// console.log(alpha)
const student = [{name:"Sanjay",age:21,cgpa:8.60},
                 {name:"Sugu",age:29,cgpa:8.90},
                 {name:"vishva",age:20,cgpa:8.30},
                 {name:"Rama",age:22,cgpa:8.10}]
// student.sort((a,b) => a.age - b.age)
// student.sort((a,b) => a.cgpa - b.cgpa)
student.sort((a,b) => a.name.localeCompare(b.name))
console.log(student)
