// 1. Dense Arrays
// 2. Sparse Arrays
// 3. Creating Arrays

/**
 * 1) Dense arrays
A dense array is an array where its elements have contiguous indexes starting at zero.

For dense arrays, you can use the length property to get the number of elements in the array. 
 */
let colors = ['red', 'green', 'blue', 'yellow'];

console.log(colors.length); // 4

colors.push('purple');

console.log(colors.length); // 5

// 2) Sparse arrays
// A sparse array is an array whose elements don’t have contiguous indexes starting at zero.

// For example, the [10,, 20, 30] is a sparse array because the indexes of its elements are 0, 2, and 3.

let numbers = [10,20,,30];
console.log(numbers.length); // 4

numbers.push(40);
console.log(numbers.length); // 5

numbers[10] = 100;
console.log(numbers.length); // 11

// Empltying an array
numbers.length = 0;
console.log(numbers); // []
console.log(numbers.length); // 0

// removing elements

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(fruits.length); // 5

fruits.length = 3; // removes elements from index 3 onwards
console.log(fruits);

// Making an array sparse
const veggies = ['carrot', 'broccoli', 'spinach', 'potato'];
console.log(veggies.length); // 4

veggies.length = 2; // makes the array sparse
console.log(veggies);
