function outest(c){
    // var c = 20;
    function outer(b){
    
    function inner(){
        console.log(a,b,c)
    }
    let a = 10;
    return inner;
}
return outer;
}
const outerFunction = outest("World");
const innerFunction = outerFunction("Hello");
innerFunction();

// function currying
// memoisation
// data hiding and encapsulation
//

// data hiding

function count(){
    var counter = 5;
    function increment(){
    counter++;
    console.log(counter)
    }
    return increment
}

const incrementCounter = count();
incrementCounter()
incrementCounter()

const sepCounter = count();
sepCounter()
sepCounter()


// relation between closures and garbage collector
// memoisation

