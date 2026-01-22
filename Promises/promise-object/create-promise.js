new Promise(function (resolve, reject){
     
}); // Creates a new Promise object in pending state

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function createPromiseWithLoop(){
    return new Promise(function(resolve, reject){
        for(let i = 0; i < 100000000; i++){};
        let num = getRandomInt(10);
        if(num % 2 === 0){
            resolve(`Resolved with number: ${num}`);
        } else {
            reject(`Rejected with number: ${num}`);
        }
    })
}

const c = createPromiseWithLoop();
console.log(c);