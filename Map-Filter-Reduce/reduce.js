// reduce is used to reduce the array to a single value
// reduce takes two arguments
// 1. callback function
// 2. initial value

// reduce is used to reduce the array to a single value 

const arr = [1, 2, 3, 4, 5];

function sum(prevResult, currentValue){
    console.log(`prevResult: ${prevResult}, currentValue: ${currentValue}`);
    return prevResult + currentValue;
}

const result = arr.reduce(sum);

console.log(result);

/**
 * Cart -> [iphone {price: 699, name: "Iphone"}, macbook {price: 1299, name: "Macbook"}, airpods {price: 199, name: "Airpods"}]
 * 
 */

const cart = [{price: 100000, name: "Iphone"}, {price: 200000, name: "Macbook"}, {price: 20000, name: "Airpods"}];

function totalPrice(prevResult, currentValu){
    console.log(`prevResult: ${JSON.stringify(prevResult)}, currentValue: ${JSON.stringify(currentValu)}`);
    let newPrice = prevResult.price + currentValu.price;
    return {price: newPrice};
}

const cartTotal = cart.reduce(totalPrice);
console.log(cartTotal);