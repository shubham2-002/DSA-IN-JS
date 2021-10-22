class Node{
    data;
    next;
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    #size;
    #head;
    constructor(){
        this.#head = null;
        this.#size = 0;
    }

    push(data){
        let newNode = new Node(data);
        newNode.next = this.#head;
        this.#head = newNode;
        this.#size++;
    }

    pop(){
        if(this.#head == null){
            return null;
        }
        let oldHead = this.#head;
        this.#head = this.#head.next;
        oldHead.next = null;
        this.#size--;
        return oldHead.data;
    }

    top(){
        if(this.#head==null){
            return null;
        }
        return this.#head.data;
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
