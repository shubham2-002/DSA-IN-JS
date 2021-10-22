function check(num){
    if((num&1)===0){
        return "even";
    }
    return 'odd';
}

let num = 3;
console.log(check(num));