# ⚡ IIFE (Immediately Invoked Function Expression)

An **IIFE** is a function that runs as soon as it is defined.

## 🏗️ Structure

```mermaid
graph LR
    Def[Function Definition] -->|Invoke ()| Exec[Immediate Execution]
```

### 📋 Why use IIFE?
1.  **Avoid Global Pollution**: Variables inside an IIFE don't leak into the global scope.
2.  **Data Privacy**: Create private variables that can't be accessed from the outside.

```javascript
(function() {
    var privateMsg = "I am private";
})();
console.log(privateMsg); // ReferenceError
```

---

## 📂 Code Example
- [20-IIFE.js](./20-IIFE.js)
