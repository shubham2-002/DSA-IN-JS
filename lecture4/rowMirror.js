let n = 5;

let row = 0;
let rowMirror = 0;
while(rowMirror< 2*n-1){
    let col = 0;
    while(col<n){
        if(col<=row){
            process.stdout.write("* ");
        }
        else{
            process.stdout.write("  ");
        } 
        col++;
    }
    process.stdout.write("\n");
    if(rowMirror<n-1){
        row++;
    }
    else{
        row--;
    }
    rowMirror++;
}

