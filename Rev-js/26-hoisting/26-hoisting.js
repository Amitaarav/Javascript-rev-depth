//Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution.

console.log("Hoisting Example");

console.log(message)

var message = "Hello, I am hoisted!";

console.log(message);

// This hoisting makes functions to be safely used in code before they are declared.
messageInfo("Hello, I am a function declaration!");
function messageInfo(msg) {
    console.log(msg);
}