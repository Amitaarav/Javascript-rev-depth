This: It's value is dynamic and determined by the execution context in which the function is called, not where the function is defined.

`Global Execution context`:
    Browser: window
    Node.js: global 
`Functional Execution Context`:
Every EC has a `this` binding

in Arrow function `this` is always unbind. there is no binding in arrow function -- this is undefined

 In arrow function `()  => {}`it does not create own this context. Instead it lexically binds `this` from its surrounding scope. In this case, the arrow function is defined within the obj literal. 


Call method: 


