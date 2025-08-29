// 16. parseInt vs Number()

function parseIntVsNumber(str){
    return parseInt(str);
}

console.log(parseIntVsNumber("123"));

function numberVsNumber(str){
    return Number(str);
}

console.log(numberVsNumber("123"));

console.log(typeof "12.234")
console.log(typeof parseInt("12.234")) //12
console.log(typeof Number("12.234")); //12.234

console.log(parseInt("12.345px")) //12
console.log(Number("12.345px")) //NaN

console.log(parseInt("12",1)) // A value between 2 and 36 that specifies the base of the number in string. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.

// 17

console.log(Number((0.1 + 0.2).toFixed(1)) === 0.3)
console.log( (0.1 + 0.2).toFixed(1) === "0.3")

// splice -- only for array but we can apply
// slice -- for array and string


let string = "amit kumar";

// splice removes the element from the array and mamipulate the array
console.log(string);

// slice -- for array and string
console.log(string.slice(0,3));



