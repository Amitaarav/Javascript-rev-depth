// Function either returns a function or takes a function as an argument
// Higher-order functions can take other functions as arguments or return a function as a result

// First Order function

const firstOrderFunction  = () => {
    console.log("Hello!, I am First Order Function")
}

const higherOrderFunc = ( callback) => {
    callback()
}

// const higherOrderFunc21= 
higherOrderFunc(firstOrderFunction)

// console.log(higherOrderFunc21)
// const higherOrderFunc2 = (callback1) => {
//     callback1()
// }

// higherOrderFunc2(higherOrderFunc21);
