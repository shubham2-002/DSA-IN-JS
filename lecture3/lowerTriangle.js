let n = 5;

let row = 0;
while(row<n){
    let col = 0;
    while(col< n- row){
        process.stdout.write("* ");
        col++;
    }
    process.stdout.write("\n");
    row++;
}

