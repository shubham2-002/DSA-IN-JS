function unique(arr){
    let xor = 0;
    for (const val of arr) {
        xor = xor^val;
    }
    return xor;
}

let arr = [2, 5, 1, 5, 2];
console.log(unique(arr));