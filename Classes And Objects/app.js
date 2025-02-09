// direct way of creating objects
const student = {
    fullName: 'John Doe',
    age: 25,
    course: 'Computer Science',

    // method
    getStudentInfo: function() {
        return `Name: ${this.fullName}, Age: ${this.age}, Course: ${this.course}`;
    },
    printStudentInfo: function() {
        console.log(this.getStudentInfo());
    }
};

student.fullName;
student['age'];
student.printStudentInfo();

/* every object in JavaScript has a prototype
prototype is also an object
all objects inherit their properties and methods from their prototype
Object.prototype is on the top of the prototype chain
*/

const employee = {
    calcTax(){
        console.log('Calculating tax...');
    }
};

const tom = {
    name: 'Tom',
    age: 25, 
};

// to set the prototype of tom to employee, we use __proto__ property
// employee will be the prototype of tom
tom.__proto__ = employee;
tom.name;
tom.calcTax();

const bob ={
    name: 'Bob',
    age: 30,
    // defining prototype of bob as key value pair
    __proto__: employee,
    calcTax(){
        console.log('Calculating tax for Bob...');
    },
};
// here the calcTax method of bob will be called
bob.calcTax();

class Car{
    name = 'BMW';
    engine = 'V8';
    color = 'Red';

    // constructor(){
    //     console.log('Car created');
    // }
    constructor(name, engine, color){
        this.name = name;
        this.engine = engine;
        this.color = color;
    }


    start(){
        console.log(this.name + 'Car started');
    }
    stop(){
        console.log('Car stopped');
    }
};

let newBMW = new Car("BMW", "V8", "Red");
newBMW.start();

let newAudi = new Car("Audii", "V6", "Black");

// Inheritance

class Animal{
    name;
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(this.name + ' is eating');
    }
}

let lion = new Animal('Lion');
lion.eat(); 

class Dog extends Animal{
    // breed; // not needed to define breed here as it is already defined in the constructor
    constructor(name, breed){
        super(name); // invoking the constructor of the parent class
        this.breed = breed;
    }
    bark(){
        console.log('Bark');
    }
    eat(){
        console.log("Child Dog is eating");
    }
}

let bulldog = new Dog('Dog', 'Bulldog');
bulldog.eat();
bulldog.bark();


// Encapsulation
// Encapsulation is the bundling of data and the methods that operate on that data into a single unit
class Employee{
    #salary = 2000; // private field
    #age = 30;
    #getSalary(){
        return this.#salary;
    }
    getAge(){
        return this.#age;
    }
}

let emp = new Employee();
console.log(emp.getAge());
// console.log(emp.#salary); // error

// Abstraction
// Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of the object
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

let person = new Person('John', 25);
console.log(person.getDetails());

// Polymorphism
// Polymorphism is the ability of an object to take on many forms
class Bird{
    fly(){
        console.log('Bird is flying');
    }
}

class Fish{
    swim(){
        console.log('Fish is swimming');
    }
}

let bird = new Bird();
let fish = new Fish();
bird.fly();
fish.swim();

// Polymorphism in action
function makeAnimalFly(animal){
    animal.fly();
}

makeAnimalFly(bird);
// makeAnimalFly(fish); // error

// Static methods
// Static methods are called on the class itself, not on the instances of the class
class MathOperations{
    static add(a, b){
        return a + b;
    }
    static subtract(a, b){
        return a - b;
    }
}

console.log(MathOperations.add(5, 3));
console.log(MathOperations.subtract(5, 3));

// Error Handling
// try, catch, finally
try{
    console.log('Start of try block');
    
    // throw new Error('Something went wrong');
    b+c;
    console.log('End of try block');


}
catch(error){
    console.log('Error: ' + error.message);
}
finally{
    console.log('Finally block');
}
