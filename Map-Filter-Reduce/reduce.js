// reduce is used to reduce the array to a single value
// reduce takes two arguments
// 1. callback function
// 2. initial value

// reduce is used to reduce the array to a single value 


// signature: arr.reduce(callback, initial value)
// callback receives: (accumulator, currentValue, currentIndex, array) => nextAccumulator

const arr = [1, 2, 3, 4, 5];

function sum(prevResult, currentValue){
    console.log(`prevResult: ${prevResult}, currentValue: ${currentValue}`);
    return prevResult + currentValue;
}

const result = arr.reduce(sum, 0);

console.log("Result: ",result);

/**
 * Cart -> [iphone {price: 699, name: "Iphone"}, macbook {price: 1299, name: "Macbook"}, airpods {price: 199, name: "Airpods"}]
 * 
 */

const cart = [
    {price: 100000, name: "Iphone"}, 
    {price: 200000, name: "Macbook"}, 
    {price: 20000, name: "Airpods"}
]

function totalPrice(prevResult, currentValu){
    console.log(`prevResult: ${JSON.stringify(prevResult)}, currentValue: ${JSON.stringify(currentValu)}`);
    let newPrice = prevResult.price + currentValu.price;
    return {price: newPrice};
}

const cartTotal = cart.reduce(totalPrice);
console.log("Cart Total",cartTotal);

/**
 * Rule 1. Always pass initial value
 * Rule 2. Accumulator type defines result type
 */

const total = cart.reduce((acc, item)=> acc + item.price * 0.9, 0);

console.log("Total after discount: ",total);

// Object Grouping
const users = [
  {name: "Amit", role: "admin"},
  {name: "Rahul", role: "user"},
  {name: "Neha", role: "admin"}    
]

const grouped = users.reduce((acc, user)=> {
    acc[user.role] ??= [];
    acc[user.role].push(user);
    return acc;
}, {});

console.log(grouped)

// flatten Nested array
const nested = [[1,3, [1,4,5]], [2,4], [3]];
const flat = nested.reduce((acc, arr)=> acc.concat(arr), []);
console.log(flat)