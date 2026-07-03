# Memory Model in JavaScript

JavaScript stores values differently depending on their type.

## Main idea

There are two conceptual memory areas in JS

### 1. Stack Memory (Static Memory)

This is fast and simple memory structure and stores primitive data types (string, number, boolean, null, undefined, symbol, bigint) and function calls

### 2. Heap Memory (Dynamic Memory)

This is large and complex memory structure and stores objects, arrays, and functions.
Stores reference values. we only can access data using reference that stored in stack memory.

---

# Primitive storage

Primitives (Primitive Data Types store as values):

* string
* number
* boolean
* null
* undefined
* symbol
* bigint

## Example

```javascript
let a = 10;
let b = a;
```

Memory:

```text
a → 10
b → 10
```

They are independent copies.

If:

```javascript
b = 20;
```

Now:

```text
a → 10
b → 20
```

No effect on `a`. This is called as "copy by value". It is very important to understand.

---

# Reference storage

Objects (Objects, Arrays, Functions) live in heap. Store as reference (address)

## Example

```javascript
// user object with name property
const user = {
    name: "Hasindu"
};
```

Memory:

```text
user → reference → heap object
```

Now:

```javascript
// create another reference to the same object
const anotherUser = user;
```

Memory:

```text
user and anotherUser → same heap object
```

Both are point to the same object.

If:

```javascript
anotherUser.name = "Lakshan";
```

Then printing `user.name` will give:

```javascript
console.log(user.name);
```

Output:

```javascript
"Lakshan"
```

Why? bcz same object reference. iF you change one, the other will also change. This is called as copy by reference.

---

# Primitive comparison

## Example

```javascript
let x = 5;
let y = 5;

console.log(x === y);
```

Output:

```javascript
true
```

Because values match.

---

# Object comparison

## Example

```javascript
const a = { value: 10 };
const b = { value: 10 };

console.log(a === b);
```

Output:

```javascript
false
```

Why? Different memory references. Not the same object. This is very important interview question. When comparing objects using ===, it will check the references are same or not. Not the values inside the objects.

---

# Same reference comparison

## Example

```javascript
const obj1 = { x: 1 };
const obj2 = obj1;

console.log(obj1 === obj2);
```

Output:

```javascript
true
```

Because same reference.

---

# Arrays behave the same

## Example

```javascript
const arr1 = [1, 2];
const arr2 = arr1;

arr2.push(3);

console.log(arr1);
```

Output:

```javascript
[1, 2, 3]
```

Same reference.

---

# Common production bug

## Example

```javascript
function updateUser(user) {
    user.name = "Updated";
}

const person = { name: "John" };

updateUser(person);

console.log(person.name);
```

Output:

```javascript
"Updated"
```

Many beginners expect the original object unchanged. Its wrong. Because objects are passed by reference. If you want to avoid this, you need to create a copy of the object before passing it to the function.

---

# How to copy objects safely

## Shallow copy

Using spread operator:

```javascript
const user = { name: "Hasindu" };

// spread operator creates a shallow copy of the object
const copy = { ...user };

copy.name = "Lakshan";

console.log(user.name);
```

Output:

```javascript
"Hasindu"
```

Safe. bcz copy is independent from original object.

---

# But nested objects are tricky

## Example

```javascript
const user = {
    profile: {
        city: "Matale"
    }
};

const copy = { ...user };

copy.profile.city = "Kandy";

console.log(user.profile.city);
```

Output:

```javascript
"Kandy"
```

Because spread operator (...) creates only a shallow copy. Both user.profile and copy.profile point to the same nested object (profile object). This becomes very important in React state updates.

---

# Real-world engineering importance

This affects:

* React state
* API response manipulation
* Shared configuration objects
* Function parameters

