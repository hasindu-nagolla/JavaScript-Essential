// ==============================================================================================
// Constructor Property is a reference to the function that created the instance.
// Every JS object has a constructor property by default that points to its constructor function.
// It helps to identify the type of object.
// ==============================================================================================

// Constructor Property in user-defined objects

function Person(name, age){
    this.name = name;
    this.age = age;
}

const person_1 = new Person("Hasii", 23);
console.log(person_1.constructor); // [Function: Person]

console.log(person_1.constructor === Person); // Check if constructor property points to the constructor function

// Constructor Property in built-in objects

const arr = [1, 2, 3, 4, 5];
console.log(arr.constructor);

const obj = {};
console.log(obj.constructor); 

const str = "Hello";
console.log(str.constructor);