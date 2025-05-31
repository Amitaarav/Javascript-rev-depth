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




