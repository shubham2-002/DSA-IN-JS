class Vertex {
  data;
  neighbours;
  constructor(data) {
    this.data = data;
    this.neighbours = [];
  }
}

class Graph {
  #vertices;
  constructor() {
    this.#vertices = new Map();
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

  addEdge(v1, v2) {
    let v1Vertex = this.getVertex(v1);
    let v2Vertex = this.getVertex(v2);

    if (v1Vertex && v2Vertex) {
      v1Vertex.neighbours.push(v2Vertex);
      v2Vertex.neighbours.push(v1Vertex);
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

  // O(V+E)
  hasPath(v1, v2) {
    let sVertex = this.getVertex(v1);
    let stack = [];
    let visited = new Set();

    stack.push(sVertex);
    visited.add(sVertex);

    while (stack.length > 0) {
      let top = stack.pop();
      if (top.data === v2) {
        return true;
      }

      for (let neighbour of top.neighbours) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
          visited.add(neighbour);
        }
      }
    }

    return false;
  }

  // O(V*(V+E))
  findAllPaths(v1, v2) {
    let v1Vertex = this.getVertex(v1);

    let visited = new Set();
    let path = [];
    let allPaths = [];

    visited.add(v1Vertex);
    path.push(v1);

    this.#findAllPaths(v1Vertex, v2, visited, path, allPaths);
    return allPaths;
  }
  #findAllPaths(cur, target, visited, path, allPaths) {
    if (cur.data == target) {
      allPaths.push(path.join(" -> "));
      return;
    }

    for (let neighbour of cur.neighbours) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        path.push(neighbour.data);
        this.#findAllPaths(neighbour, target, visited, path, allPaths);
        path.pop();
        visited.delete(neighbour);
      }
    }
  }

  // O(V+E)
  countConnectedComponents() {
    let visited = new Set();
    let components = 0;

    for (let [vertexData, vertex] of this.#vertices) {
      if (visited.has(vertex)) {
        continue;
      }

      let stack = [];
      stack.push(vertex);
      visited.add(vertex);

      while (stack.length > 0) {
        let top = stack.pop();

        for (let neighbour of top.neighbours) {
          if (!visited.has(neighbour)) {
            stack.push(neighbour);
            visited.add(neighbour);
          }
        }
      }
      components++;
    }
    return components;
  }

  // O(V+E)
  isConnected() {
    let visited = new Set();
    let components = 0;

    for (let [vertexData, vertex] of this.#vertices) {
      if (visited.has(vertex)) {
        continue;
      }

      let stack = [];
      stack.push(vertex);
      visited.add(vertex);

      while (stack.length > 0) {
        let top = stack.pop();

        for (let neighbour of top.neighbours) {
          if (!visited.has(neighbour)) {
            stack.push(neighbour);
            visited.add(neighbour);
          }
        }
      }
      components++;
    }
    return components === 1;
  }

  // O(V+E)
  allConnectedComponents() {
    let visited = new Set();
    let allComponents = [];

    for (let [vertexData, vertex] of this.#vertices) {
      if (visited.has(vertex)) {
        continue;
      }

      let stack = [];
      let component = [];
      stack.push(vertex);
      visited.add(vertex);

      while (stack.length > 0) {
        let top = stack.pop();
        component.push(top.data);
        for (let neighbour of top.neighbours) {
          if (!visited.has(neighbour)) {
            stack.push(neighbour);
            visited.add(neighbour);
          }
        }
      }
      allComponents.push(component);
    }
    return allComponents;
  }

  // O(V+E)
  bipartite() {
    let visited = new Set();
    let red = new Set();
    let black = new Set();

    for (let [vertexData, vertex] of this.#vertices) {
      if (visited.has(vertex)) {
        continue;
      }

      let stack = [];

      stack.push(vertex);
      visited.add(vertex);
      red.add(vertex);

      while (stack.length > 0) {
        let parent = stack.pop();

        for (let neighbour of parent.neighbours) {
          if (!visited.has(neighbour)) {
            stack.push(neighbour);
            visited.add(neighbour);

            if (red.has(parent)) {
              black.add(neighbour);
            } else {
              red.add(neighbour);
            }
          } else {
            if (red.has(parent) && red.has(neighbour)) {
              return false;
            }

            if (black.has(parent) && black.has(neighbour)) {
              return false;
            }
          }
        }
      }
    }
    return true;
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

graph.addEdge("A", "B");
graph.addEdge("A", "C");
// graph.addEdge("B", "C");
graph.addEdge("D", "E");
graph.addEdge("F", "E");
graph.addEdge("C", "D");

graph.display();

// console.log(graph.hasPath("A", "E"));
console.log(graph.bipartite());
