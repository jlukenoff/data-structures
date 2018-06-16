var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  // O(log n)
  tree.insert = function(value, node) {
    node = node || tree;
    //check if value > node.value
    if (value > node.value) {
      //check if node.right 
      if (node.right) {
        //insert(value, node.right)
        tree.insert(value, node.right);
      } else {
      // else node.right = {value: value};
        node.right = {value: value};
      }
    //check if value < node.value
    } else {     
      //check if node.left 
      if (node.left) {
        //insert(value, node.left)
        tree.insert(value, node.left)
      } else {
      // else node.left = {value: value};
        node.left = {value: value};
      }
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
  
  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
