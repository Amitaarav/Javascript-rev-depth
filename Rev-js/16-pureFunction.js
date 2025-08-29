// o/p depends on only its input arguments
// Pure functions do not have side effects and always produce the same output for the same input

// impure function

let numberArray = []
const impureAddNumber = (number) => numberArray.push(number)

// pure Function
const pureAddNumber = ( number) => (inputArray) => inputArray.concat([number])

// Usage

console.log(impureAddNumber(6)) // return 1
console.log(numberArray) // [6]

console.log(pureAddNumber(7)(numberArray)) // [6], does not modify the original array
console.log(numberArray) // still [] since the original array remains unchanged