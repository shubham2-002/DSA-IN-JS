function subSequence(str){
    for (let num = 0; num < Math.pow(2, str.length); num++) {
        let n = num;
        let ss = "";
        let ind =0;
        while(n!=0){
            let last = n&1;
            if(last==1){
                ss += str[ind];
            }
            n = n>>1;
            ind++;
        }
        console.log(ss);
    }
}


subSequence("abc");