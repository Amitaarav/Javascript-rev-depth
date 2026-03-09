# ⏳ `let` Hoisting & TDZ

While `var` is hoisted and initialized as `undefined`, `let` and `const` are hoisted but **not initialized**.

## 🚧 Temporal Dead Zone (TDZ)

The **TDZ** is the period between the start of the scope and the actual declaration of the variable.

```mermaid
graph TD
    Start[Scope Start] -->|TDZ| Decl[let x = 10]
    Decl -->|Access allowed| End[Scope End]
    Note right of Start: Accessing 'x' here throws ReferenceError
```

### 📋 Comparison
- **`var`**: Hoisted + Initialized (`undefined`).
- **`let/const`**: Hoisted + **Uninitialized** (Throws Error).

---

## 📂 Code Example
- [18-letHoisting.js](./18-letHoisting.js)
