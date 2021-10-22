let num = 18;
// console.log(num&1);


while(num!=0){
    let last = num&1;
    console.log(last);
    num = num>>1;
}

