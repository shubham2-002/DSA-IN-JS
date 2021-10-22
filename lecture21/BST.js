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

class BST{
    #root;

    // O(n)
    insert(value){
        this.#root = this.#insert(this.#root, value);
    }
    #insert(node, value){
        if(node==null){
            let nn = new Node(value);
            return nn;
        }

        if(value > node.data){
            node.right = this.#insert(node.right, value);
        }
        else{
            node.left = this.#insert(node.left, value);
        }
        return node;
    }

     // O(n)
    display(){
        this.#display(this.#root, "");
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
        this.#preOrder(this.#root);
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
        this.#inOrder(this.#root);
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
        this.#postOrder(this.#root);
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
    sorted(){
        let arr = [];
        this.#sorted(this.#root, arr);
        return arr;
    }
    #sorted(node, arr){
        if(node===null){
            return;
        }
        this.#sorted(node.left, arr);
        arr.push(node.data);
        this.#sorted(node.right, arr);
    }

    // O(n)
    find(target){
        return this.#find(target, this.#root);
    }
    #find(target, node){
        if(node == null){
            return false;
        }
        if(node.data === target){
            return true;
        }
        else if(target>node.data){
            return this.#find(target, node.right);
        }
        else{
            return this.#find(target, node.left);
        }
    }

    // O(n)
    max(){
        return this.#max(this.#root);
    }
    #max(node){
        if(node.right == null){
            return node.data;
        }
        return this.#max(node.right);
    }

    // O(n)
    min(){
        return this.#min(this.#root);
    }
    #min(node){
        if(node.left == null){
            return node.data;
        }
        return this.#min(node.left);
    }

    // O(n)
    range(min, max){
        this.#range(min, max, this.#root);
        console.log();
    }
    #range(min, max, node){
        if(node===null){
            return;
        }

        if(node.data>min){
            this.#range(min, max, node.left);
        }
        if(node.data >= min && node.data <= max){
            process.stdout.write(`${node.data} `);
        }
        if(node.data<max){
            this.#range(min, max, node.right);
        }
    }

     // O(n)
    height(){
        return this.#height(this.#root);
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

    // O(nlogn)
    treeFromSorted(arr){
        this.#treeFromSorted(arr, 0, arr.length-1);
    }
    #treeFromSorted(arr, li, ri){
        if(li>ri){
            return;
        }

        let mid = parseInt((li+ri)/2);
        this.insert(arr[mid]); // 
        this.#treeFromSorted(arr, li, mid-1);
        this.#treeFromSorted(arr, mid+1, ri); 
    }

    // O(n^2)
    isBalanced(){
        return this.#isBalanced(this.#root);
    }
    #isBalanced(node){
        if(node == null){
            return true;
        }

        let lHeight = this.#height(node.left);
        let rHeight = this.#height(node.right);
        let diff = Math.abs(lHeight - rHeight);

        if(diff > 1){
            return false;
        }

        let leftBalance = this.#isBalanced(node.left);
        let rightBalance = this.#isBalanced(node.right);
        return leftBalance && rightBalance;
    }

}

let bst = new BST();
bst.insert(4);
bst.insert(2);
bst.insert(3);
// bst.insert(7);
bst.insert(7);
bst.insert(8);
bst.insert(9);

// bst.inOrder();
// bst.preOrder();
// bst.postOrder();
// console.log(bst.sorted());

// console.log(bst.find(6));
// console.log(bst.find(9));

// console.log(bst.max());
// console.log(bst.min());

// bst.range(3, 6);

// console.log(bst.height());

// bst.treeFromSorted([1, 2, 3, 4, 5, 6, 7, 8]);
bst.display();
console.log(bst.isBalanced());
