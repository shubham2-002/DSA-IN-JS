
// console.log(str.substring(1, 4));

function AllSubString(str){
    let arr = [];
    for(let start = 0; start<str.length; start++){
        for(let end = start+1; end <= str.length; end++){
            arr.push(str.substring(start, end));
        }
    }
    return arr;
}

let str = "hello";
console.log(AllSubString(str));