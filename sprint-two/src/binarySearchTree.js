var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.height = 1;
  
  // O(log n)
  tree.insert = function(value, node, height) {
    node = node || tree;
    height = height || 1;
    //check if value > node.value
    if (value > node.value) {
      height++;
      //check if node.right 
      if (node.right) {
        //insert(value, node.right)
        tree.insert(value, node.right, height);
      } else {
      // else node.right = {value: value};
        node.right = {value: value};
      }
    //check if value < node.value
    } else {     
      //check if node.left 
      height++;
      if (node.left) {
        //insert(value, node.left)
        tree.insert(value, node.left, height)
      } else {
      // else node.left = {value: value};
        node.left = {value: value};
      }
    }
    if (tree.height < height) {
      tree.height = height;
    }
  }
  
  // O(log n)
  tree.contains = function(target, node) {
    node = node || tree;
    if (target == node.value) {
      return true;
    //else if target > node.value and node.right !== undefined
    } else if (target > node.value && node.right !== undefined) {
      return tree.contains(target, node.right)
    //else if target < node.value and node.left !== undefined
    } else if (target < node.value && node.left !== undefined) {
      // return contains(target, node.left)
      return tree.contains(target, node.left);
    } 
    return false;   
  }
  
  // O(n)
  tree.depthFirstLog = function(func, node) {
    node = node || tree;
    func(node.value);
    //chcek if node.left
    if (node.left) {
      tree.depthFirstLog(func, node.left);
    }
    //check if node.right
    if (node.right) {
      tree.depthFirstLog(func, node.right);
    }
  }
  
  tree.getMaxHeight = function(/*func, node, level = 0*/) {
    return tree.height;
  }
  
  tree.breadthFirstLog = function(func, node) {
    node = node || tree;
    var queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      func(node.value)
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);  
      }
    }
  }
  
  
  return tree
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
