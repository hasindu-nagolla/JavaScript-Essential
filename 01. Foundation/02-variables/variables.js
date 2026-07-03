// Example Task 01 - predict output

var x = 10;
var x = 20;

// it will be 20 bcz `var` allows redeclaration and reassignment
console.log(x);

// Example Task 02 - predict output

let y = 10;
y = 30;

// it will be 30 bcz `let` allows reassignment but not redeclaration
console.log(y);

// Example Task 03 - predict output

const person = {
  name: "Hasindu",
};

person.name = "Lakshan";
// it will be "Lakshan" bcz `const` allows object properties to be changed but not the object itself
console.log(person.name);

/*
think person is a address of a home (reference) and the name is a property of that home.
We can change the property but cannot assign a new address.
*/

// Example Task 04 - scope

if (true) {
  var a = 1;
  let b = 2;
  const c = 3;

  // console.log(b)
  // console.log(c)
}

// it will be 1 bcz `var` is function scoped and ignores block scope
console.log(a);

// it will be ReferenceError bcz `let` is block scoped
console.log(b);

// it will be ReferenceError bcz `const` is block scoped
console.log(c);
