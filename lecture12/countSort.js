function countSort(arr){
    let maxEle = Math.max(...arr);
    let freq = new Array(maxEle+1);
    freq.fill(0);

    for (const val of arr) {
        freq[val]++;
    }

    let i =0;
    for(let j =0; j<freq.length; j++){
        let curFreq  = freq[j];
        while(curFreq>0){
            arr[i] = j;
            i++;
            curFreq--;
        }
    }
}




let arr = [3, 45, 16, 2, 51, 7, 9, 2 ,0];
countSort(arr, 0, arr.length-1);
console.log(arr.join(" "));