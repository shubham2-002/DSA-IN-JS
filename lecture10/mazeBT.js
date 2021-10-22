function mazeBT(row, col, mazeR, mazeC, visited, path=''){
    if(row<0 || col<0 || row>=mazeR || col>=mazeC){
        return;
    }

    if(visited[row][col] === true){
        return;
    }

    if(row==0 && col ==0){
        console.log(path);
        return;
    }

    visited[row][col] = true;
    mazeBT(row-1, col, mazeR, mazeC, visited, path+"D");
    mazeBT(row, col-1, mazeR, mazeC, visited, path+"R");
    mazeBT(row+1, col, mazeR, mazeC, visited, path+"L");
    mazeBT(row, col+1, mazeR, mazeC, visited, path+"U");
    visited[row][col] = false;

}
let mazeR = 3;
let mazeC = 3;
let visited = [];
for(let i =0; i<mazeR; i++){
    let row = new Array(mazeC);
    row.fill(false);
    visited.push(row);
}
mazeBT(2, 2, mazeR, mazeC, visited);