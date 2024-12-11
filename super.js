// The super keyword in JavaScript is used in classes to call functions or constructors from a parent class (also known as a superclass). 
// It allows you to access and invoke properties or methods of the parent class, facilitating inheritance.

class Animal{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    move(speed){
        console.log(`The ${this.name} can run ${speed} kmh`)
    }
}
class Rabit extends Animal{
    
    constructor(name,age,Runspeed){
        super(name,age)
        this.Runspeed = Runspeed
    }
    run(){
        console.log(`The ${this.name} can Run`)
        super.move(this.Runspeed)
    }
}

class Fish extends Animal{
    constructor(name,age,Swimspeed){
        super(name,age)
        this.Swimspeed = Swimspeed
    }
    swim(){
        console.log(`The ${this.name} can Swim`)
        super.move(this.Swimspeed)
    } 
}

class Hawk extends Animal{
    constructor(name,age,Flyspeed){
        super(name,age)
        this.Flyspeed = Flyspeed
    }
    fly(){
        console.log(`The ${this.name} can Fly`)
        super.move(this.Flyspeed)
    }
}


const rabit = new Rabit("rabit" , 10 ,50)
const fish = new Fish("fish" , 5 , 30)
const hawk = new Hawk("Hawk" , 8 , 80)

rabit.run()
fish.swim()
hawk.fly()
rabit.move(100)
