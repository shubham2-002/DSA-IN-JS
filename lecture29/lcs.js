// recursion
// Time: O(2^max(s1.length, s2.length))
// Space: O(1)
// Stack: O(max(s1.length, s2.length))
function lcs(s1, s2){
    if(s1.length == 0 || s2.length == 0){
        return 0;
    }

    if(s1[s1.length-1] == s2[s2.length-1]){
        return 1 + lcs(s1.substring(0, s1.length-1), s2.substring(0, s2.length-1));
    }
    else{
        let case1 = lcs(s1.substring(0, s1.length-1), s2);
        let case2 = lcs(s1, s2.substring(0, s2.length-1));
        return Math.max(case1, case2);
    }

}

// Top Down
// Time: O(s1.length*s2.length)
// Space: O(s1.length*s2.length)
// Stack: O(max(s1.length, s2.length))
function lcsDp(s1, s2, memory){
    if(s1.length == 0 || s2.length == 0){
        return 0;
    }

    if(memory[s1.length][s2.length]){
        return memory[s1.length][s2.length];
    }

    let ans;
    if(s1[s1.length-1] == s2[s2.length-1]){
        ans = 1 + lcsDp(s1.substring(0, s1.length-1), s2.substring(0, s2.length-1), memory);
    }
    else{
        let case1 = lcsDp(s1.substring(0, s1.length-1), s2, memory);
        let case2 = lcsDp(s1, s2.substring(0, s2.length-1), memory);
        ans = Math.max(case1, case2);
    }
    memory[s1.length][s2.length] = ans;
    return ans;
}

// Bottom Up
// Time: O(s1.length*s2.length)
// Space: O(s1.length*s2.length)
// Stack: O(1)
function lcsItr(s1, s2, memory){
    for(let i =0; i<=s1.length; i++){
        memory[i][0] = 0;
    }
    for(let i =0; i<=s2.length; i++){
        memory[0][i] = 0;
    }

    for(let i = 1; i<= s1.length; i++){
        for(let j = 1; j<s2.length; j++){
            if(s1[i-1] == s2[j-1]){
                memory[i][j] = 1 + memory[i-1][j-1];
            }
            else{
                let case1 = memory[i-1][j];
                let case2 = memory[i][j-1];
                memory[i][j] = Math.max(case1, case2);
            }
        }
    }

    return memory[s1.length][s2.length];
}

let s1 = "aggtab";
let s2 = "gxtxayb";
let memory = [];
for(let i =0; i<=s1.length; i++){
    memory[i] = new Array(s2.length+1); 
}
console.log(lcs(s1, s2));
console.log(lcsDp(s1, s2, memory));
console.log(lcsItr(s1, s2, memory));
