function Power(a, n){
    if(n==0){
        return 1;
    }

    return a*Power(a, n-1);
}

console.log(Power(2, 3));