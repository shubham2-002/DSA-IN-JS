var readlineSync = require('readline-sync')
function minCashFlow(graph, n){
    var amount = new Array(n)
    amount.fill(0)

    for(let i =0; i<n; i++){
        for(let j =0; j<n; j++){
            amount[i] += graph[j][i] - graph[i][j]
        }
    }

    minCashFlowRec(amount);
}

function minCashFlowRec(amount){
    maxCreditIdx = 0
    for(let idx = 1; idx<amount.length; idx++){
        if(amount[idx] > amount[maxCreditIdx]){
            maxCreditIdx = idx
        }
    }

    maxDebitIdx = 0;
    for(let idx = 1; idx<amount.length; idx++){
        if(amount[idx]  < amount[maxDebitIdx]){
            maxDebitIdx = idx
        }
    }

    if (amount[maxCreditIdx] ==0 && amount[maxDebitIdx] ==0 ){
        return;
    }

    var min = Math.min(Math.abs(amount[maxDebitIdx]), amount[maxCreditIdx]);
    amount[maxCreditIdx] -= min
    amount[maxDebitIdx] += min

    console.log(`Person ${maxDebitIdx} pays ${min} to Person ${maxCreditIdx}`);

    minCashFlowRec(amount);

}




let n = Number(readlineSync.question("Enter no of Person "))

let graph = new Array(n)

for(let i =0; i<n; i++){
    graph[i] = new Array(n)
}

for(let i =0; i<n; i++){
    for(let j =0; j<n; j++){
        if(i!=j){
            var am = Number(readlineSync.question(`How much Person ${i} has to pay Person ${j} `));
            graph[i][j] = am
        }
        else{
            graph[i][j] = 0
        }
    }
}
minCashFlow(graph, n)