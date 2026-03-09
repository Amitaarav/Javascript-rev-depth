# 📄 JSON (JavaScript Object Notation)

JSON is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.

## 🔄 Core Operations

JavaScript provides two main methods for working with JSON:

1.  **`JSON.parse()`**: Converts a JSON **string** into a JavaScript **object**.
2.  **`JSON.stringify()`**: Converts a JavaScript **object** into a JSON **string**.

```mermaid
graph LR
    S[String: '"{"name": "Amit"}"'] -->|JSON.parse| O[Object: { name: 'Amit' }]
    O -->|JSON.stringify| S
```

---

## 🧪 Data Types
- `typeof(jsonObject)` -> `object`
- `typeof(jsonString)` -> `string`

---

## 📂 Code Example
- [04-JSON.js](./04-JSON.js)
