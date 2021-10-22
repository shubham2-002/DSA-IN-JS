function count4(n){
    let count = 0;
    while(n!=0){
        let rem = n%10;
        if(rem==4){
            count++;
        }

        n = parseInt(n/10);
    }
    return count;
}

console.log(count4(12321));