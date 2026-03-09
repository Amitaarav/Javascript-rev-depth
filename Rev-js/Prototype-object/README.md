# 🧬 Prototype Objects & Factory Functions

Creating objects efficiently often requires using prototypes to share methods among multiple instances, saving memory and improving performance.

## 🏗️ The Factory Pattern

Instead of defining methods directly in a constructor or factory, we link the new object to a "Task" or "Prototype" object.

```mermaid
graph TD
    S1[Student 1] -->|Prototype Link| P[studentTask: checkAge]
    S2[Student 2] -->|Prototype Link| P
    S3[Student 3] -->|Prototype Link| P
    Note right of P: Logic is shared, not copied!
```

## 🛠️ Usage with `Object.create()`

`Object.create(proto)` creates a new object with the specified prototype object and properties.

```javascript
const studentTask = {
    checkAge: function() { ... }
};

function createStudent(name, age) {
    const obj = Object.create(studentTask);
    obj.name = name;
    obj.age = age;
    return obj;
}
```

---

## 📂 Code Example
- [Prototype-object.js](./Prototype-object.js)
