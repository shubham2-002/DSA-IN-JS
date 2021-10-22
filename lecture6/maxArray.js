let arr = [4, 4, 1, 2, 7, 4, 8, 3];

function maxIndex(arr){
    let max = 0;
    for (let index = 0; index < arr.length; index++){
        if(arr[index] > arr[max]){
            max = index;
        }
       
    }
    return max;
}

console.log(maxIndex(arr));