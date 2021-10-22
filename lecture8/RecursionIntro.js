function printDesc(n){
    if(n==0){
        return;
    }

    console.log(n);
    printDesc(n-1);
}


function printAsec(n){
    if(n==0){
        return;
    }
    printAsec(n-1);
    console.log(n);
}

function printDsecAsec(n){
    if(n==0){
        return;
    }
    console.log(n);
    printDsecAsec(n-1);
    console.log(n);
}



printDsecAsec(5);
