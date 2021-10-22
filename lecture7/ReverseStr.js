let str = "vasudev";
str = "hee";
// str[0] = "2";
console.log(str);

function reverse(str){
    let newStr = "";
    for(let i =str.length-1; i>=0; i--){
        newStr += str[i];
    }
    return newStr;
}

let i = 0;
let j = str.length-1;

while(i<j){
    // [str[i], str[j]] = [str[j], str[i]];
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
    // console.log(str);
    i++;
    j--;
}

// console.log(reverse(str));
// console.log(str);