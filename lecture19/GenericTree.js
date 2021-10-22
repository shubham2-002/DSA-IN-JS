var readlineSync = require('readline-sync');
class Node{
    data;
    children;
    constructor(data){
        this.data = data;
        this.children = [];
    }
}

class GenericTree{
    root;
    insert(){
        let rootData = Number(readlineSync.question());
        this.root = new Node(rootData);
        this.#insert(this.root);
    }
    #insert(node){
        while(true){
            let yes = readlineSync.question(`Do you want to add child of ${node.data} `);
            if(yes === "yes"){
                let val = Number(readlineSync.question(`Enter the value of child `));
                let child = new Node(val);
                node.children.push(child);
                this.#insert(child);
            }
            else{
                break;
            }
        }
    }

    display(){
        this.#display(this.root, "");
    }
    #display(node, indent){
        console.log(indent+node.data);
        for(let child of node.children){
            this.#display(child, indent+"\t");
        }
    }
}


let genericTree = new GenericTree();
genericTree.insert();
genericTree.display();

// 1
// yes
// 2
// yes
// 3
// no
// yes
// 4
// no
// no
// yes
// 5
// no
// no