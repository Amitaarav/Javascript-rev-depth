
var a = b = 3; // This is a common mistake in JavaScript, it creates a global variable b and assigns the value 3 to it.
console.log(a); // 3
console.log(b); // 3

(function() {
    var c = d = 5; // This creates a global variable d and assigns the value 5 to it.
    console.log(c); // 5
})();
console.log("c defined? " + (typeof c !== 'undefined'));
console.log("d defined? " + (typeof d !== 'undefined')); // c is not defined outside the IIFE, but d is defined globally.
// Trying to access 'bar' before its declaration will result in a ReferenceError.
// is in the TDZ until it is initialized.
// Trying to access 'foo' before its declaration will log undefined due to hoisting.

// The variable 'foo' is hoisted, so it can be accessed before its declaration, but it will log undefined.
// The variable 'bar' is not hoisted in the same way, and trying to access

(
    function(){
        var myVar1 = myVar2// This is hoisted and initialized to undefined
        var myVar2;
        console.log(myVar1); // undefined, because myVar1 is hoisted and initialized to undefined
        console.log(myVar2); // undefined, because myVar2 is hoisted but not initialized yet
    }
)();
// This will log undefined because 'myVar1' is hoisted, but 'myVar2' is not initialized yet.
// The variable 'myVar2' is hoisted but not initialized, leading to a ReferenceError if accessed before its declaration.
// The variable 'myVar1' is hoisted and initialized to undefined, so it can
// be accessed before its declaration, but it will log undefined.
// The variable 'myVar2' is hoisted but not initialized, leading to a ReferenceError if accessed before its declaration.
// The variable 'myVar1' is hoisted and initialized to undefined, so it can
// be accessed before its declaration, but it will log undefined.

// console.log("myVar1 defined? " + (typeof myVar1 !== 'undefined')); // false, because it's hoisted but not initialized
// console.log("myVar2 defined? " + (typeof myVar2 !== 'undefined')); // false, because it's hoisted but not initialized

// console.log(myVar1) //  ReferenceError: myVar1 is not defined var myVar1 is not accessible outside the IIFE
console.log(myVar2) // ReferenceError: myVar2 is not defined var myVar


(
    function(){
        let myVar3 = myVar4;
        let myVar4;
        console.log(myVar3); // ReferenceError: Cannot access 'myVar3' before initialization case of TDZ 
    }
)();
// This will throw a ReferenceError because 'myVar3' is in the TDZ until it is initialized.
