class Node{
    data;
    left;
    right;
    height;
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVL{
    #root = null;

    // O(1)
    height(){
        return this.#height(this.#root);
    }
    #height(node){
        if(node ==  null){
            return 0;
        }
        return node.height;
    }

    // O(logn)
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

        node.height = Math.max(this.#height(node.left), this.#height(node.right)) + 1;

        node = this.#avlBalance(node);
        return node;
    }

    // O(logn)
    delete(target){
        this.#root = this.#delete(target, this.#root);
    }
    #delete(target, node){
        if(node == null){
            return null;
        }

        if(target < node.data){
            node.left = this.#delete(target, node.left);
        }
        else if(target > node.data){
            node.right = this.#delete(target, node.right);
        }
        else{
            if(node.left == null && node.right == null){
                return null;
            }
            else if(node.left ==  null){
                return node.right;
            }
            else if(node.right == null){
                return node.left;
            }
            else{
                let nextVal = this.#findNext(node.right);
                node.value = nextVal;
                node.right = this.#delete(nextVal, node.right);
            }
        }
        node.height =  Math.max(this.#height(node.left), this.#height(node.right)) + 1;
        node = this.#avlBalance(node);
        return node;
    }

    // O(logn)
    #findNext(node){
        if(node.left == null){
            return node.data;
        }
        return this.#findNext(node.left);
    }

    // O(log(n))
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

    // O(1)
    #avlBalance(node){
        if(this.#height(node.left) - this.#height(node.right) > 1 ){
            if(this.#height(node.left.left) - this.#height(node.left.right) <0){
                node.left = this.#leftRotate(node.left);
            }
            node = this.#rightRotate(node);
        }
        else if(this.#height(node.left) - this.#height(node.right) < -1 ){
            if(this.#height(node.right.left) - this.#height(node.right.right) > 0){
                node.right = this.#rightRotate(node.right);
            }
            node = this.#leftRotate(node);
        }

        return node;
    }

    // O(1)
    #leftRotate(x){
        let y = x.right;
        let t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = Math.max(this.#height(x.left), this.#height(x.right))+1;
        y.height = Math.max(this.#height(y.left), this.#height(y.right))+1;

        return y;
    }

    // O(1)
    #rightRotate(x){
        let y = x.left;
        let t2 = y.right;

        y.right = x;
        x.left = t2;

        x.height = Math.max(this.#height(x.left), this.#height(x.right))+1;
        y.height = Math.max(this.#height(y.left), this.#height(y.right))+1;
        
        return y;
    }

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

let avl = new AVL();

for(let index = 0; index < 1000000; index++){
    avl.insert(index);
}

console.log(avl.isBalanced(), avl.height());

for(let index = 0; index < 999996; index++){
    avl.delete(index);
}

console.log(avl.isBalanced(), avl.height());
