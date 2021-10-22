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

    // O(n)
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

    // O(n)
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

    // O(n)
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

    // O(n)
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

    // O(n)
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

    // O(n)
    levelOrder(){
        this.#levelOrder1(this.root);
        // console.log();
    }
    #levelOrder(node){
        let queue = [];
        queue.push(node);

        while(queue.length>0){
            let dequeNode = queue.shift();
            process.stdout.write(`${dequeNode.data} `);

            if(dequeNode.left != null){
                queue.push(dequeNode.left);
            }
            if(dequeNode.right != null){
                queue.push(dequeNode.right);
            }
        }
    }
    // O(n)
    #levelOrder1(node){
        let queue = [];
        queue.push(node);

        while(queue.length>0){
            let size = queue.length;
            for(let count = 0; count<size; count++){
                let dequeNode = queue.shift();
                process.stdout.write(`${dequeNode.data} `);

                if(dequeNode.left != null){
                    queue.push(dequeNode.left);
                }
                if(dequeNode.right != null){
                    queue.push(dequeNode.right);
                }
            }
            console.log();
        }
    }

    // O(n)
    find(target){
        return this.#find(target, this.root);
    }
    #find(target, node){
        if(node == null){
            return false;
        }
        if(node.data === target){
            return true;
        }

        let left = this.#find(target, node.left);
        let right = this.#find(target, node.right);
        return left || right;
    }

    // O(n)
    height(){
        return this.#height1(this.root);
    }
    // no of nodes
    #height(node){
        if(node== null){
            return 0;
        }

        let leftHeight = this.#height(node.left);
        let rightHeight = this.#height(node.right);
        return 1 + Math.max(leftHeight, rightHeight)
    }
    // no of edges
    #height1(node){
        if(node== null){
            return -1;
        }

        let leftHeight = this.#height1(node.left);
        let rightHeight = this.#height1(node.right);
        return 1 + Math.max(leftHeight, rightHeight)
    }

    // O(n^2)
    diameter(){
        return this.#diameter(this.root);
    }
    #diameter(node){
        if(node == null){
            return 0;
        }
        let leftHeight = this.#height(node.left);
        let rightHeigt = this.#height(node.right);

        let curDia = 1 + leftHeight + rightHeigt;
        let LeftDia = this.#diameter(node.left);
        let rightDia = this.#diameter(node.right);
        return Math.max(curDia, LeftDia, rightDia);
    }

    // O(n)
    mirror(){
        this.#mirror(this.root);
    }
    #mirror(node){
        if(node == null){
            return;
        }
        [node.left, node.right] = [node.right, node.left];

        this.#mirror(node.left);
        this.#mirror(node.right);
    }
    
}

let bt = new BinaryTree();
bt.insert();
bt.insert();
bt.insert();
bt.insert();
bt.insert();
bt.display();

// bt.preOrder();

// bt.inOrder();
// bt.postOrder();

bt.levelOrder();
// console.log(bt.find(3));
// console.log(bt.find(6));
// console.log(bt.height());
// console.log(bt.diameter());
bt.mirror();

bt.levelOrder();

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
