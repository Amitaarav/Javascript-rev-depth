# 👮 JavaScript Strict Mode

**Strict Mode** is a way to opt in to a restricted variant of JavaScript. It makes debugging easier by turning silent errors into real errors and preventing some "unpredictable" behaviors.

## 🚀 How to Enable

You can enable strict mode at the top of a file or a specific function.

```javascript
"use strict";
// Entire script is in strict mode
```

---

## 🧐 What does it change?

```mermaid
mindmap
  root((Strict Mode))
    Errors
      "Turns silent errors into Throws"
      "Prevents accidental globals"
      "Throws on deleting non-deletable props"
    This Keyword
      "this is undefined in global functions"
      "No more window object leak"
    Security
      "Prevents using eval() in a way that leaks variables"
      "Prohibits with statements"
    Future-Proofing
      "Reserved words (private, protected, interface)"
```

---

## 🚦 Key Benefits

1.  **Prevents Global Variables**: In normal mode, `x = 10` (without `let/var`) creates a global variable. In strict mode, it throws a `ReferenceError`.
2.  **Optimizes Performance**: High-performance JS engines can sometimes optimize strict mode code better because it's more predictable.
3.  **Unique Parameters**: Prevents duplicate parameter names (`function(a, a) { ... }`).

---

## 📂 Related Files
- [Strict-mode/](file:///c:/Users/USER/Desktop/100xBootcamp/100xDevs/Javascript/Strict-mode/) - Code examples.
- [Details_var_let/](file:///c:/Users/USER/Desktop/100xBootcamp/100xDevs/Javascript/Details_var_let/) - Scoping differences.
