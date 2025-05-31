const promise1 = Promise.resolve('Fast Success!');
const promise2 = new Promise(resolve => setTimeout(()=> resolve('slow success!'), 2000));
const promise3 = new Promise((_,reject) => setTimeout(()=> reject("Slow failure"), 1000));

const promise4 = Promise.reject("Fast failure")
console.log(promise3);