function reverse(n){
    let newNo =0;
    while(n!=0){
        let rem = n%10;
        newNo = newNo*10 + rem;
        n = parseInt(n/10);
    }
    return newNo;
}

console.log(reverse(123456));