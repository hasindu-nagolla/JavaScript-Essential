// Example Task 01 - predict output

let a = 10;
let b = a;

b = 20;

console.log(a); // will be 10
console.log(b); // will be 20

// Example Task 02 - predict output

const user1 = {
  name: "Hasindu",
};

const user2 = user1;

user2.name = "Lakshan";

console.log(user1.name); // will be "Lakshan", bcz both user1 and user2 point to the same reference in memory

// Example Task 03 - predict output

const object1 = { value: 1 };
const object2 = { value: 1 };

console.log(object1 === object2); // will be false, bcz both objects are different references in memory.

// Example Task 04 - predict output

const array1 = [1, 2];
const array2 = [...array1];

array2.push(3);

console.log(array1); // will be [1, 2]
console.log(array2); // will be [1, 2, 3], bcz array2 is a shallow copy of array1

// Task 05 - predict output

const user = {
  profile: {
    city: "Kandy",
  },
};

const copy = { ...user };

copy.profile.city = "Colombo";

console.log(user.profile.city); // will be "Colombo", bcz both user.profile and copy.profile point to the same nested object (profile object). This becomes very important in React state updates.

// Practical

const student = {
  name: "John",
  marks: [80, 90],
};

// 01. create a safe copy
const studentCopy = { ...student };

// 02. change copied name and marks
studentCopy.name = "Doe";
studentCopy.marks = [20, 20];

// check copied
console.log(studentCopy.name);
console.log(studentCopy.marks);

// check original
console.log(student.name);
console.log(student.marks);
