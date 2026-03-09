// Process of transforming a function with multiple arguments into a sequence of nested functions,
// each accepts only one argument at a time.


const multiArgFunction = (a, b, c) => a + b + c
const multiArgFunction1 = (a, b, c) => {
    return a + b + c
}
console.log(multiArgFunction1(1,2,3)) // 6

// After Currying
const curriedFunction = (a) => (b) => (c) => a + b + c
console.log(curriedFunction(1)(2)(3)) // 6  
console.log(curriedFunction(1)) // [Function: b]
console.log(curriedFunction(1)(2)) // [Function: c] 

