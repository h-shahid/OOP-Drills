let person1 = {
    name: "Rajeeyah",
    sayHello() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};


let person2 = {
    name: "Zarinah",
    sayHello() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

let person3 = {
    name: "Eddie",
    sayHello() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};
let person4 = {
    name: "Jackie",
    sayHello() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};
let person5 = {
    name: "Sydni",
    sayHello() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};
person1.sayHello()
person2.sayHello()
person3.sayHello()
person4.sayHello()
person5.sayHello()

// function Person (name, age, city) { // constructor function ...done before ES6
//     this.name = name; //create name obj onto this propery and equal to the value passed in.
//     this.age = age;
//     this.city = city;
// }

// Person.prototype.sayHello = function () {  //add method
//     console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I live in ${this.city}.`)
// }

// let p1 = new Person("Rajeeyah", 35, "Hoover") //literal shorthand let myObj = new Obj
// let p2 = new Person("Zarinah", 37, "Bessemer")
// let p3 = new Person("Jackie", 67, "Birmingham")
// let p4 = new Person("Eddie", 75, "Mobile")
// let p5 = new Person("Sydni", 30, "Chicago")

// p1.sayHello()
// p2.sayHello()
// p3.sayHello()
// p4.sayHello()
// p5.sayHello()

 class Person {   //ES6 
    constructor (name, age, city) {  //constructors are functions. 
        this.name = name
        this.age = age;
        this.city = city;
    }

sayHello(){  
    console.log (`Hi! My name is ${this.name}. I am ${this.age} and I am from ${this.city}.`)
}
}
let p1 = new Person("Charmaine",40,"Amsterdam")
p1.sayHello()

class Vehicle {
  constructor(manufacturer, wheels) {
    this.manufacturer = manufacturer;
    this.wheels = wheels;
  }
  aboutVehicle() {
    console.log(
      `This vehicle was made by ${this.manufacturer} and it has ${this.wheels} wheels.`
    ); //hardcode that will be accessed by the children 
  }
}
class Truck extends Vehicle { // child of parent
  constructor(manufacturer, wheels, doors, hasTruckBed) {
    //calls the constructor of the parent class
    super(manufacturer, wheels); //this passes the properties from the parent class to the child, in same order
    this.doors = doors;
    this.hasTruckBed = hasTruckBed; //adds the new properties for the child
  } 
}

class Sedan extends Vehicle { //sibling of child
  constructor(manufacturer, size, mpg) {
    super(manufacturer);
    this.size = size;
    this.mpg = mpg;
  }
}
let newSedan = new Sedan("Acura", "full", 28);
newSedan.aboutVehicle()

class Motorcycle extends Vehicle {
  constructor(manufacturer, wheels, hasHandlebars, hasDoors) {
    super(manufacturer, wheels);
    this.hasHandlebars = hasHandlebars;
    this.hasDoors = hasDoors;
  }
}
let newMotorcycle = new Motorcycle("Yamaha", 2, true, false); //when using methods, reference variables
newMotorcycle.aboutVehicle();
