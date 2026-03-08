/// call invoke function immediately, allowing you to specify the value of this and pass arguments individuall(comma, separated)


var employee1 = {
    firstName: " Amit ",
    lastName: " Kumar ",
}
var employee2 = {
    firstName: " Sudheer ",
    lastName: " Kumar ",
}
function invite(greeting1, greeting2){
    console.log(greeting1 + " " + this.firstName + " " + this.lastName + " " + greeting2);
}
invite.call(employee1, "Hello!", "Welcome to the team!"); // Hello Amit Kumar Welcome to the team!
invite.call(employee2, "Hi!", "Glad to have you!"); // Hi Sudheer Kumar Glad to have you!

// Using apply to invoke the function with an "array of arguments"
// Takes an array as an arguments adn it work same as call()

// funct.apply(thisArg, [argsArray])

invite.apply(employee1, ["Hello!", "Welcome to the team!"]); // Hello Amit Kumar Welcome to the team!
invite.apply(employee2, ["Hi!", "Glad to have you!"]); // Hi Sudheer Kumar Glad to have you!

// Using bind to create a new function with a specific this value
// bind() returns a new function, allowing you to set the value of this and pass arguments individually

// It does not invoke the function immediately, but instead returns a new function that can be called later.

// We can preset the value of this and also pass arguments later when we call the new function

var inviteEmployee1 = invite.bind(employee1)
var inviteEmployee2 = invite.bind(employee2);

inviteEmployee1("Hello!", "Welcome to the team!"); // Hello Amit Kumar Welcome to the team!
inviteEmployee2("Hi!", "Glad to have you!"); // Hi Sudheer Kumar Glad

var inviteEmployee1WithArgs = invite.bind(employee1, "Hello!", "Welcome to the team!");
inviteEmployee1WithArgs(); // Hello Amit Kumar Welcome to the team!

console.log("###################################")
function greet(city){
    console.log(`Hi I'm ${this.name} from ${city}`)
}
const user = {name: "Amit"}

greet.call(user, "Delhi Call")

greet.apply(user,["Delhi Apply"]);

const greetAmit = greet.bind(user, "Delhi Bind");
greetAmit();

// Borrowing method
const person1 = { name: "Amit"}
const person2 = { name: "Rahul"}

function greetPerson(){
    console.log(this.name)
}
greetPerson.call(person1)
greetPerson.call(person2)

function multiply(a, b){
    return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5));