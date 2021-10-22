class Vertex{
    data;
    neighbours;
    constructor(data){
        this.data = data;
        this.neighbours = [];
    }
}

class Graph{
    #vertices;
    constructor(){
        this.#vertices = new Map();
    }

    addVertex(data){
        if(this.#vertices.has(data) === false){
            let vertex = new Vertex(data);
            this.#vertices.set(data, vertex);
        }
    }

    getVertex(data){
        if(this.#vertices.has(data)){
            return this.#vertices.get(data);
        }
        else{
            return null;
        }
    }

    addEdge(v1, v2){
        let v1Vertex = this.getVertex(v1);
        let v2Vertex = this.getVertex(v2);

        if(v1Vertex && v2Vertex){
            v1Vertex.neighbours.push(v2Vertex);
            v2Vertex.neighbours.push(v1Vertex);
        }
    }

    display(){
        for (const [data, vertex] of this.#vertices) {
            process.stdout.write(data+" -> ");
            let arr = []
            for(const neighbour of vertex.neighbours){
                arr.push(neighbour.data);
            }
            process.stdout.write(arr.join(", "));
            process.stdout.write("\n");
        }
    }

    dft(start){
        let sVertex = this.getVertex(start);
        let stack = [];
        let visited = new Set();

        stack.push(sVertex);
        visited.add(sVertex);

        while(stack.length > 0){
            let top = stack.pop();
            console.log(top.data);

            for(let neighbour of top.neighbours){
                if(!visited.has(neighbour)){
                    stack.push(neighbour);
                    visited.add(neighbour);
                }
            }
        }
    }

    dfs(start, target){
        let sVertex = this.getVertex(start);
        let stack = [];
        let visited = new Set();

        stack.push(sVertex);
        visited.add(sVertex);

        while(stack.length > 0){
            let top = stack.pop();
            if(top.data === target){
                return true;
            }

            for(let neighbour of top.neighbours){
                if(!visited.has(neighbour)){
                    stack.push(neighbour);
                    visited.add(neighbour);
                }
            }
        }

        return false;
    }

    bft(start){
        let sVertex = this.getVertex(start);
        let queue = [];
        let visited = new Set();

        queue.push(sVertex);
        visited.add(sVertex);

        while(queue.length>0){
            let deque = queue.shift();
            console.log(deque.data);

            for (const neighbour of deque.neighbours) {
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }
    }

    bfs(start, target){
        let sVertex = this.getVertex(start);
        let queue = [];
        let visited = new Set();

        queue.push(sVertex);
        visited.add(sVertex);

        while(queue.length>0){
            let deque = queue.shift();
            if(deque.data === target){
                return true;
            }

            for (const neighbour of deque.neighbours) {
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }
        return false;
    }

    bft2(start){
        let sVertex = this.getVertex(start);
        let queue = [];
        let visited = new Set();

        queue.push(sVertex);
        visited.add(sVertex);

        while(queue.length>0){
            let size = queue.length;

            for(let i =0; i<size; i++){
                let deque = queue.shift();
                process.stdout.write(`${deque.data} `);
                for (const neighbour of deque.neighbours) {
                    if(!visited.has(neighbour)){
                        visited.add(neighbour);
                        queue.push(neighbour);
                    }
                }
            }
            process.stdout.write("\n");
            
        }
    }


}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("D", "E");
graph.addEdge("C", "D");

graph.display();

// graph.dft("B");

// console.log(graph.dfs("A", "D"))

// graph.bft("A");

// console.log(graph.bfs("A", "B"))

graph.bft2("A");