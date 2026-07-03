# Scope in JavaScript

Scope means where a variable can be accessed in your code.

## Example

```javascript
let name = "Hasindu";

console.log(name);
```

Works bcz `name` is in scope.

---

# Types of Scope

There are 3 main types:

* Global scope
* Function scope
* Block scope

---

# 01. Global Scope

Variables declared outside functions or blocks.

## Example

```javascript
const appName = "My App"; // this is a global variable

function showApp() {
    console.log(appName);
}

showApp();
```

Output:

```javascript
"My App"
```

Why? bcz global variables are accessible everywhere.

---

## Problem with Global Scope

Too many globals create conflicts in large codebases.

## Example

```javascript
let user = "John";
let user = "Mike";
```

Error or in large apps, one file changes another file accidentally. Bcz of this Industry rule is to minimize globals.

---

# 02. Function Scope

Variables inside a function only live there. They are not accessible outside.

## Example

```javascript
function test() {
    let age = 24;
}

console.log(age);
```

Output:

```javascript
ReferenceError
```

Because `age` only exists inside `test` function.

---

# Scope Chain (Lexical Scope)

Inner functions can access outer variables.

## Example

```javascript
function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }

    inner();
}

outer();
```

Output:

```javascript
10
```

Inner can access outer. This is very important and called as **Lexical Scope**.

---

# 03. Block Scope

Created by:

* `{}`
* `if`
* `for`
* `while`

Only with:

* `let`
* `const`

## Example

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

Because block-scoped. But:

```javascript
if (true) {
    var x = 5;
}

console.log(x);
```

Output:

```javascript
5
```

Because `var` ignores block scope as we studied earlier. This is why `var` is dangerous.

---

# Lexical Scope (very important)

JavaScript decides scope based on where code is written, not where it is called.

## Example

```javascript
function outer() {
    let name = "Hasindu";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();
```

Output:

```javascript
"Hasindu"
```

`inner` remembers outer scope. This is the base of closures.

---

# Scope Chain

JavaScript searches variables like this:

```text
Current scope → Parent scope → Global scope
```

## Example

```javascript
let a = 1;

function one() {
    let b = 2;

    function two() {
        let c = 3;
        console.log(a, b, c);
    }

    two();
}

one(); // output will be 1, 2, 3
```

Search:

```text
two() → one() → global
```
---

# Shadowing

Inner variable can override outer variable.

## Example

```javascript
let name = "Global";

function test() {
    let name = "Local";
    console.log(name);
}

test(); // output will be "Local"
console.log(name); // output will be "Global"
```

Because of different scopes.

---

# Real-world importance

Scope affects:

* Closures - cloures mean inner function remembers outer variables.
* React components - react components are functions, so they have their own scope.
* Async callbacks
* Loops

## Example (Classic bug)

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
```

Output:

```javascript
3
3
3
```

this is a scope issue. Because `var` is function-scoped, not block-scoped. So all callbacks share the same `i`. If we use `let`, it will work as expected. huge interview question.
