# 🚀 Hoisting

**Hoisting** is the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.

## 🏗️ Hoisting Rules

| Type | Hoisted? | Initialized? |
| :--- | :--- | :--- |
| **`var`** | ✅ Yes | `undefined` |
| **`function`** | ✅ Yes | **Full function definition** |
| **`let / const`** | ✅ Yes | **Uninitialized (TDZ)** |

```mermaid
graph TD
    Start[Execution Context Created] --> Comp[Compilation Phase]
    Comp -->|Hoisting| Top[Declarations moved to top]
    Top --> Run[Execution Phase]
```

---

## 📂 Code Example
- [26-hoisting.js](./26-hoisting.js)
