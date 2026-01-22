// A comma operator takes two expressions, evaluates them from left to right, and returns the value of the right expression.

let result = (19, 10 * 70)
console.log(result) //10 * 70 =700

let x = 20;
let y = (x++, x++);
console.log(x,y);

// First x++ → returns 20, then increments x to 21.

// Second x++ → returns 21, then increments x to 22.