function countPath(row, col){
    if(row<0 || col<0){
        return 0;
    }

    if(row==0 && col ==0){
        return 1;
    }

    let rightPath = countPath(row, col-1);
    let downPath = countPath(row-1, col);
    return rightPath + downPath;
}

console.log(countPath(2, 2));