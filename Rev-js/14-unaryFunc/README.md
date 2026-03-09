# 1️⃣ Unary Functions

A **Unary Function** is a function that accepts **exactly one argument**.

## 🧩 Concept

In functional programming, unary functions are easier to compose and reason about.

```mermaid
graph LR
    Input[Data] -->|Arg 1| F[Unary Function]
    F --> Output[Result]
```

### 📋 Example
```javascript
const identity = (x) => x;
const square = (x) => x * x;
```

---

## 📂 Code Example
- [14-unaryFunc.js](./14-unaryFunc.js)
