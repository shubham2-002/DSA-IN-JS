function permute(orgStr, perStr=""){
    if(orgStr===""){
        console.log(perStr);
        return;
    }

    let ch = orgStr[0];
    let modStr = orgStr.substring(1); 
    for(let i = 0; i<=perStr.length; i++){
        let leftPart = perStr.substring(0, i);
        let rightPart = perStr.substring(i, perStr.length);
        let newPermute = leftPart+ch+rightPart;
        permute(modStr, newPermute);
    }
}


permute("aac");