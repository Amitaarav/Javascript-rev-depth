console.log(0.1 + 0.2); // 0.30000000000000004
// This is due to floating-point precision issues in JavaScript.
// To avoid this, you can use toFixed or Math.round for precise decimal representation.
console.log((0.1 + 0.2).toFixed(2)); // "

console.log(0.1 + 0.2 == 0.3); // false

function areTheNumbersAlmostEqual(num1, num2) {
    return Math.abs(num1 - num2) < Number.EPSILON;// Number.EPSILON is the smallest difference between two representable numbers.
    // This is a good way to compare floating-point numbers for equality.
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3)); // true