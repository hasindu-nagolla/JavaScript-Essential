# What is Execution Context?

JavaScript does not run code line by line. It first creates an execution context and then executes the code.

It is like:

> The environment where JavaScript understands what variables exist, what functions exist, and what to execute.

## Example

```javascript
let x = 10;

function greet() {
    let y = 20;
}

greet();
```

JavaScript creates context here:

1. Global Execution Context
2. Function Execution Context (`greet`)

---

# Types of Execution Context

## 01. Global Execution Context (GEC)

It is the default or base context where your code starts its execution. It is created when your JavaScript code starts to run.

### Example

```javascript
const name = "Hasindu";
```

Here, name is stored inside the Global Execution Context.

---

## 02. Function Execution Context (FEC)

Created whenever a function is called. Each function has its own execution context.

### Example

```javascript
function test() {
    let x = 5;
}

test();
```

Calling `test()` creates a new execution context.

---

# Two Phases of Execution Context

## Phase 1: Memory Creation Phase

JavaScript scans the code first. It allocates memory before executing the code.

### Example

```javascript
console.log(a); // undefined
var a = 10;
```

Before execution, JavaScript creates memory for variable `a` and assigns it `undefined`. Then it executes the code and assigns `10` to `a`.

```javascript
a = undefined
```

Then execution starts.

Output:

```javascript
undefined
```

This is not an error because memory was allocated first.

---

## Phase 2: Code Execution Phase

JavaScript executes the code line by line.

### Example

```javascript
var x = 5;

function greet() {
    console.log("Hello");
}

greet();
```

Memory phase:

```javascript
x = undefined
greet = function reference
```

Execution phase:

```javascript
x = 5
greet()
```
