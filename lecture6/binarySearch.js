function BinarySearch(arr, target){

    let start = 0;
    let end = arr.length -1;
    while(start<=end){
        let mid = parseInt((start+end)/2);

        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid] > target){
            end = mid -1;
        }
        else{
            start = mid + 1;
        }
    }
    return -1;
}

let arr = [2, 34, 5, 1, 6, 8];
let target = 5;


console.log(BinarySearch(arr, target));
