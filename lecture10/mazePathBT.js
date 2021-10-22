function mazePathBT(row, col, arr=[]){
    if(row<0 || col<0){
        return;
    }

    if(row==0 && col ==0){
        console.log(arr);
        return;
    }
    arr.push("R");
    mazePathBT(row-1, col, arr);
    arr.pop();

    arr.push("D");
    mazePathBT(row, col-1, arr);
    arr.pop();
}

mazePathBT(2, 2);