// ugly nested code
getUser(userId, (err, user) => {
    if (err) return handle(err); // error handling every where, hard to debug, hard to read, logic tightly coupled

    getOrders(user.id, (err, orders) => {
        if (err) return handle(err);

        getPayment(orders[0].id, (err, payment) => {
            if (err) return handle(err);

            sendEmail(user.email, payment, (err) => {
                if (err) return handle(err);
                console.log("Done");
            });
        });
    });
});

// above pyramid code modularized into named functions
function handleUser(err, user) {
    if (err) return handle(err);
    getOrders(user.id, handleOrders);
}

function handleOrders(err, orders) {
    if (err) return handle(err);
    getPayment(orders[0].id, handlePayment);
}

function handlePayment(err, payment) {
    if (err) return handle(err);
    sendEmail(payment.userEmail, payment, handleEmail);
}

function handleEmail(err) {
    if (err) return handle(err);
    console.log("Done");
}

getUser(userId, handleUser);

// controle flow library
//npm install async

const async = require('async')

// using waterfall( series execution )
async.waterfall([
    function(cb){
        getUser(userId, cb)
    },
    function(user, cb){
        getOrder(user.id, cb)
    },
    function(orders, cb){
        getPayment(orders[0].id, cb)
    },
    function(payment, cb){
        sendEmail(payment.userEmail, payment, cb)
    }
], function (err){
    if(err) return handle(err);
    console.log("Done")
})

// In the above,
/**
 * Each step passes result to the next step
 * centralized error handling
 * clean linear flow
 */

// Generator + promises

function getUserP(id){
    return new Promise((resolve, reject)=> getUser(id, (err, data)=> err ? reject(err) : resolve(data)));
}
function getOrdersP(id){
    return new Promise((resolve, reject)=> getOrders(id, (err, data) => err ? reject(err) : resolve(data)));
}

function* flow(){
    try {
        const user = yield getUserP(userId);
        const orders = yield getOrdersP(user.id);
        console.log(orders);
    } catch (error) {
        console.log(error)
    }
}
// generators alone don’t run Promises automatically
// It needs helper
const co = require('co');

co(function* () {
    const user = yield getUserP(userId);
    const orders = yield getOrdersP(user.id);
    console.log(orders);
});

// 4 Async Await

async function processUser(){
    try {
        const user = await getUserP(userId);
        const orders = await getOrders(user.id);
        const payment = await getPayment(orders[0].id);
        await sendEmailP(user.email, payment);

        console.log("Done!")
    } catch (error) {
        handle(err)
    }
}

/**
 *  Promises    Built on  Microtask queue
 *  async function   Returns Promise
 *  await      Pause function not thread
 *  error handling   Promise rejection
 */

// Prolevel Patterns
// parallel execution
const [user, cart] = await Promise.all([
    db.getUser(userId),
    db.getCart(userId),
])

// Retry Wrapper
async function retry(fn, times=3){
    for(let i = 0; i < times; i++){
        try {
            return await fn()
        } catch (error) {
            if(i === times - 1) throw error;
        }
    }
}