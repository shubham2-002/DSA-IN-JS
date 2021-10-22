class Vertex {
  data;
  neighbours;
  constructor(data) {
    this.data = data;
    this.neighbours = new Map();
  }

  addNeighbour(neighbour, weight) {
    this.neighbours.set(neighbour, weight);
  }
}

class Graph {
  #vertices;
  #edges;
  constructor() {
    this.#vertices = new Map();
    this.#edges = [];
  }

  addVertex(data) {
    if (this.#vertices.has(data) === false) {
      let vertex = new Vertex(data);
      this.#vertices.set(data, vertex);
    }
  }

  getVertex(data) {
    if (this.#vertices.has(data)) {
      return this.#vertices.get(data);
    } else {
      return null;
    }
  }

  addEdge(v1, v2, weight) {
    let v1Vertex = this.getVertex(v1);
    let v2Vertex = this.getVertex(v2);

    if (v1Vertex && v2Vertex) {
      this.#edges.push([v1Vertex, v2Vertex, weight]);
      v1Vertex.addNeighbour(v2Vertex, weight);
      v2Vertex.addNeighbour(v1Vertex, weight);
    }
  }

  display() {
    for (const [data, vertex] of this.#vertices) {
      process.stdout.write(data + " -> ");
      let arr = [];
      for (const neighbour of vertex.neighbours) {
        arr.push(neighbour.data);
      }
      process.stdout.write(arr.join(", "));
      process.stdout.write("\n");
    }
  }

  find(vertex, parent){
      while(parent.has(vertex)){
          vertex = parent.get(vertex);
      }
      return vertex;
  }

  union(v1, v2, parent){
      let v1Parent = this.find(v1, parent);
      let v2Parent = this.find(v2, parent);

      if(v1Parent != v2Parent){
          parent.set(v2Parent, v1Parent);
          return true;
      }
      return false;
  }

  detectCycle(){
      let parent = new Map();

      for(let [v1, v2, weight] of this.#edges){
          if(this.union(v1, v2, parent) == false){
              return true;
          }
      }
      return false;
  }

  // O(ElogE  or ElogV)
  kruskal(){
      let edges = [...this.#edges];

      edges.sort((a, b) => a[2] - b[2]);

      let totalCost = 0;
      let parent = new Map();

      for(let [v1, v2, weight] of edges){
          if(this.union(v1, v2, parent)){
              totalCost += weight;
          }
      }
      return totalCost;
  }

}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addVertex("H");

graph.addEdge("A", "B", 10);
graph.addEdge("B", "C", 20);
graph.addEdge("B", "F", 30);
graph.addEdge("C", "D", 40);
graph.addEdge("C", "E", 14);
graph.addEdge("A", "G", 25);
graph.addEdge("G", "H", 32);
graph.addEdge("C", "H", 4);


// graph.display();

console.log(graph.detectCycle());
console.log(graph.kruskal());



