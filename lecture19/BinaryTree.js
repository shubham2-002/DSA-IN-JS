var readlineSync = require('readline-sync');
class Node{
    data;
    left;
    right;
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    root;
    insert(){
        this.root = this.#insert(this.root);
    }
    #insert(node){
        if(node==null){
            let val = Number(readlineSync.question());
            let nn = new Node(val);
            return nn;
        }

        let dir = readlineSync.question(`Give direction to ${node.data} `);
        if(dir === "Left"){
            node.left = this.#insert(node.left);
        }
        else{
            node.right = this.#insert(node.right);
        }
        return node;
    }

    display(){
        this.#display(this.root, "");
    }
    #display(node, indent){
        console.log(indent+node.data);
        if(node.left!==null){
            this.#display(node.left, indent+"\t");
        }
        if(node.right!==null){
            this.#display(node.right, indent+"\t");
        }
    }

    preOrder(){
        this.#preOrder(this.root);
        console.log();
    }
    #preOrder(node){
        if(node===null){
            return;
        }
        process.stdout.write(`${node.data} `);
        this.#preOrder(node.left);
        this.#preOrder(node.right);
    }

    inOrder(){
        this.#inOrder(this.root);
        console.log();
    }
    #inOrder(node){
        if(node===null){
            return;
        }
        this.#inOrder(node.left);
        process.stdout.write(`${node.data} `);
        this.#inOrder(node.right);
    }

    postOrder(){
        this.#postOrder(this.root);
        console.log();
    }
    #postOrder(node){
        if(node===null){
            return;
        }
        this.#postOrder(node.left);
        this.#postOrder(node.right);
        process.stdout.write(`${node.data} `);
    }
}

let bt = new BinaryTree();
bt.insert();
bt.insert();
bt.insert();
bt.insert();
bt.insert();
bt.display();

bt.preOrder();

bt.inOrder();
bt.postOrder();

// 1
// Left
// 2
// Right
// 3
// Left
// Left
// 4
// Right
// Right
// 5
