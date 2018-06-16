

// Instantiate a new graph
var Graph = function() {
  this;
};

// Add a node to the graph, passing in the node's value. O(1)
Graph.prototype.addNode = function(node) {
  this[node] = {value: node, edges: []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph. O(1)
Graph.prototype.contains = function(node) {
  return this[node] !== undefined;
};

// Removes a node from the graph. O(N)
Graph.prototype.removeNode = function(node) {
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      this.removeEdge(this[key].value, node);
    }
  }
  delete this[node];
};
// O(n) for hasEdge, if we hashed the edges, could be O(1)
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let edges = this[fromNode].edges;
  for (let i = 0; i < edges.length; i++) {
    if (edges[i] === toNode) return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them. O(1)
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edges.push(toNode);
  this[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
// O(n) n being edges inputs for removeedge, if we hashed the edges, could be O(1)
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
  for (let node in this) {
    if (node.search(/\d/) !== -1) {
      cb(this[node].value)
    };
  }
};

Graph.prototype.BreadthFirstSearch = function(fromNode, toNode) {
  
}


//-----Beta------//
Graph.prototype.hasPath = function(fromNode, toNode) {
  //declare variable to track valid path from node to toNode
  let hasPath = this.hasEdge(fromNode, toNode);
  
  //chceks if fromNode has direct edge to toNode
  if (hasPath) {
    return true;
  }
  
  //iterate through each
  
  
  
  //searches edges of a current node and updates hasPath...
  //.. if a valid path is found
  var holder = this;
  var checked = [];
  var searchEdges = function(current, graph)  {
    for (var i = 0; i < current.edges.length; i++) {
      let currentEdge = current.edges[i];
      if (checked.indexOf(currentEdge) !== -1) {
        continue;
      }
      checked.push(currentEdge);
      //update hasEdge if currentEdge === toNode
      if (currentEdge === toNode) {
        hasPath = true;
      } else if (!hasPath) {
        searchEdges(holder[currentEdge]);
      }
    }
  }
  
  searchEdges(this[fromNode]);
  return hasPath;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


