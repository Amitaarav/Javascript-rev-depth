/**
 * Spread: Expands values
 * Rest: Collect values
 */

const arr1 = [1, 2, 3,]
const arr2 = [...arr1, 4, 5]
console.log(arr2)

const user = { name: "amit", age: 21};
const copy = { ...user };
console.log(copy)
const copy2 = Object.assign({}, user);
console.log(copy2)

const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(rest)
console.log(first)

// Shallow copy
const user1 = {
    name: "Amit",
    address: { city:"Delhi"}
}

const copy3 = {...user1}; // shallow copy from spread operator
copy3.address.city = "Allahabad"

console.log(copy3)
console.log(user1)

function greet(city) {
  console.log(`Hi I'm ${this.name} from ${city}`);
}

const user3 = { name: "Amit" };

greet.call(user3, "Delhi");