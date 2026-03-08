function fun(x){
    if(x % 2 === 0){
        var i = 0;
    }
    else{
        var i = 1;
    }
    return i;
}
const result = fun(9); 
console.log(result)
console.log(fun(8)); 

// var allows redeclaration and has function scope.
// let allows block scope and does not allow redeclaration within the same scope.

var a = 10;
var a = 20;

console.log(a); // Outputs: 20

console.log(a + 1); // Outputs: 21

let b = 10;
console.log(b);

// let b = 20; // This will cause an error: Identifier 'b' has already been declared
console.log(b + 1);

const x = 5;
// x = 10; // This will cause an error: Assignment to constant variable.

const obj = { key: 'value' };
obj.key = 'newValue'; // This is allowed
console.log(obj.key); // Outputs: newValue

// obj = { key: 'anotherValue' }; // This will cause an error: Assignment to constant variable.
console.log(obj.key);
const obj2 = { key: 'value' };

// constant obj2 cannot be reassigned
// obj2 = { key: 'newValue' }; // This will cause an error: Assignment to constant variable.
console.log(obj2.key);

