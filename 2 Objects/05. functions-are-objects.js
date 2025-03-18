// =============================================================================
// Functions are objects meaning they can be,
// => Assigned to variables
// => Passed as arguments to other functions
// => Returned from other functions
// => Have properties and methods like objects
// =============================================================================


// =============================================================================
// Assigning a function to a variable
// =============================================================================

function greet(){
    return "Hello!";
}

const greetMe = greet;
console.log(greetMe()); // Hello!

// =============================================================================
// Add properties and methods to a function
// =============================================================================

function sayName() {
    console.log(this.name);
}

const user = { name: "Hasii" };
sayName.call(user);

// =============================================================================
// Pass a function as an argument to another function
// =============================================================================

function me(){
    console.log("My name is Hasii");
}

function executeFunc(fn){
    fn(); // Calling the function that is passed as an argument
}

executeFunc(me); // My name is Hasii

// =============================================================================
// Function can return another function
// =============================================================================

function outerFunction(){
    return function innerFunction(){
        console.log("Inner function is executed");
    }
}

const myFunc = outerFunction();
myFunc(); // Inner function is executed

