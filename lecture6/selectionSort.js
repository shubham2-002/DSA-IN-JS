function selectionSort(arr){
    for(let i = 0; i<arr.length-1; i++){
        let maxId = 0;
        for(let j =0; j<=arr.length-1-i; j++){
            if(arr[maxId] < arr[j]){
                maxId = j;
            }
        }
        [arr[maxId] , arr[arr.length-1-i]] = [arr[arr.length-1-i] , arr[maxId]];
        // console.log(arr);
        // return
    }
}

let arr = [2, 4, 6, 7, 1, 8, 9];
selectionSort(arr);
console.log(arr);