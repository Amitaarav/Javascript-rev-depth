# JavaScript Function Concepts – README

This file demonstrates important **JavaScript function concepts** including:

- Function Expressions  
- Named vs Anonymous Functions  
- Immediately Invoked Function Expressions (IIFE)  
- First-Class Functions  
- Callback Functions  
- Recursion  
- `arguments.callee` (legacy concept)

---

## 1. Function Expression

```js
let x = function(){
    console.log("Hi")
}
console.log(x)
x();
```
## Concept
A function expression is when a function is assigned to a variable.

- The function has no name (anonymous).

- The variable x holds the function reference.

- You can log the function and invoke it using x().

## Key Point
Functions in JavaScript are values and can be stored in variables.

2. Named Function Expression + IIFE

```js
let y = (function x(){
    console.log("Hi there")
})
y();
console.log(y)
```
## Concept
This is a named function expression wrapped in parentheses, making it an IIFE-like structure (but not executed immediately).

The function name x is only accessible inside the function body.

Outside, only y exists.

```js
// x();  Error: x is not defined
```
Key Point
The function name in a named function expression is scoped locally.

3. Named Function Expression (Not Accessible Outside)
```js
let f = function fun(){
    console.log("How much fun ??")
}
f()
// fun()  Error
```
## Concept
Even though the function has a name (fun), it is not added to the outer scope.

Key Point
Named function expressions help with:

Debugging stack traces

Self-recursion

But the name is not globally available.

4. First-Class Functions & Callbacks
```js
function gun(fn){
    console.log("Welcom to fun")
    fn();
}

gun(function askingAboutFun(){
    console.log("Wow so much fun!")
})

```
## Concept
JavaScript supports first-class functions, meaning functions can:

- Be passed as arguments

- Be returned from other functions

- Be stored in variables

Here, fn is a callback function.

Key Point
Functions behave like normal values (numbers, strings, objects).

5. Recursion

```js
function factorial(n){
    return n <= 1 ? 1 : n * factorial(n - 1);
}

const fact = [1,2,3,4,5].map(factorial)
console.log(fact)
```
## Concept
A function that calls itself is called a recursive function.

```js
Output
[1, 2, 6, 24, 120]
```
Key Point
Recursion needs:

A base condition

A recursive call

6. Recursion in Anonymous Functions (arguments.callee)
```js
const fact2 = [1,2,3,4,5].map(function(n){
    return n <= 1 ? 1 : arguments.callee(n - 1) * n;
})
console.log(fact2)
```
Concept
In older JavaScript versions, anonymous functions could not refer to themselves.

So arguments.callee was used to access the current function.

```js
Output
[1, 2, 6, 24, 120]
```
Important 
arguments.callee is:

Deprecated

Not allowed in strict mode

Should be avoided in modern JavaScript

Modern Alternative
Use named function expressions instead:

```js
const fact = [1,2,3,4,5].map(function factorial(n){
    return n <= 1 ? 1 : n * factorial(n - 1);
})
```
