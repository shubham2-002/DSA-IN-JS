function inserationSort(arr){
    for(let i = 1; i<arr.length; i++){
        for(let j = i; j>0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }
            else{
                break;
            }
        }
    }
}

let arr = [2, 4, 6, 7, 1, 8, 9];
inserationSort(arr);
console.log(arr);