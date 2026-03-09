/**Object is collection of key value pairs + a hidden prototype link
 * {
 *  properties...
 *  [[Prototypes]] -> another object
 * 
 * }
 * 
 * that hidden prototype enables ineritance
 * 
 */


// 1. Object literal
var object = {
    name: "Sudheer",
    age: 30,
    isActive: true,
}

// object has its own properties name, age, isActive
// Prototype: object.__proto__ === Object.prototype

/**
 * Internally:
 * name
 * age
 * isActive
 * [[Prototype]] -> Object.prototype
 */

console.log(object);
console.log(typeof(object)); // object

// 2. Using new Object() , constructor
const obj2 = new Object(); // but here Object() is a built-in constructor function so we can ignore new keyword
// new Object ceates new empty object whose protype is Object.prototype
obj2.name = "Sudheer";
obj2.age = 30;
obj2.isActive = true;
console.log(obj2);
console.log(typeof(obj2));


// 3. Using Object.create() method : Prototype-Based Creation
// This method creates a new object, using an existing object as the prototype of the newly created object.
let vehicle = {
    wheels: "4",
    fuelType: "Petrol",
    color: "White"
}

let carProps = {
    type: { value: "Volkswagen"},
    model:{ value: "Golf"}
}

let car = Object.create(vehicle, carProps);
// It creates a new object:
// 1. Its prototype is vahicle
// 2. It adds properties defined in carProps
console.log(car.model);
console.log(Object.getPrototypeOf(car)); 
// Logs the vehicle object
console.log(car.wheels); // 4
console.log(car.fuelType); // Petrol