function showMessage(num1, num2){
    console.log(this.message, num1, num2);
}

// showMessage.call({message:"Hi"}, 1, 2); // set and immediately call the function
// 'this' inside 
showMessage.apply({message:"Hi"}, [1, 2])

const fixShowMessage =showMessage.bind({message:"Hi"},[ 1, 2], 80)
fixShowMessage()

function greet( greeting, punctuation){
    console.log(`${greeting} ${this.name} ${punctuation}`);
}

const person = { name: "Amit Gupta"}
greet.call(person, "Hi", "!");





