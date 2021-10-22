// Bottom Up
// Time: O(n*n)
// Space: O(n)
// Stack: O(1)
function lis(arr, memory = []){
    for(let i =0; i<arr.length; i++){
        memory[i] = 1;
    }

    let ans = 0;
    for(let i = 1; i<arr.length; i++){
        for(j =0; j<i; j++){
            if(arr[j] < arr[i]){
                memory[i] = Math.max(memory[i], memory[j] + 1);
                ans = Math.max(ans, memory[i]);
            }
        }
    }
    return ans;
}


let arr = [5, 8, 3, 7, 9, 1];
console.log(lis(arr));