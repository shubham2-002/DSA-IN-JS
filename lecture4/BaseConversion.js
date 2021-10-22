function DeciToBin(n){
    let bin = 0;
    let pos = 1;
    while(n!=0){
        let rem = n%2;
        bin = rem*pos + bin;
        n = parseInt(n/2);
        pos = pos*10;
    }
    return bin;
}

function BinToDeci(n){
    let dec = 0;
    let pos = 1;
    while(n!=0){
        let rem = n%10;
        dec = dec + pos*rem;
        pos = pos*2;
        n = parseInt(n/10);
    }
    return dec;
}

function DeciToAny(n, base){
    let bin = 0;
    let pos = 1;
    while(n!=0){
        let rem = n%base;
        bin = rem*pos + bin;
        n = parseInt(n/base);
        pos = pos*10;
    }
    return bin;
}

function AnyToDeci(n, base){
    let dec = 0;
    let pos = 1;
    while(n!=0){
        let rem = n%10;
        dec = dec + pos*rem;
        pos = pos*base;
        n = parseInt(n/10);
    }
    return dec;
}


function AnytoAny(n, base1, base2){
    let deci = AnyToDeci(n, base1);
    return DeciToAny(deci, base2);
}


console.log(AnytoAny(352, 8, 10));