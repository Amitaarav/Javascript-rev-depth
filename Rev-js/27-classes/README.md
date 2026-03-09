# 🏛️ ES6 Classes

In ES6, JavaScript classes were introduced as **syntactic sugar** over the existing prototype-based inheritance. They don't introduce a new object-oriented inheritance model but provide a much cleaner and more familiar syntax for creating objects and dealing with inheritance.

## 🏗️ Key Features

- **Class Declaration**: `class Person { ... }`
- **Constructor**: A special method for creating and initializing an object created with a class.
- **Methods**: Functions defined inside the class (shorthand syntax).

```mermaid
graph LR
    C[Class: Person] -->|sugar| P[Prototype Pattern]
    C -->|constructor| I[Instance]
```

## ⚖️ Class vs Prototype

While they look like "Classes" from Java or C++, they are still prototypes under the hood.

```mermaid
graph TD
    A[class Student] -->|extends| B[class Person]
    B -->|syntactic sugar| C[Person.prototype]
    A -->|syntactic sugar| D[Student.prototype]
    D -->|links to| C
```

---

## 📂 Code Example
- [27-classes.js](./27-classes.js)
