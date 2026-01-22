function show(){
    console.log("I am inside show function");
}

setTimeout(show, 3000);

console.log("I am outside show function");

const myFunc = new Function("a","b","console.log(a + b)")
myFunc(5,6);

// setTimeout is used to execute a function after a certain delay
// new Function is used to create a new function dynamically
// Both are examples of asynchronous programming in JavaScript

// Before ES6, we used callbacks to handle asynchronous operations
// Callbacks can lead to callback hell, which is hard to read and maintain


function showMessages(){
    console.log("Result out...")
}

function giveExam(){
    console.log("Exam started...")
}

giveExam();
showMessages();

// callback hell can be a problem but IOC is the main issue here

// inversion of control: when we pass a callback function to another function, we are giving control of that function to the other function and we don't know when it will be executed.

// To avoid callback hell, we use Promises in JavaScript
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value


// Lets explore setTimeout first

setTimeout(() => {
    console.log("work done...");
}   , 3000);

// problem with setTimeout is that we don't know when the work will be done and we have no control over it. We can only specify a delay after which the work will be done.
// setTimeout wait if the thead is idle else thread keep working on the task


// Generators are also used to handle asynchronous operations but they are not as popular as Promises
// Generators are functions that can be paused and resumed and they use the yield keyword to pause the function execution

// Promises are more powerful and flexible than Generators and they are widely used in modern JavaScript applications to handle asynchronous operations

// Promises have three states: pending, fulfilled, and rejected
// A Promise is in the pending state when it is created and it can either be fulfilled or rejected
// A Promise is fulfilled when the asynchronous operation is completed successfully and it is rejected when the asynchronous operation fails

// 2 phases of Promise
// 1. Producer phase: when the Promise is created and the asynchronous operation is started : creation of Promise
// 2. Consumer phase: when the Promise is consumed and the result of the asynchronous operation is handled : action get performed on the result of the Promise

// phase 1: Producer phase, creating a Promise

const p1 = new Promise(function(resolve, reject){
    // doing some heavy work (network request, reading files)
    console.log("doing something...");
    setTimeout(() => {
        resolve("Done with the work");
    }, 3000);
});

// resolve and reject are functions that are used to change the state of the Promise
// resolve is used to change the state of the Promise from pending to fulfilled
// reject is used to change the state of the Promise from pending to rejected

// phase 2: Consumer phase, consuming a Promise
p1.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("finally");
});

// then is used to handle the fulfilled state of the Promise
// catch is used to handle the rejected state of the Promise
// finally is used to execute code after the Promise is settled (either fulfilled or rejected)


// 1. How resolve and reject are getting injected in the function
// 2. How chaining for promises works
// 3. How catch then finally works
// 4. Microtask queue and Macrotask queue
// 5. Event loop

// 6. Promise.resolve and Promise.reject
// 7. Promise
// 8. Promise.all
// 9. Promise.race
// 10. Promise.allSettled
// 11. Promise.any
// 12. Async/Await
// 13. Error handling in Async/Await
// 14. Real world example of Promises and Async/Await
// 15. Comparison between Callbacks, Promises and Async/Await

// Homework: Implement a simple version of Promise class with then, catch and finally methods
const state = {
    pending: "PENDING",
    fulfilled: "FULFILLED",
    rejected: "REJECTED"  
}

class MyPromise {
    #promiseState = state.pending;

    #handlers = [];

    constructor(callback){
        callback(this.resolve, this.reject);

    }

    #resolve(value){
        this.#promiseState = state.fulfilled;
        this.#handlers.forEach(handler => {
            handler(value)
        });
    }

    #reject(value){};

    then(thenCallback){
        this.#handlers.push(thenCallback);
    }

    catch(){}

    finally(){}
}

const promiseObj = new MyPromise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Time from my promise");
    },3000)
}); 

promiseObj.then((value)=>{
    console.log(`value from resolve: ${value}`);
    console.log(`I am inside then block`)
});

promiseObj.then((value)=>{
    console.log(`value from resolve: ${value}`);    
    console.log(`I am inside second then block`)
})

console.log(`I am outside then block`)
console.log(promiseObj);
    