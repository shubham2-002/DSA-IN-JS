function unique2(arr){
    let xor = 0;
    for (const val of arr) {
        xor = xor^val;
    }
    
    let pos =0;
    let n = xor;
    while((n&1)!=1){
        pos++;
        n = n>>1;
    }

    let mask = 1<<pos;
    let first = 0;
    for (const val of arr) {
        if((val&mask)!=0){
            first = first^val;
        }
    }
    let second = first^xor;
    console.log(first, second);

}

let arr = [2, 3, 1, 5, 5, 3];
unique2(arr);