let str1 = "hello";
let str2 = "elloh";


function anagram1(str1, str2){
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    arr1.sort();
    arr2.sort();
    str1 = arr1.join("");
    str2 = arr2.join("");
    return str1 === str2;
}


function anagram2(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    let arr1  = new Array(26);
    arr1.fill(0);
    let arr2  = new Array(26);
    arr2.fill(0);
    let base = "a".charCodeAt(0);

    for(let ind in str1){
        let ch = str1[ind];
        let charCode = ch.charCodeAt(0);
        arr1[charCode - base]++;
        ch = str2[ind];
        charCode = ch.charCodeAt(0);
        arr2[charCode - base]++;

    }

    
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] != arr2[i]){
            return false;
        }
    }
    return true;
}

console.log(anagram2(str1, str2));