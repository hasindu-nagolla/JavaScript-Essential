// =================================================================================================
// Constructor Prototypes allow objects created using the constructor to share methods and properties.
// This is part of the prototypal inheritance in JavaScript.

// What is a prototype?
// => every func in JS has a special property called "prototype"
// => when we use a constructor function to create an object
// => those objects inherit properties and methods from the constructor's prototype
// =================================================================================================

// Example without prototype:

function User(name, email) {
    this.name = name;
    this.email = email;

    this.login = function () {
        console.log(`${this.name} has logged in`);
    };
}

const user01 = new User("Hasindu", "hasindu@email.com");
const user02 = new User("Lakshan", "lakshan@email.com");
console.log(user01.login === user02.login); // false, because each object has its own copy

// Example with prototype:

function Student(name, age){
    this.name = name;
    this.age = age;

    Student.prototype.login = function(){
        console.log(`${this.name} has logged in`);
    }
}

const student01 = new Student("Hasindu", 25);
const student02 = new Student("Lakshan", 24);
console.log(student01.login === student02.login); // true, because both objects share the same prototype


