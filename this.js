const student1 = {
    name: 'sanjay',
    age: 21,
    department:'CSE',
    mark:80,
    isStudent:true,
    piththu : function() {console.log(`Hai,I'm ${this.name}.....`)},
    eat:function() {console.log(`my age is ${this.age}`)}

}
student1.piththu();
student1.eat();