function lexo(str){
    let freq  = new Array(26);
    freq.fill(0);
    let base = "a".charCodeAt(0);
    for(let ch of str){
        let charCode = ch.charCodeAt(0);
        freq[charCode - base]++;
    }
    // console.log(freq);
    lexoRec(str.length, freq);

}

function lexoRec(orgLen, freq, curLen=0, str=''){
    if(orgLen === curLen){
        console.log(str);
        return;
    }

    for(let i =0; i<freq.length; i++){
        if(freq[i]>0){
            freq[i]--;
            let orgCharCode = i+"a".charCodeAt(0);
            let ch = String.fromCharCode(orgCharCode);
            lexoRec(orgLen, freq, curLen+1, str+ch);
            freq[i]++;
        }
    }

}


lexo("aac");
