// =================================================================
// Adding Properties
// =================================================================

// Using dot notation
let person = { name: "hasii" };
person.age = 25;
console.log(person); // {name: "hasii", age: 25}

// Using square bracket notation
let car = { brand: "Toyota" };
car["color"] = "black";
console.log(car);

// Using object.assign() method
let mobile = {model: "Samsung"};
Object.assign(mobile, {year: 2020, color: "black"});
console.log(mobile);

// Using spread operator {...obj}
let computer = {brand: "Dell"};
computer = {...computer, year: 2021, color: "silver"};
console.log(computer);

// =================================================================
// Updating Properties
// =================================================================

let myDetails = {name: "Hasindu", age: 25};
myDetails.age = 23;
console.log(myDetails);

// =================================================================
// Removing Properties
// =================================================================

// Using delete keyword
let myCar = {name: "Toyota", model: "Corolla"};
delete myCar.model;
console.log(myCar); // {name: "Toyota"}

// Using object destructuring
let student = {name:"hasindu", age:23}
let{age, ...newStudent} = student; // Creating a new object without age property
console.log(newStudent); // {name: "hasindu"}



// Summary:
// => Add Property: obj.key = value or obj["key"] = value
// => Update Property: obj.key = newValue
// => Remove Property: delete obj.key or const {key, ...newObj} = obj
