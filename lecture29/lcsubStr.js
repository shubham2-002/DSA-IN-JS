// Bottom Up
// Time: O(s1.length*s2.length)
// Space: O(s1.length*s2.length)
// Stack: O(1)
function lcSubStrItr(s1, s2, memory){
    for(let i =0; i<=s1.length; i++){
        memory[i][0] = 0;
    }
    for(let i =0; i<=s2.length; i++){
        memory[0][i] = 0;
    }

    let ans = 0;
    for(let i = 1; i<= s1.length; i++){
        for(let j = 1; j<s2.length; j++){
            if(s1[i-1] == s2[j-1]){
                memory[i][j] = 1 + memory[i-1][j-1];
                ans = Math.max(ans, memory[i][j]);
            }
            else{
                memory[i][j] = 0;
            }
        }
    }

    return ans;
}

let s1 = "abcdgh";
let s2 = "acdghr";
let memory = [];
for(let i =0; i<=s1.length; i++){
    memory[i] = new Array(s2.length+1); 
}
console.log(lcSubStrItr(s1, s2, memory));