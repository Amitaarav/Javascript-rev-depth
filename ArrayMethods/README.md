# 🔢 Array Methods in JavaScript

Arrays are one of the most powerful data structures in JavaScript. Modern JS developers use **Functional Programming** patterns to manipulate data efficiently.

## 🛠️ The Big Three: Map, Filter, Reduce

These methods are the foundation of clean, readable data transformation.

```mermaid
graph TD
    A[Input: Array] --> B{Operation}
    B -->|Map| C[New Array: Same Length, Different Values]
    B -->|Filter| D[New Array: Shorter Length, Same Values]
    B -->|Reduce| E[Single Value: Number, Obj, or Array]
```

---

## 📋 Quick Comparison

| Method | Returns | Changes Input? | Typical Use Case |
| :--- | :--- | :--- | :--- |
| **`map()`** | New Array | No (Immutable) | Transforming data (e.g., doubling numbers). |
| **`filter()`** | New Array | No (Immutable) | Removing unwanted items. |
| **`reduce()`** | Single Value | No (Immutable) | Calculating sums, totals, or complex objects. |
| **`forEach()`** | `undefined` | Yes (Side Effects) | Just iterating (like a `for` loop). |

---

## 🧪 Diagram: The Reduce Flow

`Reduce` is often the hardest to grasp. It "squashes" an array into a single result using an **accumulator**.

```mermaid
sequenceDiagram
    participant A as Accumulator (Result)
    participant C as Current Value
    participant O as Operation (+)

    Note over A: Starts at Initial Value (e.g., 0)
    A->>C: Iterate element 1
    C->>O: 0 + 5
    O->>A: New Accumulator = 5
    A->>C: Iterate element 2
    C->>O: 5 + 10
    O->>A: New Accumulator = 15
```

---

## 🚩 Mutating vs Non-Mutating Methods

Be careful! Some methods change the original array (**In-Place**), while others return a copy (**Immutable**).

-   **Mutating (Avoid in React!)**: `push`, `pop`, `splice`, `reverse`, `sort`.
-   **Non-Mutating (Safe)**: `map`, `filter`, `slice`, `concat`, `reduce`.

---

## 📂 Related Files
- [Map-Filter-Reduce/](file:///c:/Users/USER/Desktop/100xBootcamp/100xDevs/Javascript/Map-Filter-Reduce/) - Deep dive into big-three.
- [ArrayMethods/](file:///c:/Users/USER/Desktop/100xBootcamp/100xDevs/Javascript/ArrayMethods/) - Basics like length, push, etc.
- [05-Slice.js](file:///c:/Users/USER/Desktop/100xBootcamp/100xDevs/Javascript/Rev-js/05-Slice.js) - Examples of slicing.
