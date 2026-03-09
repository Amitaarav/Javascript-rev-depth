// extract part of the array
// it doesn't change the original array
// it returns a new array

// slice(start, end) - extracts elements from start index to end index (not inclusive)
// If end is not provided, it extracts till the end of the array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const slicedNumbers = numbers.slice(2, 5); // Extracts elements from index
console.log("Sliced Array: "+slicedNumbers); // [3, 4, 5]
console.log("Original Array: "+numbers); // Original array remains unchanged: [1, 2, 3,

const arrayIntegers1 = numbers.slice(0, 5); // Extracts elements from index 0 to 4
console.log("Array Integers 1: "+arrayIntegers1); // [1, 2, 3, 4, 5]

const arrayIntegers2 = numbers.slice(5); // Extracts elements from index 5 to the end
console.log("Array Integers 2: "+arrayIntegers2); // [6, 7, 8, 9, 10]

const arrayIntegers3 = numbers.slice(-5); // Extracts the "last 5 elements"
console.log("Array Integers 3: "+arrayIntegers3); // [6, 7, 8, 9, 10]

const arrayIntegers4 = numbers.slice(-5, -2); // Extracts elements from the "last 5 elements" to the "last 2 elements"
console.log("Array Integers 4: "+arrayIntegers4); // [6, 7, 8]