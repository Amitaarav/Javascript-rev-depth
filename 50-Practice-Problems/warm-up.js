// Create a function that return the last element of an array

function lastElement(arr){
    return arr[arr.length - 1];
    // return arr.pop(); // it make changes in the original array
}

console.log(lastElement([1, 2, 3, 4, 5]));

// 2. Combination of two arrays

function combineArray(arr1, arr2){
    return [...arr1, ...arr2];
}
console.log(combineArray([1, 2, 3], [4, 5, 6]));

// 3. Generate a random integer between 0 and 18

function randomInteger(){
    return Math.floor(Math.random() * 19);// lower bound is 0 and upper bound is 18
}

console.log(randomInteger());

// 4. 

function getStringOnly(arr){
    return arr.filter(item => typeof item === "string");
}

console.log(getStringOnly([1, "2", 3, "4", 5]));

// 5

function getMaximumNumber(arr){
    return Math.max(...arr);
}

function getMinimumNumber(arr){
    return Math.min(...arr);
}

function getMaxElement(arr){
    let max = arr[0];
    for(i in arr){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(getMaximumNumber([1, 2, 8, 3, 4, 5]));
console.log(getMinimumNumber([1, 2, 8, 3, 4, 5]));


// 6

function getLengthOfObject(obj){
    return Object.keys(obj).length;
}

console.log(getLengthOfObject({a: 1, b: 2, c: 3}));

// 7
const arr = [
    {
        name: "Amit",
        gender: "Male",
        age: 20
    },
    {
        name: "shubhi",
        gender: "Female",
        age: 20
    },
    {
        name: "Raj",
        gender: "Male",
        age: 20
    },
    {
        name: "Raj Tarun",
        gender: "Male",
        age: 16
    }
]
function getMaleOnly(arr){
    const maleOnly = arr.filter(item => item.age < 18);
    return maleOnly.map(item => item.name); // return array of names
}

console.log(getMaleOnly(arr));

//8.

let vegetables = ['Aloo', 'Gobhi', 'Potato', 'Paneer', 'Mushroom'];

let resultArray = vegetables.map(item => item.length).reduce((acc, curr) => acc + curr, 0); // return array of "length of each element"

function convertToUpperCase(arr){
    return arr.map(item => item.toUpperCase()).join(" $|| $ ");
}
console.log(convertToUpperCase(vegetables));

// 9. 
function isObjectZero(obj){
    return Object.keys(obj).length === 0;
}

console.log(isObjectZero({nam:"Amit"}));

// 10
function doubleTheNumber(arr){
    return arr.map(item => item * 2);
}

console.log(doubleTheNumber([1, 2, 3, 4, 5]));

// 11

function singleCommaSeparatedString(strArr){
    return strArr.join(" , ");
}

console.log(singleCommaSeparatedString(["Amit", "Shubhi", "Raj"]));

// 12

function flattenTheNestedArray(arr){
    return arr.flat(); // level of depth is 1 by default flat(1) method
}

console.log(flattenTheNestedArray([1, 2, [3, 4, 5], 6, 7, [8, 9, 10]]));

// 13
function checkAllElementsAreNumber(arr){
    return arr.every(item => typeof item === "number");
}

console.log(checkAllElementsAreNumber([1, 2, 3, '4', 5]));

function getTheStringElement(arr){
    return arr.find(item => typeof item === "string")
}

console.log(getTheStringElement([1, 2, 3, '4', 5]));

// 14
console.log("Prime Number Check");
function checkPrimeNumber(num){
    return num.every(item => {
        for(let i = 2; i < item; i++){
            if(item % i === 0){
                return false;
            }
        }
        return true;
    })
}

console.log(checkPrimeNumber([2, 3, 4, 5, 6, 7, 8, 9, 10]));

function removeDuplicate(arr){
    
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]));f


