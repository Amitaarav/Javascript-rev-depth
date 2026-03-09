# 📞 Call, Apply, and Bind

These three methods are used to control the value of `this` when executing functions.

## 🛠️ Comparison Table

| Method | Invocation | Arguments | Returns |
| :--- | :--- | :--- | :--- |
| **`call()`** | **Immediate** | Individual (comma-separated) | Result of function |
| **`apply()`** | **Immediate** | **Array** of arguments | Result of function |
| **`bind()`** | **Later** | Individual (comma-separated) | **New Function** |

---

## 🚦 Visualizing the Difference

```mermaid
graph TD
    F[Function] -->|call| C(Executes Now: this + args)
    F -->|apply| A(Executes Now: this + [args])
    F -->|bind| B(Returns New Function: this bound)
```

---

## 💡 Use Cases

1.  **Method Borrowing**: Using a method from one object on another object.
2.  **Partial Application**: Pre-filling arguments of a function using `bind`.
3.  **Context Preservation**: Ensuring `this` points to the correct object in callbacks (though arrow functions are now preferred for this).

---

## 📂 Code Example
- [03-call-apply-bind.js](./03-call-apply-bind.js)
