// strict mode
"use strict";
// (
//     function(){
//         undeclaredVar = 10;
//     }
// )();

//console.log(undeclaredVar); // This will log 10, but it is a bad practice to use undeclared variables.
// In strict mode, this would throw a ReferenceError because undeclared variables are not allowed.

// Without strict mode: ✅ No error is thrown

//❗ undeclaredVar is automatically created as a global variable

//❗ Very dangerous — this can lead to unexpected global state

function whoAmI(){
    console.log(this); // In non-strict mode, this refers to the global object (window in browsers).
}
whoAmI(); // Logs the global object (window in browsers).

// In strict mode, the value of this inside standalone functions is not coerced.


// Why this matters:

function increment(){
    this.count = ( this.count || 0) + 1;
}

increment(); // In non-strict mode, this refers to the global object, and count is created as a global variable.
console.log(count); // Logs 1, because count is a global variable.