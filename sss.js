var asteroidCollision = function(asteroids) {
    let stack = [];
    for (const asteroid of asteroids) {
        let bool = true;
        let s = asteroid
        if(stack.length > 0){
            let top = stack[stack.length-1]
            if(stack[stack.length -1] > 0 && asteroid < 0){
                //collision will occur
                let i = 0;
                while(i != stack.length){
                    if(stack[stack.length -1] < 0){
                        break;
                    }
                    if(Math.abs(stack[stack.length -1]) != Math.abs(asteroid)){
                        if(Math.abs(stack[stack.length -1]) < Math.abs(asteroid)){
                            stack.pop();
                            i = i -1;
                        }
                        else{
                            bool = false;
                            break;
                        }
                    }
                    else {
                        stack.pop();
                        bool = false;
                        break;
                        // console.log(stack);
                    }
                    i++;
                }
            }
        }
        if(bool){
            stack.push(asteroid);
        }
        // console.log(stack);
    }  
    return stack;
};

let res = [8,-8];
console.log(asteroidCollision(res))