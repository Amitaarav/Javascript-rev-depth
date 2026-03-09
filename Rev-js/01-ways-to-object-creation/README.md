# 🏗️ Ways to Create Objects

In JavaScript, there are several ways to create and initialize objects, depending on the use case and required inheritance.

## 🛠️ The 4 Major Ways

```mermaid
mindmap
  root((Object Creation))
    Object Literals
      "const obj = {}"
      "Simple, common"
    Constructor Functions
      "new Person()"
      "Prototype sharing"
    Object.create
      "Custom Prototype"
      "No constructor code"
    ES6 Classes
      "Syntactic Sugar"
      "Cleaner syntax"
```

## ⚖️ Comparison

| Method | Syntax | Prototype Sharing |
| :--- | :--- | :--- |
| **Literals** | `const obj = {}` | Default `Object.prototype` |
| **Constructors** | `function P() {}` | Shares `P.prototype` |
| **Object.create** | `Object.create(proto)` | Shares explicit `proto` |
| **Classes** | `class C {}` | Shares `C.prototype` |

---

## 📂 Code Example
- [obj.js](./obj.js)
