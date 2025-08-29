(
    function(){
        console.log(1);
        setTimeout(function(){
            console.log(2);
        }, 1000);
        setTimeout(function(){
            console.log(3);
        }, 0);  
        console.log(4);
    }
)()

// 
// This code demonstrates the event loop and how JavaScript handles asynchronous operations.
// The output will be:
// 1        
// 4
// 3
// 2

const intervalID = setInterval(myCallback, 1000, "Param1","Param2")

function myCallback(param1, param2) {
    console.log("Callback executed with params:", param1, param2);
    clearInterval(intervalID); // Clear the interval after the first execution
}


myArray = ["zero", "one", "two", "three", "four", "five"];

myArray.myMethod = function (sProp){
    alert(arguments.length > 0 ? this[sProp] : this);
    
}