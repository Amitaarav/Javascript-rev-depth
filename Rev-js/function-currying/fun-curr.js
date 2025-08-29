let multiply = function(x,y){
    console.log(x*y)
}

multiply(2,5);

let multiplyByTwo = multiply.bind(this, 2, 3);
multiplyByTwo(5);

let multiplyByThree = multiplyByTwo.bind(this, 3);
multiplyByThree(5);


// using function closure

let multiplyclosure = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByFour = multiplyclosure(4);
multiplyByFour(5);


let multiplyByFive = multiplyclosure(5);
multiplyByFive(5);