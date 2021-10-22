class Node{
    data;
    next;
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{    
    #head;
    #tail;
    #size;
    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
    }

    addStart(data){
        let newNode = new Node(data);
        newNode.next = this.#head;
        this.#head = newNode;
        if(this.#tail == null){
            this.#tail = this.#head;
        }
        this.#size++;
    }

    display(){
        let cur = this.#head;
        while(cur != null){
            process.stdout.write(cur.data+"->");
            cur = cur.next;
        }
        process.stdout.write("END\n");
    }

    reverse(){
        let prev = null;
        let cur = this.#head;

        while(cur!=null){
            let next = cur.next;

            cur.next= prev;
            prev = cur;
            cur = next;
        }
        this.#tail = this.#head;
        this.#head = prev;
    }

    size(){
        let cur = this.#head;
        let count = 0;
        while(cur!=null){
            count++;
            cur = cur.next;
        }
        return count;
    }

    kElementFromEnd(k){
        let slow = this.#head;
        let fast = this.#head;
        for (let count = 0; count < k; count++) {
            fast = fast.next;
        }

        while(fast!=null){
            slow = slow.next;
            fast = fast.next;
        }
        return slow.data;
    }

}

let linkedList = new LinkedList();

linkedList.addStart(2);
linkedList.addStart(3);
linkedList.addStart(4);
linkedList.addStart(5);
linkedList.addStart(6);

linkedList.display();

linkedList.reverse();

linkedList.display();

console.log(linkedList.kElementFromEnd(1));










