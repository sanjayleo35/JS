// In JavaScript, the static keyword is used to define methods or properties that belong to the
// class itself, rather than to instances of the class. Static methods can be called without creating an object of the class.
// They are often used for utility functions or properties that should be shared among all instances of the class. 
// Static methods cannot access instance-specific properties directly.

class MathUtil {
    static add(a, b) {
      return a + b;
    }
  }
  
//console.log(MathUtil.add(5, 3)); // Output: 8
//console.log(MathUtil.add(10, 2)); // Output: 12

class myname{
    static name = "Sanjay"
}
//console.log(myname.name)

class property{
    static count = 0
    constructor(name){
        this.name = name
        property.count++;
    }


    static userscount(){
        console.log(`${property.count} Users are here`)
    }

    nameOfUsers(){
        console.log(`${this.name} is one of the user`)
    }

}

const username = new property("sanjay")
const username1 = new property("leo")
const username2 = new property("sanjayleo")

// console.log(username.name)
// console.log(username1.name)
// console.log(username2.name)

// console.log(property.count) // Output: 2

username1.nameOfUsers()
username.nameOfUsers()
username2.nameOfUsers()

property.userscount()