
let x = function(){
    console.log("Hi")
}
console.log(x)
x();

let y = (function x(){
    console.log("Hi there")
})

// x(); // This will cause an error: x is not defined
y();
console.log(y) 

let f = function fun(){
    console.log("How much fun ??")
}
f()

// fun()
function gun(fn){
    console.log("Welcom to fun")
    fn();
}

gun(function askingAboutFun(){
    console.log("Wow so much fun!")
})
function factorial(n){
    return n <= 1 ? 1 : n * factorial(n - 1);
}
const fact = [1,2,3,4,5].map(factorial)
console.log(fact) // Outputs: [ 1, 2, 6, 24, 120 ]

// Earlier version of JavaScript did not allow named function expressions, and for this you could not make a recrsive function expression
// Using arguments.callee to achieve recursion in an anonymous function
const fact2 = [1,2,3,4,5].map(function(n){
    return n <= 1 ? 1 : arguments.callee(n - 1) * n;
})
console.log(fact2) // Outputs: [ 1, 2, 6, 24, 120 ]