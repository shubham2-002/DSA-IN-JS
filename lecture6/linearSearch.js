function LinearSearch(arr, target){

    for (let index = 0; index < arr.length; index++) {
        if(arr[index] == target){
            return index;
        }
        
    }
    return -1;
}

let arr = [2, 34, 5, 1, 6, 8];
let target = 123;

console.log(LinearSearch(arr, target));