function quickSort(arr, start, end){
    if(start>=end){
        return;
    }
    let partInd = partition(arr, start, end);
    quickSort(arr, start, partInd-1);
    quickSort(arr, partInd+1, end);
}

function partition(arr, start, end){
    let pivot = arr[start];
    let pivotInd = start;
    for(let j = start+1; j<=end; j++){
        if(arr[j]<=pivot){
            pivotInd++;
            [arr[j], arr[pivotInd]] = [arr[pivotInd], arr[j]];
        }
    }
    [arr[start], arr[pivotInd]] = [arr[pivotInd], arr[start]];
    return pivotInd;
}




let arr = [3, 45, 16, 2, 51, 7, 9, 2 ,0];
quickSort(arr, 0, arr.length-1);
console.log(arr.join(" "));