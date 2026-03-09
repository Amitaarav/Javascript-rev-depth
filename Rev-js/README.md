# 🚀 JavaScript Revision Quick Guide (`Rev-js`)

This directory contains a collection of core JavaScript concepts essential for interviews and deep understanding.

## 🏗️ Hoisting

**Hoisting** is JavaScript's default behavior of moving declarations to the top of the current scope.

```mermaid
graph TD
    A[Code Execution] --> B{Declaration Type}
    B -->|var| C[Hoisted: Initialized as 'undefined']
    B -->|let/const| D[Hoisted: Temporal Dead Zone TDZ]
    B -->|function| E[Fully Hoisted: Available for call]
```

- **TDZ (Temporal Dead Zone)**: The period between entering a scope and the variable being declared where accessing it throws a `ReferenceError`.

---

## ⚡ Higher Order Functions (HOF)

A **Higher Order Function** is a function that either:
1.  Takes a function as an argument.
2.  Returns a function.

```javascript
function multiplier(factor) {
    return function(num) {
        return num * factor;
    };
}
const double = multiplier(2); // double is a function
```

---

## 🍛 Currying

**Currying** is a technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

```mermaid
graph LR
    A["add(a, b, c)"] -->|Curry| B["add(a)(b)(c)"]
```

**Why use it?**
-   Helps in creating reusable functions (Partial Application).
-   Clean and maintainable code for configuration.

---

## 🔒 IIFE (Immediately Invoked Function Expression)

An IIFE is a function that runs as soon as it is defined.

```javascript
(function() {
    console.log("I run immediately!");
})();
```

**Use Case**: Avoiding global scope pollution and creating private variables (pre-ES6 modules).

---

## 🧠 Memoization

A technique to speed up programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

```mermaid
graph TD
    A[Call Function] --> B{Result in Cache?}
    B -->|Yes| C[Return Cached Result]
    B -->|No| D[Execute Expensive Logic]
    D --> E[Store Result in Cache]
    E --> F[Return Result]
```

---

## 📂 Key Files
- [13-higerOrderFun.js](file:///c:/Users/USER/Desktop/100xBootcamp/100xDevs/Javascript/Rev-js/13-higerOrderFun.js) - HOF examples.
- [15-currying.js](file:///c:/Users/USER/Desktop/100xBootcamp/100xDevs/Javascript/Rev-js/15-currying.js) - Currying scripts.
- [26-hoisting.js](file:///c:/Users/USER/Desktop/100xBootcamp/100xDevs/Javascript/Rev-js/26-hoisting.js) - Hoisting pitfalls.
- [25-memoization.js](file:///c:/Users/USER/Desktop/100xBootcamp/100xDevs/Javascript/Rev-js/25-memoization.js) - Implementation of memoization.
