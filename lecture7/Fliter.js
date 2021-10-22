let arr = [1, 3, 5, 6, 7, 8];

let filter = arr.filter(map);

function map(val){
    return val%2==0;
}

console.log(filter);