// 1. Object literal
var object = {
    name: "Sudheer",
    age: 30,
    isActive: true,
}

console.log(object);
console.log(typeof(object)); // object

// 2. Using new Object() , constructor
const obj2 = new Object(); // but here Object() is a built-in constructor function so we can ignore new keyword
obj2.name = "Sudheer";
obj2.age = 30;
obj2.isActive = true;
console.log(obj2);
console.log(typeof(obj2));


// 3. Using Object.create() method
// This method creates a new object, using an existing object as the prototype of the newly created object.
let vehicle = {
    wheels: "4",
    fuelType: "Petrol",
    color: "White"
}

let carProps = {
    type: {
        value: "Volkswagen",
    },
    model:{
        value: "Golf"
    }
}

let car = Object.create(vehicle, carProps);
console.log(car.model);
console.log(Object.getPrototypeOf(car)); 
// Logs the vehicle object
console.log(car.wheels); // 4
console.log(car.fuelType); // Petrol