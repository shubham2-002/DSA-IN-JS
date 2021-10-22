function bubbleSort(arr){
    for(let i = 0; i<arr.length-1; i++){
        for(let j =0; j<arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}

let arr = [2, 4, 6, 7, 1, 8, 9];
bubbleSort(arr);
console.log(arr);