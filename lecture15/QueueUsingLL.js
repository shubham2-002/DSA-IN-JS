class Node{
    data;
    next;
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    #size;
    #head;
    #tail
    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
    }

    enqueue(data){
        let newNode = new Node(data);
        if(this.#head == null){
            this.#head = newNode;
            this.#tail = newNode;
            return;
        }
        this.#tail.next = newNode;
        this.#tail = newNode;
        this.#size++;
    }

    dequeue(){
        if(this.#head == null){
            return null;
        }
        let oldHead = this.#head;
        this.#head = this.#head.next;
        oldHead.next = null;
        if(this.#head == null){
            this.#tail = null;
        }
        this.#size--;
        return oldHead.data;
    }

    front(){
        if(this.#head ==null){
            return null;
        }
        return this.#head.data;
    }

    size(){
        return this.#size;
    }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.front()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // 4
console.log(queue.dequeue()); // 5
