function nQueens(n){
    let matrix = [];
    for(let i =0; i<n; i++){
        let row = new Array(n);
        row.fill(0);
        matrix.push(row);
    }
    return nQueensRes(n, matrix);
}

function nQueensRes(n, matrix, row=0){
    if(n===row){
        return true;
    }

    for(let col = 0; col<n; col++){
        if(isSafe(matrix, row, col, n)){
            matrix[row][col] = 1;
            let res = nQueensRes(n, matrix, row+1);
            if(res===true){
                return true;
            }
            matrix[row][col] = 0;
        }
    }
    return false;
}

function isSafe(matrix, row, col, n){
    for(let i=0; i<row; i++){
        if(matrix[i][col]==1){
            return false;
        }
    }

    let i =row;
    let j = col;
    while(i>=0 && j >=0){
        if(matrix[i][j]==1){
            return false;
        }
        i--;
        j--;
    }

    i =row;
    j = col;
    while(i>=0 && j< n){
        if(matrix[i][j]==1){
            return false;
        }
        i--;
        j++;
    }

    return true;
}



console.log(nQueens(4));