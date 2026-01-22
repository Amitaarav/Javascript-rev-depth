const state = {
    pending: "PENDING",
    fulfilled: "FULFILLED",
    rejected: "REJECTED"  
}

class MyPromise {

    #promiseState = state.pending;

    #handlers = [];

    constructor(callback){
        callback(this.#resolve, this.#reject);

    }

    #resolve(value){
        this.#promiseState = state.fulfilled;
        this.#handlers.forEach(handler => {
            handler(value)
        });
    }

    #reject(value){};

    then(thenCallback){
        if( this.#promiseState === state.fulfilled ){
            this.#handlers.push(thenCallback);
        }
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
    