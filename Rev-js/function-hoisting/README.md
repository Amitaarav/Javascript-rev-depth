# 🚀 Function Hoisting

Function declarations are **fully hoisted** in JavaScript, meaning you can call them even before they are defined in the code.

## 🏗️ How it works

During the compilation phase, the JavaScript engine moves the entire function definition to the top of its scope.

```mermaid
graph TD
    A[Call: Vehicle()] --> B[Definition: function Vehicle()]
    Note over A,B: Legal due to Hoisting
```

### ⚠️ Contrast with Function Expressions
Function **expressions** (assigned to variables) are NOT hoisted in the same way. The variable might be hoisted (if using `var`), but it will be `undefined`, causing a "TypeError" if called.

```javascript
// This works
var car = new Vehicle();
function Vehicle() { ... }

// This FAILS
var car = new Truck(); // TypeError: Truck is not a constructor
var Truck = function() { ... };
```

---

## 📂 Code Example
- [function-hoisting.js](./function-hoisting.js)
