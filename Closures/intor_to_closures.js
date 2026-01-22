function process(){
    let i = 0;
    function increment(){
        i += 1;
        return i;
    }
    return increment;
}

let res = process();


// undefined
// res
// ƒ increment(){
//         i += 1;
//         return i;
//     }
// const obj = { func : res};
// obj
// {func: ƒ}func: ƒ increment()length: 0name: "increment"prototype: {}arguments: nullcaller: null[[FunctionLocation]]: VM1009:3[[Prototype]]: ƒ ()[[Scopes]]: Scopes[3]0: Closure (process) {i: 0}1: Script {obj: {…}, LoadTimeData: ƒ, res: ƒ}2: Global {window: Window, self: Window, document: document, name: '', location: Location, …}[[Prototype]]: Object
// obj.func
// ƒ increment(){
//         i += 1;
//         return i;
//     }
// obj.func();
// 1
// obj;
// {func: ƒ}func: ƒ increment()length: 0name: "increment"prototype: {}arguments: nullcaller: null[[FunctionLocation]]: VM1009:3[[Prototype]]: ƒ ()[[Scopes]]: Scopes[3]0: Closure (process) {i: 1}1: Script {obj: {…}, LoadTimeData: ƒ, res: ƒ}2: Global {window: Window, self: Window, document: document, name: '', location: Location, …}[[Prototype]]: Object