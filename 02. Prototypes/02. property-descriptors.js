// ======================================================================================================
// Property Descriptor is an object that describes the attributes of a property.
// ======================================================================================================


let user = {
    name: "hasindu",
};

const propertyDescriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(propertyDescriptor);
// in the above output,
// => value: Actual value of the property
// => writable: If false, the value of the property can't be changed
// => enumerable: If true, the property is listed in loops like for..in
// => configurable: If false, the property can't be deleted or descriptor can't be changed

// Create or modify a properties with Object.defineProperty(obj, key, descriptor)

let student = {};

Object.defineProperty(student, "name", {
    value: "Lakshan",
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(student.name); // Lakshan

student.name = "Hasindu Lakshan"; // fails silently in strict mode
console.log(student.name); // Lakshan

console.log(Object.keys(student)); // [] (because enumerable is false)
console.log(student.name) // still "Lakshan"