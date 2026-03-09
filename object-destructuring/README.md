# 🧱 Object Destructuring and Spread

**Destructuring** is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

## 🏗️ The Syntax

```mermaid
graph LR
    A[const obj = {x: 1, y: 2}] --> B{Destructure}
    B -->|"{x, y}"| C[x = 1, y = 2]
    B -->|"{x: val}"| D[val = 1]
    B -->|"{...rest}"| E[rest = {y: 2}]
```

### 1. Basic Destructuring
```javascript
const user = { name: "Antigravity", age: 25 };
const { name, age } = user;
```

### 2. Renaming Properties
```javascript
const { name: userName } = user; // Points to user.name
```

---

## 💎 Advanced Patterns

| Pattern | Description | Syntax |
| :--- | :--- | :--- |
| **Default Values** | Use if property is missing | `{ name = "Guest" }` |
| **Nested** | Pull from deep objects | `{ profile: { bio } }` |
| **Rest Operator** | Collect remaining props | `{ a, b, ...rest }` |

```mermaid
mindmap
  root((Destructuring))
    Objects
      "Renaming"
      "Defaults"
      "Nested Parsing"
    Arrays
      "Skipping Elements [, , c]"
      "Rest parameters [a, ...b]"
    Use Cases
      "Function Parameters"
      "React Props Parsing"
      "Clean Variable Swapping"
```

---

## ⚡ The Spread Operator (`...`)

While destructuring "unpacks", the **Spread Operator** "packs" or copies.

- **Merging Objects**: `const merged = { ...obj1, ...obj2 };`
- **Shallow Copy**: `const copy = { ...obj1 };` (Warning: Deep objects are not cloned!)

---

## 📂 Related Files
- [object-destructuring/](./) - Deep dive examples.
- [04-JSON.js](../Rev-js/04-JSON.js) - Serialization & parsing.
