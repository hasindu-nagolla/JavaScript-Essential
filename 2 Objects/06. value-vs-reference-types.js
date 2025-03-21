// =============================================================================
// In JS, data types are divided into two categories:
// => value types (primitives)
// => reference types (objects)
// =============================================================================

// =============================================================================
// Value types (primitives)
// => Takes actual values in memory.
// => When assign to another variable, a copy of the value is created.
// =============================================================================

// value types (primitives) are,
// => Number
// => String
// => Boolean
// => Symbol
// => undefined
// => null
// => BigInt

let x = 10;
let y = x; // Copy of x is created and assigned to y
x = 20; // Changing x does not affect to the y

console.log(x); // 20
console.log(y); // 10 (unchanged)

// =============================================================================
// Reference types (objects)
// Reference types store a reference (memory address) instead of the actual value.
// When assign to another variable, both variables point to the same memory address.
// =============================================================================

// reference types (objects) are,
// => Object
// => Array
// => Function

let obj1 = { name: "Hasii" };
let obj2 = obj1; // Both obj1 and obj2 point to the same memory address

obj1.name = "John"; // Modification to obj1 will affect to the obj2
console.log(obj1.name); // John
console.log(obj2.name); // John