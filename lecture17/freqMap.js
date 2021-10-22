let arr = [2, 5, 1, 6 ,2, 7, 14, 2, 52, 71, 3,1, 3];

function freqMap(arr){
    let freq = new Map();

    for (const val of arr) {
        if(freq.has(val)){
            let oldCount = freq.get(val);
            freq.set(val, oldCount+1);
        }
        else{
            freq.set(val, 1);
        }
    }

    for (const [key, value] of freq) {
        console.log(key, value);
    }
}

freqMap(arr);