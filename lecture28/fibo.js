// Recursion
// Time: O(2^N)
// Space: O(1)
// Stack: O(N)
function fibo(n){
    if(n<2){
        return n;
    }
    return fibo(n-1) + fibo(n-2);
}

// Top-Down
// Time: O(N)
// Space: O(N)
// Stack: O(N)
function fiboDp(n, memory=[]){
    if(n<2){
        return n;
    }
    if(memory[n]!=undefined){
        return memory[n];
    }

    memory[n] = fiboDp(n-1, memory) + fiboDp(n-2, memory);
    return memory[n];
}

// Bottom Up
// Time: O(N)
// Space: O(N)
// Stack: O(1)
function fiboDpItr(n, memory=[]){
    memory[0] = 0;
    memory[1] = 1;

    for(let i = 2; i<=n; i++){
        memory[i] = memory[i-1] + memory[i-2];
    }
    return memory[n];
}



let n = 10000;

// console.log(fiboDp(n));
console.log(fiboDpItr(n));
// console.log(fibo(n));
