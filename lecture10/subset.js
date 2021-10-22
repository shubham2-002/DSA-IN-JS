function check(arr, index = 0, rightSum=0, leftSum=0){
    if(index === arr.length){
        if(rightSum == leftSum){
            return true;
        }
        else{
            return false;
        }
    }

    let ele = arr[index];
    return check(arr, index+1, rightSum+ele, leftSum) || check(arr, index+1, rightSum, leftSum+ele);

}

function printPartation(arr, index = 0, rightSum=0, leftSum=0, left = [], right=[]){
    if(index === arr.length){
        if(rightSum == leftSum){
            console.log(left, right);
        }
        return;
    }

    let ele = arr[index];
    right.push(ele);
    printPartation(arr, index+1, rightSum+ele, leftSum, left, right);
    right.pop();

    left.push(ele);
    printPartation(arr, index+1, rightSum, leftSum+ele, left, right);
    left.pop();

}

let arr = [1, 2, 4, 3];
printPartation(arr);