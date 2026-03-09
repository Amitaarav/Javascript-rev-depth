# ✨ Pure Functions

A **Pure Function** is a function that:
1.  Always returns the same output for the same input.
2.  Has **no side effects** (doesn't modify external state/variables).

## ⚖️ Comparison

| Feature | Pure Function | Impure Function |
| :--- | :--- | :--- |
| **Determinism** | Yes | No |
| **Side Effects** | No | Yes |
| **Reliability** | High | Lower |

```mermaid
graph TD
    Input[Input] --> F[Pure Function]
    F --> Output[Deterministic Output]
    Note right of F: No external interference
```

---

## 📂 Code Example
- [16-pureFunction.js](./16-pureFunction.js)
