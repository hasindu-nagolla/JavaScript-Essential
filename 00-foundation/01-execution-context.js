// Explanation Task 01 - hoisting

console.log(a); // will print undefined because of hoisting, the variable is declared but not initialized yet
var a = 10;
console.log(a); // will print 10 because the variable is now initialized with the value 10

// Explanation Task 02 - function calls and execution context (call stack)

function first() {
    console.log("first")
}

function second () {
    first();
    console.log("second")
}

second();
