function subSeq(orgStr, subStr){
    if(orgStr===""){
        console.log(subStr);
        return;
    }

    let ch = orgStr[0];
    let modStr = orgStr.substring(1);
    subSeq(modStr, subStr+ch);
    subSeq(modStr, subStr);
}


function subSeqOpt(orgStr, subStr, index){
    if(index===orgStr.length){
        console.log(subStr);
        return;
    }

    let ch = orgStr[index];
    subSeqOpt(orgStr, subStr+ch, index+1);
    subSeqOpt(orgStr, subStr, index+1);
}


function subSeqArr(orgStr, subStr, index, arr){
    if(index===orgStr.length){
        arr.push(subStr);
        return;
    }

    let ch = orgStr[index];
    subSeqArr(orgStr, subStr+ch, index+1, arr);
    subSeqArr(orgStr, subStr, index+1, arr);
}


// subSeq("abc", "");

// subSeqOpt("abc", "", 0);
let arr = [];
subSeqArr("abc", "", 0, arr);
console.log(arr);