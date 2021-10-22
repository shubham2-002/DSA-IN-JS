function countPath(row, col){
    if(row<0 || col<0){
        return 0;
    }

    if(row ==0 && col ==0){
        return 1;
    }

    let rightPath = countPath(row, col-1);
    let leftPath = countPath(row -1, col);
    let dialPath = countPath(row-1, col-1);
    return rightPath + leftPath + dialPath;
}

console.log(countPath(2, 2));