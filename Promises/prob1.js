new Promise((resolve)=>{
    resolve(1)
    Promise.resolve().then(()=>{
        console.log(2)
    })
}).then((data)=>{
    console.log(data)
});

console.log(3)
//  3 data 