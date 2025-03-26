// Basic Prototypical Inheritance

const Person = {
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

const user = Object.create(Person); // inherit from Person
user.name = 'John';
user.greet(); // Hello John


// using constructor function

function Animal(name){
    this.name = name;
}

Animal.prototype.greet = function(){
    console.log(`Hello ${this.name}`);
}

const dog = new Animal('Buddy');
dog.greet(); // Hello Buddy
console.log(dog.__proto__ === Animal.prototype); // true

// Inheriting from Another Constructor Function

function Dog(name, breed){
    Animal.call(this, name); // call the parent constructor function
    this.breed = breed;
}

// inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.fly = function(){
    console.log(`${this.name} is flying`);
}

const myDog = new Dog('Eagle', 'Golden');

myDog.greet(); // Hello Eagle
myDog.fly(); // Eagle is flying