function foo1()
{
    return {
        bar: "Hello"
    }
}
const res = foo1().bar; // "Hello"
console.log(res); // "Hello"
function foo2(){
    return
    {
        bar: "Hello"
    }
}

const res2 = foo2()
console.log(res2); // undefined
// This will return undefined because of automatic semicolon insertion.