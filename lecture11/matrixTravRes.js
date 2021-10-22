function matrixTravRes(row, col, n, m){
    if(row===n){
        return;
    }

    if(col === m){
        matrixTravRes(row+1, 0, n, m);
        return;
    }

    console.log(row, col);
    matrixTravRes(row, col+1, n, m);
}

matrixTravRes(0, 0, 3, 3);