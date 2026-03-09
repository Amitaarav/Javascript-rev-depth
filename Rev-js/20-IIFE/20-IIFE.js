// IIFE: immediately invoked function expression
// This is a function that runs as soon as it is defined

// runs as soon as defined

(
    function(){
        console.log("This function runs immediately!");
        // You can place any code here that you want to execute right away
    }
)();

//data privacy because any variables declared within the IIFE cannot be accessed by the outside world.

(
    function (){
        var message = "Hello, I am private!";
        console.log(message);
    }
)();
// Semicolon is optional but recommended to avoid issues with other scripts
// but here it is needed to prevent issues with other scripts that might follow

// Arrow function variant

(()=>{
    console.log("This arrow function runs immediately!");
    // You can place any code here that you want to execute right away
})()