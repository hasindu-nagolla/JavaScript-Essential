// =================================================================================================
// Constructor function is a special type of function that is used to create an object.
// It uses "new" keyword to instantiate an object.
// Function name should start with a capital letter.
// =================================================================================================

function Programmer(name, age, preferredLanguage) {
    this.name = name;
    this.age = age;
    this.preferredLanguage = preferredLanguage;
    this.writeCode = function () {
        console.log(`${this.name} is writing code in ${this.preferredLanguage}`);
    };
    this.drinkCoffee = function () {
        console.log(`${this.name} is drinking coffee, while writing code in ${this.preferredLanguage}`);
    };
}

const newProgrammer = new Programmer('John', 30, 'JavaScript'); // Instantiating an object
console.log(newProgrammer); 
newProgrammer.writeCode(); // Calling method of the object  "newProgrammer"