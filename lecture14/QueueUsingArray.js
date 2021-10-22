const { UV_FS_O_FILEMAP } = require("constants");

class Queue{
    #size;
    #queue;
    constructor(){
        this.#queue = [];
        this.#size = 0;
    }

    enqueue(data){
        this.#queue.push(data);
        this.#size++;
    }

    dequeue(){
        if(this.#size == 0){
            return null;
        }
        this.#size--;
        return this.#queue.shift();
    }

    front(){
        if(this.#size ==0){
            return null;
        }
        return this.#queue[0];
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
