// The Date object is used to work with dates and times. It provides various methods to create, manipulate, and format dates and times. 

const date = new Date()
console.log(date) 

let specificDate = new Date('2024-10-10');
console.log(specificDate);

let anotherDate = new Date(2024, 9, 10); 
console.log(anotherDate); 



let Millisecond = new Date(20000000); 
console.log(Millisecond); 

let today = new Date();
console.log(today.getFullYear()); 
console.log(today.getMonth());    
console.log(today.getDate());    



date.setFullYear(2025);
date.setMonth(11);
date.setDate(25);  
console.log(date); 
