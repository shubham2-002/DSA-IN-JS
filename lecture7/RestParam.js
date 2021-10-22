// console.log(1, 2, 4,6 , 7, 8, 9);


function restParam ( ...rest){
    console.log(rest);
}


restParam(1);
restParam(0, 23);
restParam(0, 43, 54, 767);
console.log()