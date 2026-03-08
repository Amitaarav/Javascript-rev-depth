let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'HdGt8@example.com'
}

const {firstName, lastName, age, email} = person;
// let firstName = person.firstName;
// let lastName = person.lastName; 
// let age = person.age;
// let email = person.email;
person.gender = "male"
const { gender: g = "uknown" } = person
console.log(g)

let { firstName: fName, lastName: lName, age: Age, email: Email } = person;
// The identifier before the colon (:) is the property of the object and the identifier after the colon is the variable.
console.log(fName, lName, Age, Email);

// Nested destructuring
const user = {
    name:"Amit",
    address: { city: "Delhi"}
};

const {address: {city}} = user;

console.log(city)

// Rest Properties

const { firstName1, ...rest} = person;
console.log(rest)

// Evaluation order
// Rule 1: destructuring happens left to right
// Rule 2: Default value used only if property is undefined
const obj = { a: 1, b: 2};
const {
    a = b, // obj.a exists? --> yes --> obj.a = 1, b is ignored, at this moment b is not declared yet
    b = 10 // obj.b exists? --> yes --> obj.b = 2, default b = 10 is ignored
} = obj;
// here property a and b exists, so default will not run
console.log(a, b); // 1, 2
// 

// const obj1 = { b1: 2};
// const { a1 = b1, b1 = 10 } = obj1; // obj1.a1 missing


// pseudo steps
// let a2, b2;

// property a
// if (obj1.a1 !== undefined) {
//   a2 = obj1.a1;
// } else {
//   a2 = b1; // b1 not ready yet
// }

// // property b
// if (obj.b1 !== undefined) {
//   b2 = obj.b1;
// } else {
//   b2 = 10;
// }

/**
 * Object destructuring follows:
 * 1. Step 1: Create Binding
 * 2. Step 2: Evaluate properties left --> right
 * 3. Step 3: Assign values
 */

const arr = [ , 2];
const [a4 = b3, b3 = 10] = arr; // Cannot access 'b3' before initialization

console.log(a4, b3);

// order change
const [b4 = 10, a5 = b4] = arr;
console.log(a5, b4); //b4 = 10, 10 

