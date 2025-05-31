const x = function test(){
    console.log("tst", test);
}
x();

[1].map(function mapFunction(value){
    console.log(value);
    return value + 2;
})
// we are passing a function as an argument to the map method that is why the mapFunction is function expression

// mapFunction()

//
function showMessage(message){
    this.name = message;
}
const obj = new showMessage("John");
console.log(obj);

// inbuilt arguments -- array like object

function showMessage2(){
    console.log(arguments);
    // this.name = "John";
}

const obj2 = new showMessage2("John", "Jane", "Jim");
console.log(obj2);


