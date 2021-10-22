function nKnights(n){
    let matrix = [];
    for(let i =0; i<n; i++){
        let row = new Array(n);
        row.fill(0);
        matrix.push(row);
    }
    return nKnightRes(n, matrix);
}

function nKnightRes(n, matrix, row=0){
    if(n===row){
        for(let row of matrix){
            console.log(row);
        }
        console.log("-----------------")
        return
    }

    for(let col = 0; col<n; col++){
        if(isSafe(matrix, row, col, n)){
            matrix[row][col] = 1;
            let res = nKnightRes(n, matrix, row+1);
            matrix[row][col] = 0;
        }
    }
}

function isSafe(matrix, row, col, n) {
    // up direction
    if (row - 2 >= 0) {
      if (col - 1 >= 0) {
        if (matrix[row - 2][col - 1] === 1) return false;
      }
      if (col + 1 < n) {
        if (matrix[row - 2][col + 1] === 1) return false;
      }
    }
    // down
    if (row + 2 < n) {
      if (col - 1 >= 0) {
        if (matrix[row + 2][col - 1] === 1) return false;
      }
      if (col + 1 < n) {
        if (matrix[row + 2][col + 1] === 1) return false;
      }
    }
    // left
    if (col - 2 >= 0) {
      if (row - 1 >= 0) {
        if (matrix[row - 1][col - 2] === 1) return false;
      }
      if (row + 1 < n) {
        if (matrix[row + 1][col - 2] === 1) return false;
      }
    }
    // right
    if (col + 2 < n) {
      if (row - 1 >= 0) {
        if (matrix[row - 1][col + 2] === 1) return false;
      }
      if (row + 1 < n) {
        if (matrix[row + 1][col + 2] === 1) return false;
      }
    }
    return true;
  }


nKnights(4);