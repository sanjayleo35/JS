const fruits = [
    { name: "apple", color: "Red", price: 50 },
    { name: "Banana", color: "Yellow", price: 40 },
    { name: "Orange", color: "Orange", price: 30 },
    { name: "Strawberry", color: "Pink", price: 90 },
    { name: "Goya", color: "Green", price: 60 }
];

// 1. push()
fruits.push({ name: "Pineapple", color: "Brown", price: 70 });
console.log(fruits);

// 2. pop()
fruits.pop();
console.log(fruits);

// 3. splice()
fruits.splice(1, 1);  // Removes Banana
console.log(fruits);

fruits.splice(2, 0, { name: "Mango", color: "Orange", price: 80 });  // Adds Mango
console.log(fruits);

// 4. forEach()
fruits.forEach(fruit => {
    console.log(`${fruit.name} is ${fruit.color} and costs ${fruit.price}`);
});

// 5. map()
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

// 6. filter()
const expensiveFruits = fruits.filter(fruit => fruit.price > 50);
console.log(expensiveFruits);

// 7. reduce()
const totalPrice = fruits.reduce((sum, fruit) => sum + fruit.price, 0);
console.log(totalPrice);


console.log(fruits)
fruits.push({name:"mango" , color:"Greenish yellow",price:90})