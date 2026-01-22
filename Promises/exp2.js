function getUsers(callback){
    let users = [
        {
            username: 'John',
            email: 'HdGt8@example.com'
        },
        {
            username: 'Jane',
            email: '6vDd0@example.com'
        }
    ]

    setTimeout(()=>{
        callback([
        {
            username: 'John',
            email: 'HdGt8@example.com'
        },
        {
            username: 'Jane',
            email: '6vDd0@example.com'
        }
    ]);
    }, 3000);
    
}

function findUser(username, callback){
    getUsers((users)=>{
        const user = users.find(user => user.username === username);
        callback(user);
    })
}

findUser('John', console.log);

// findUser() function is synchronous and blocking

// a promise is an object that encapsulates the result of an asynchronous operation.

// creating promises

// 1. create a promise object using new keyword

// const promise1 = new Promise((resolve, reject)=>{


//     if(success){
//         resolve(value)
//     } else {
//         reject(error)
//     }
// })

// Once a promise reaches either a fulfilled or rejected state, it stays in that state and can’t go to another state.

// In other words, a promise cannot go from the fulfilled state to the rejected state and vice versa. Also, it cannot go back from the fulfilled or rejected state to the pending state.

// Once a new Promise object is created, its state is pending. If a promise reaches fulfilled or rejected state, it is resolved.

function getUsersPromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve([
                {
                    username: 'John',
                    email: ' HdGt8@example.com'
                },
                {
                    username: 'Jane',
                    email: '6vDd0@example.com'
                }
            ])
        })
    },1000)
}

function onFullfilled(users){
    console.log(users);
}

const promise = getUsersPromise();
promise.then(onFullfilled);