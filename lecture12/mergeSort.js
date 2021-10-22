function mergeSort(arr, start, end){
    if(start == end){
        let base = [];
        base.push(arr[start]);
        return base;
    }

    let mid = parseInt((start+end)/2);
    let left = mergeSort(arr, start, mid);
    let right = mergeSort(arr, mid+1, end);
    let merged = merging(left, right);
    return merged;
}

function merging(left , right){
    let i=0; j=0;
    let megered = [];

    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            megered.push(left[i]);
            i++;
        }
        else{
            megered.push(right[j]);
            j++;
        }
    }

    while(i<left.length){
        megered.push(left[i]);
        i++;
    }

    while(j<right.length){
        megered.push(right[j]);
        j++;
    }
    return megered;
}




let arr = [3, 45, 16, 2, 51, 7, 9, 2 ,0];
arr = mergeSort(arr, 0, arr.length-1);
console.log(arr.join(" "));