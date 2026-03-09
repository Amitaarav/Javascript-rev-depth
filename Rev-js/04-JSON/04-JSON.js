// JSON: JavaScript Object Notation

//1. Parsing JSON string to JavaScript object

const jsonString = '{"name": "Sudheer", "age": 30, "isActive": true}';
const jsonObject = JSON.parse(jsonString); // Converts JSON string to JavaScript object
console.log(jsonObject);
console.log(jsonString)

console.log(typeof(jsonObject)); // object
console.log(typeof(jsonString)); // string


// stringification: Converting JavaScript object to JSON string
const jsonStrToObj = JSON.stringify(jsonObject); // Converts JavaScript object to JSON string
console.log(jsonStrToObj);