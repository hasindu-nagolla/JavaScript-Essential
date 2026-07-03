# Variables in JavaScript

A variable is simply a named memory location.

## Example

```javascript
let age = 24;
```

Think:

```text
age → memory address → 24
```

JavaScript stores data and gives you a label to access it.

---

# Three ways to declare variables

JavaScript has:

* `var`
* `let`
* `const`

But they behave differently.

This is critical.

---

# 01. var (old way)

## Example

```javascript
var name = "Hasindu";
```

### Characteristics

* function-scoped
* hoisted
* can be redeclared
* can be reassigned

## Example

```javascript
var x = 10;
var x = 20;

console.log(x);
```

Output:

```javascript
20
```

Why dangerous?

Because accidental redeclaration causes bugs.

## Scope example

```javascript
if (true) {
    var age = 24;
}

console.log(age);
```

Output:

```javascript
24
```

Because `var` ignores block scope.

This is dangerous.

---

# 02. let (modern)

## Example

```javascript
let score = 90;
```

### Characteristics

* block-scoped
* hoisted (but TDZ)
* cannot redeclare in same scope
* can reassign

## Example

```javascript
let score = 50;
score = 100;

console.log(score);
```

Output:

```javascript
100
```

## Block scope

```javascript
if (true) {
    let x = 5;
}

console.log(x);
```

Output:

```javascript
ReferenceError
```

Good. Safer.

---

# 03. const (best default)

## Example

```javascript
const PI = 3.14;
```

### Characteristics

* block-scoped
* cannot reassign
* cannot redeclare

## Example

```javascript
const age = 24;
age = 25;
```

Output:

```javascript
TypeError
```

---

# Important confusion: const with objects

This confuses many people.

## Example

```javascript
const user = {
    name: "Hasindu"
};

user.name = "Lakshan";

console.log(user);
```

Works.

Why?

Because:

`const` protects the variable reference.

Not the object contents.

The reference stays the same.

Object internals can change.

Very important.

---

# Industry rule

Use:

**const by default**

```javascript
const username = "Hasindu";
```

**let when value changes**

```javascript
let count = 0;
count++;
```

**avoid var**

Unless maintaining old code.

---

# Variable naming best practices

Good:

```javascript
const userName = "Hasindu";
const totalPrice = 1000;
const isLoggedIn = true;
```

Bad:

```javascript
const x = "Hasindu";
const a = 1000;
```

Production code must be readable.

Readable code = maintainable code.

---

# Temporal Dead Zone (preview)

## Example

```javascript
console.log(a);
let a = 10;
```

Error.

Even though `let` is hoisted.

Because of TDZ.

We will cover deeply in hoisting lesson.

---

# Real-world engineering importance

Variables affect:

* State management in React
* API response handling
* Loop counters

## Examples

```javascript
const [count, setCount] = useState(0);
```

```javascript
const data = await fetch(...);
```

```javascript
for (let i = 0; i < 10; i++) {}
```
