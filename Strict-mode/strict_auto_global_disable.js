function fun(){  // fun -> global scope
    var x = 10
    function gun(){
        var y = 20;
        console.log(x);
        console.log(y);
    }
    gun();
    console.log(x) // 10
    console.log(y); // ReferenceError: y is not defined
}
fun()

// console.log is runtime feature, not syntax feature