let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'HdGt8@example.com'
}

let firstName = person.firstName;
let lastName = person.lastName; 
let age = person.age;
let email = person.email;

let { firstName: fName, lastName: lName, age: Age, email: Email } = person;
// The identifier before the colon (:) is the property of the object and the identifier after the colon is the variable.
console.log(fName, lName, Age, Email);