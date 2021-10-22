// Recursion
// Time: O(3^(min(s1.length, s2.length)))
// Space: O(1)
// Stack: O(min(s1.length, s2.length))
function editDis(s1, s2){
    if(s1.length == 0){
        return s2.length;
    }
    if(s2.length == 0){
        return s1.length;
    }

    if(s1[0] == s2[0]){
        return editDis(s1.substring(1), s2.substring(1));
    }
    else{
        return 1 + Math.min(editDis(s1.substring(1), s2), editDis(s1, s2.substring(1)), editDis(s1.substring(1), s2.substring(1)));
    }
}

// Top-Down
// Time: O(s1.length*s2.length)
// Space: O(s1.length*s2.length)
// Stack: O(min(s1.length, s2.length))
function editDisDp(s1, s2, memory){
    if(s1.length == 0){
        return s2.length;
    }
    if(s2.length == 0){
        return s1.length;
    }

    if(memory[s1.length][s2.length]){
        return memory[s1.length][s2.length];
    }
    let ans;
    if(s1[0] == s2[0]){
        ans = editDisDp(s1.substring(1), s2.substring(1), memory);
    }
    else{
        ans = 1 + Math.min(editDisDp(s1.substring(1), s2, memory), editDisDp(s1, s2.substring(1), memory), editDisDp(s1.substring(1), s2.substring(1), memory));
    }
    memory[s1.length][s2.length] = ans;
    return ans;
}

// Bottom Up
// Time: O(s1.length*s2.length)
// Space: O(s1.length*s2.length)
// Stack: O(1)
function editDpItr(s1, s2, memory){
    for(let i = 0; i<= s2.length; i++){
        memory[0][i] = i;
    }
    for(let i = 0; i<= s1.length; i++){
        memory[i][0] = i;
    }

    for(let i =1; i<=s1.length; i++){
        for(let j =1; j<=s2.length; j++){
            if(s1[i-1] == s2[j-1]){
                memory[i][j] = memory[i-1][j-1];
            }
            else{
                memory[i][j] = 1 + Math.min(memory[i-1][j], memory[i][j-1], memory[i-1][j-1]);
            }
        }
    }
    return memory[s1.length][s2.length];
}

let s1 = "sunday";
let s2 = "saturday";
let memory = [];
for(let i =0; i<=s1.length; i++){
    memory[i] = new Array(s2.length+1); 
}
console.log(editDis(s1, s2));
console.log(editDisDp(s1, s2, memory));
console.log(editDpItr(s1, s2, memory));

