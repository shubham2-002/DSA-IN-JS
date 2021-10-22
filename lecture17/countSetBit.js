function countSet(num){
    let count = 0;
    while(num!=0){
        let last = num&1;
        if(last==1){
            count++;
        }
        num = num>>1;
    }
    return count;

}

console.log(countSet(18));