function Subseque(orgstr,substr){
    if(orgstr===""){
        console.log(substr);
        return
    }
    let ch = orgstr[0]
    let modstr = orgstr.substring(1);
    Subseque(modstr,substr+ch)
    Subseque(modstr,substr)
    
}
Subseque("abc","")