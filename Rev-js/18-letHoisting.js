// Hoisted but not initialized
// Which leads to a temporal dead zone

// The TDZ is the period between the start of the scope and the line where the variable is declared.
// During this time, the variable is not accessible, and trying to access it will result in a "ReferenceError".


// TDZ → let/const declared in memory but not initialized

// console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
// let myVar = 10; // Declaration and initialization

function demo(){
    console.log(foo)
    var foo = "Hello, World!"; // This will log undefined due to hoisting
    // The variable declaration is hoisted, but the assignment is not.

    console.log(bar)
    let bar = "Hello, World!"; // This will throw a ReferenceError because 'bar' is in the TDZ until it is initialized.
    // The variable declaration is hoisted, but the assignment is not, and 'bar'
}

demo()