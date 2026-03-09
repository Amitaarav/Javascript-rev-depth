# 🍛 Function Currying

This directory focuses on practical implementations of function currying.

## 🧩 Concept Recap

Currying is converting a function of $N$ arguments into $N$ functions of 1 argument.

```mermaid
graph LR
    A[f(a,b)] -->|Curry| B[f(a)]
    B -->|Return| C[f(b)]
```

### 📋 Example
```javascript
const add = a => b => a + b;
const addFive = add(5);
console.log(addFive(10)); // 15
```

---

## 📂 Code Example
- [fun-curr.js](./fun-curr.js)
