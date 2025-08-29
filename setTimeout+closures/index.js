function x(){
    // var i = 1;
    for(let i=0;i<=5;i++){
        function close(j){
            setTimeout(function(){
        console.log(j);
    }, j*1000)
        };
        close(i);
    }
    
    console.log("Namaster Js");
}
x();

let text = "HELLO WORLD";
let char = text.charAt(0);
console.log("char:", char);

