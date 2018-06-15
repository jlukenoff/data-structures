

// Instantiate a new graph
var Graph = function() {
  this;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {value: node, edges: []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let key in this) {
    if (key.search(/\d/) !== -1) {
      this.removeEdge(this[key].value, node);
    }
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let edges = this[fromNode].edges;
  for (let i = 0; i < edges.length; i++) {
    if (edges[i] === toNode) return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edges.push(toNode);
  this[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let edges = this[fromNode].edges;
  for (let i = 0; i < edges.length; i++) {
    if (edges[i] === toNode) {
      this[fromNode].edges.splice(i, 1);
      this[toNode].edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate through graph
  for (let node in this) {
    if (node.search(/\d/) !== -1) {
      cb(this[node].value)
    };
  }
};

// let graph = new Graph();
// graph.addNode(5);
// graph.addNode(2);
// graph.addEdge(5, 2);
// graph.removeEdge(5, 2);
// graph.hasEdge(5, 2);//?
/*
 * Complexity: What is the time complexity of the above functions?
 */


