class Node{
    data;
    next;
    prev;
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{    
    #head;
    #tail;
    constructor(){
        this.#head = null;
        this.#tail = null;
    }

    addStart(data){
        let newNode = new Node(data);
        newNode.next = this.#head;
        if(this.#head==null){
            this.#head = newNode;
            this.#tail = newNode;
            return;
        }
        this.#head.prev = newNode;
        this.#head = newNode;
    }

    deleteStart(){
        if(this.#head == null){
            return null;
        }
        let oldHead = this.#head;
        this.#head = this.#head.next;
        this.#head.prev = null;

        oldHead.next = null;
        if(this.#head == null){
            this.#tail = null;
        }
        return oldHead.data;
    }

    addEnd(data){
        if(this.#head == null){
            this.addStart(data);
            return;
        }

        let newNode = new Node(data);
        this.#tail.next = newNode;
        newNode.prev = this.#tail;
        this.#tail = newNode;
    }

    deleteEnd(){
        if(this.#head==null){
            return null;
        }

        if(this.#head == this.#tail){
            this.deleteStart();
            return;
        }

        let cur = this.#tail.prev;
        let temp = this.#tail;
        cur.next = null;
        this.#tail = cur;
        temp.prev = null;   
        return temp.data;
    }

    display(){
        let cur = this.#head;
        while(cur != null){
            process.stdout.write(cur.data+"->");
            cur = cur.next;
        }
        process.stdout.write("END\n");
    }
}

let linkedList = new DoublyLinkedList();

linkedList.addStart(2);
linkedList.addStart(3);
linkedList.addStart(4);
linkedList.addStart(5);
linkedList.addStart(6);

linkedList.display();

console.log(linkedList.deleteStart());
console.log(linkedList.deleteStart());

linkedList.display();

linkedList.addEnd(7);
linkedList.addEnd(8);
linkedList.addEnd(9);
linkedList.addEnd(10);

linkedList.display();

console.log(linkedList.deleteEnd());
console.log(linkedList.deleteEnd());

linkedList.display();



