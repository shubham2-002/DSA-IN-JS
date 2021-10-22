class MinHeap {
  #data;
  constructor() {
    this.#data = [];
  }

  size() {
    return this.#data.length;
  }

  // O(1)
  #left(idx) {
    return 2 * idx + 1;
  }

  // O(1)
  #right(idx) {
    return 2 * idx + 2;
  }

  // O(1)
  #parent(idx) {
    return parseInt((idx - 1) / 2);
  }

  // O(logn)
  insert(value) {
    this.#data.push(value);

    let idx = this.size() - 1;

    while (idx > 0) {
      let parent = this.#parent(idx);
      if (this.#data[idx].distance < this.#data[parent].distance) {
        [this.#data[idx], this.#data[parent]] = [
          this.#data[parent],
          this.#data[idx],
        ];
        idx = parent;
      } else {
        break;
      }
    }
  }

  // O(logn)
  remove() {
    let value = this.#data[0];

    this.#data[0] = this.#data[this.size() - 1];
    this.#data.pop();

    let idx = 0;
    while (idx < this.size()) {
      let left = this.#left(idx);
      let right = this.#right(idx);

      let minIdx = idx;

      if (
        left < this.size() &&
        this.#data[left].distance < this.#data[minIdx].distance
      ) {
        minIdx = left;
      }

      if (
        right < this.size() &&
        this.#data[right].distance < this.#data[minIdx].distance
      ) {
        minIdx = right;
      }

      if (idx != minIdx) {
        [this.#data[idx], this.#data[minIdx]] = [
          this.#data[minIdx],
          this.#data[idx],
        ];
        idx = minIdx;
      } else {
        break;
      }
    }
    return value;
  }
}

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

class djPair {
  vertex;
  distance;
  constructor(vertex, distance) {
    this.vertex = vertex;
    this.distance = distance;
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

  // O(V + ElogV)
  dijkstra(source) {
    let sVertex = this.#vertices.get(source);

    let distance = new Map();
    for (let [data, vertex] of this.#vertices) {
      distance.set(vertex, Infinity);
    }
    distance.set(sVertex, 0);

    let visited = new Set();

    let pq = new MinHeap();
    let sPair = new djPair(sVertex, 0);
    pq.insert(sPair);

    while (pq.size() > 0) {
      let minPair = pq.remove();
      visited.add(minPair.vertex);

      for (let [padosi, weight] of minPair.vertex.neighbours) {
        if (!visited.has(padosi)) {
          if (distance.get(padosi) > distance.get(minPair.vertex) + weight) {
            distance.set(padosi, distance.get(minPair.vertex) + weight);
            let padosiPair = new djPair(
              padosi,
              distance.get(minPair.vertex) + weight
            );
            pq.insert(padosiPair);
          }
        }
      }
    }

    for (let [vertex, dis] of distance) {
      console.log(`${vertex.data} => ${dis}`);
    }
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");


graph.addEdge("A", "B", 2);
graph.addEdge("B", "C", 1);
graph.addEdge("A", "C", 4);
graph.addEdge("B", "D", 7);
graph.addEdge("C", "E", 3);
graph.addEdge("D", "E", 2);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 3);

// graph.display();

graph.dijkstra("A");
