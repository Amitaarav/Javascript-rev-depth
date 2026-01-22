let numbers = [10, 20, 30];

const length = numbers.push(40, 50, 60);

console.log({ numbers });
console.log({ length });

// 3) Append elements of an array to another array

let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'bLack'];

// using for...of loop
for (const color of cmyk) {
  colors.push(color);
}

console.log(colors);

let scores = [10, 20, 30];
for (const score of scores){
    // score = score + 10;
    console.log(score); // infinite loop
}


for(const [index,color] of colors.entries()){
    console.log(`${index}: ${color}`);
}

// in-place object destructuring with for..of
const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
];

let sum = 0;
for (const { score }of ratings) {
    sum += score;
}

console.log(`Total scores: ${sum}`); // 14