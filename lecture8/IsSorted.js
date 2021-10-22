function isSorted(arr, ind){
    if(ind == arr.length -1){
        return true;
    }

    if(arr[ind] < arr[ind+1]){
        return isSorted(arr, ind+1);
    }
    return false;
}

console.log(isSorted([2, 5, 7, 2, 15, 32], 0));