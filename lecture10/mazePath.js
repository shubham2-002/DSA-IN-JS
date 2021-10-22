function mazePath(row, col, path=''){
    if(row<0 || col<0){
        return;
    }

    if(row==0 && col ==0){
        console.log(path);
        return;
    }

    mazePath(row-1, col, path+"D");
    mazePath(row, col-1, path+"R");
}

function mazePath2(row, col, path=''){
    if(row<0 || col<0){
        return;
    }

    if(row==0 && col ==0){
        console.log(path);
        return;
    }

    mazePath2(row-1, col, path+"D");
    mazePath2(row, col-1, path+"R");
    mazePath2(row-1, col-1, path+"S");
}

mazePath2(2, 2);

