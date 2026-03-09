# 🔀 Switch Scoping

The `switch` statement in JavaScript has a unique scoping behavior when using `let` or `const`.

## 🏗️ Block Scoping in Cases

To declare variables with the same name in different `case` blocks, you **must** use curly braces `{}` to create a new block scope for each case.

```javascript
switch(x) {
    case 0: {
        let name = "Amit"; // Block scoped
        break;
    }
    case 1: {
        let name = "Sudheer"; // Valid because of new block
        break;
    }
}
```

```mermaid
graph TD
    S[Switch] --> C0{Case 0}
    S --> C1{Case 1}
    C0 --> B0[New Block {}]
    C1 --> B1[New Block {}]
```

---

## 📂 Code Example
- [19-switch.js](./19-switch.js)
