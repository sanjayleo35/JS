// Inheritance in JavaScript
// Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one class (child class) to inherit properties and methods from another class (parent class). 
// This promotes code reusability and establishes a hierarchical relationship between classes.

// In JavaScript, inheritance can be achieved through:

// Prototype-based Inheritance: JavaScript uses prototypes, allowing objects to inherit properties and methods from other objects.
// Class-based Inheritance: With the introduction of ES6, JavaScript supports class syntax, making it easier to implement inheritance.


class Animal{
    constructor(name){
        this.name = name;
    }
    alive = true

     sleep(){
        console.log(`${this.name} is sleeping`)
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
}

class Dog extends Animal{
   name="lion"
   behaviour(){
    console.log(`${this.name} is carnivor`)
   }
}
class Fish extends Animal{
    name="gold Fish"
    nothing(){
        console.log(`${this.name} is a omnivor`)
    }
}
class Cat extends Animal{
    name = "tiger"
    nothing1(){
        console.log(`${this.name} is a carnivore`)
    }

}

const dog = new Dog()
const fish = new Fish()
const cat = new Cat()
console.log(dog.alive)
dog.sleep()
dog.behaviour()