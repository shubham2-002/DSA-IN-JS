class Stack{
    #size;
    #stack;
    constructor(){
        this.#stack = [];
        this.#size = 0;
    }

    push(data){
        // this.stack[this.size] = data;
        this.#stack.push(data);
        this.#size++;
    }

    pop(){
        if(this.#size==0){
            return null;
        }
        this.#size--;
        return this.#stack.pop();
        // return this.#stack[this.#size]
    }

    top(){
        if(this.#size==0){
            return null;
        }
        return this.#stack[this.#size-1];
    }

    size(){
        return this.#size;
    }
}


let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.top()); // 5
console.log(stack.pop()); // 5
console.log(stack.pop()); // 4
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
