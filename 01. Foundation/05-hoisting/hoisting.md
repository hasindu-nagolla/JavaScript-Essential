# Hoisting

Hoisting means, JavaScript moves declarations to the top of their scope during the memory creation phase. JS does not physically move code. It prepares memory before execution. That is hoisting.

---

# Example 1 — `var`

```javascript
console.log(a);

var a = 10;
```

What happens?

### Memory phase:

```javascript
a = undefined
```

### Execution phase:

Line 1:

```javascript
console.log(a);
```

Output:

```javascript
undefined
```

Then:

```javascript
a = 10
```

This is why:

`var` is hoisted with `undefined`.

---

# Example 2 — `let`

```javascript
console.log(x);

let x = 10;
```

Output:

```javascript
ReferenceError
```

Why? Because of:

**Temporal Dead Zone (TDZ)**

This is the time between

```text
Declaration hoisted → Initialization happens
```

During this zone, Access is forbidden.

Think:

### Memory phase:

```javascript
x = uninitialized
```

Not `undefined`. Very important.

---

# Example 3 — `const`

Same behavior.

```javascript
console.log(y);

const y = 20;
```

Output:

```javascript
ReferenceError
```

Because TDZ.

---

# Function Declaration Hoisting

Functions are fully hoisted.

## Example

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output:

```javascript
Hello
```

### Memory phase:

```javascript
greet = function definition
```

Not `undefined`. Entire function available. this is why function declarations can be called before they are defined. it is very important.

---

# Function Expression Hoisting

## Example

```javascript
sayHi();

var sayHi = function () {
    console.log("Hi");
};
```

Output:

```javascript id="y2m6kr"
TypeError
```

Why?

### Memory phase:

```javascript
sayHi = undefined
```

Execution:

```javascript
sayHi();
```

Trying to call `undefined`. so it will cache.

---

# Arrow Function Hoisting

Same.

## Example

```javascript
run();

const run = () => {
    console.log("Run");
};
```

Output:

```javascript
ReferenceError
```

Because `const` + TDZ.

---

# Hoisting inside Function Scope

## Example

```javascript
function test() {
    console.log(a);
    var a = 100;
}

test();
```

Output:

```javascript
undefined
```

Inside function:

### Memory phase:

```javascript
a = undefined
```

Function scope hoisting.

---

# Variable Shadowing + Hoisting

## Example

```javascript
var x = 1;

function test() {
    console.log(x);
    var x = 2;
}

test();
```

Output:

```javascript
undefined
```

Not `1`. Why?

Inside function, Own `x` is hoisted first, shadows global `x`. So it will print `undefined`.

---

# Real-world importance

Hoisting affects:

* Bug debugging
* Function organization
* Interview questions
* Clean code

Undefined errors often come from hoisting. nFunction declarations can be called before written.

Especially:

* `var` vs `let` hoisting
* function declaration vs function expression

---

# Best practices

Good:

```javascript
const age = 24;
console.log(age);
```

Bad:

```javascript
console.log(age);
var age = 24;
```

Works, but poor readability. Avoid relying on hoisting. So understand it and dont depend on it.