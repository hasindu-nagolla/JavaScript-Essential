// Example Task 01 - predict output

let x = 10;

function test() {
  console.log(x);
}

test(); // will be 10

// Example Task 02 - predict output

function test() {
  let y = 20;
}

//console.log(y); // ReferenceError, bcz let is function scoped

// Example Task 03 - predict output

if (true) {
  let a = 1;
  const b = 2;
  var c = 3;
}

console.log(c); // will be 3 bcz var is function scoped and ignores block scope
console.log(a); // will be ReferenceError bcz let is block scoped
console.log(b); // will be ReferenceError bcz const is block scoped

// Example Task 04 - predict output

let name = "Global";

function outer() {
  let name = "Outer";

  function inner() {
    let name = "Inner";
    console.log(name);
  }

  inner();
}

outer();

// Example Task 05 - predict output

let a = 1;

function one() {
  let b = 2;

  function two() {
    console.log(a, b);
  }

  two();
}

one();

// Practical Task

// 01. create function createGreeting(name), returns another func and when called const greet = createGreeting("Hasindu"); greet();. should be out hello hasindu

function createGreeting(name) {
  return function () {
    console.log("Hello " + name);
  };
}

const greet = createGreeting("Hasindu");
greet();
