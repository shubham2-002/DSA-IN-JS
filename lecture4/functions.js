// console.log(si(2, 3));
function si(p= 23, q= 34, t= 34){
    console.log(p, q, t);
    let simpleI  = (p*q*t)/100;
    return simpleI;
}



var fun = function(p= 23, q= 34, t= 34){
    console.log(p, q, t);
    let simpleI  = (p*q*t)/100;
    return simpleI;
}
// console.log(typeof fun);
// console.log(fun(2, 3, 4));


var arrowFun = (a, b) => a*b;
console.log(arrowFun(2, 3));
