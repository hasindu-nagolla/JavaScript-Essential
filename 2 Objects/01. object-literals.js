// ====================================================================================================================
// Object Literals is a simple way to create objects in JavaScript using curly braces {}.
// It allows you to define key-value pairs directly within the object.
// ====================================================================================================================

let Person = {
    name: "Hasindu",
    profferedLanguage: "JavaScript",
    writeCode: function () {
        console.log(`${this.name} is writing ${this.profferedLanguage} code`);
    },
    drinkCoffee() { // shorthand method definition
        console.log(`${this.name} is drinking coffee`);
    }
}

// In this case, Person is the object. name and profferedLanguage are the properties of the object. writeCode and drinkCoffee are the methods of the object.

// Accessing object properties (2 ways) and methods
console.log(Person.name);
console.log(Person["profferedLanguage"]);

Person.writeCode();
Person.drinkCoffee();

// Delete a property from an object
delete Person.profferedLanguage;
console.log(Person);




