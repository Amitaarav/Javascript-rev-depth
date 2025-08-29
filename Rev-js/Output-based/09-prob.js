// function outer(){
//     for(var i = 1; i <= 5 ; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i * 1000);
//     }
// }

// outer();

//

function outer1(){
    for(let i = 1; i <= 5 ; i++){
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }
}

// outer1();


function outer2(){
    for(let i = 1; i <= 5 ; i++){
        function close(i){
            setTimeout(function(){
            console.log(i);
            }, i * 1000);
        }
        close(i);
    }
}

outer2();