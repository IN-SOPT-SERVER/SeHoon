/* -- 예제2 --  */ 
function func(){
    if(true){
        var test ="var";
        console.log("test : ", test);
    }
    console.log("test: ", test);
}
func();
console.log("test :", test);



/* -- 예제1 --  */ 
if (true){
    var x ="var";
}
console.log("x : ", x);
//x :  var


if(true){
    let y = "let";
}
console.log("y:", y);
//ReferenceError: y is not defined