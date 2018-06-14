var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  
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
  
  tree.contains = function(target, node) {
    //check if target == node.value
      return true;
    //else if target > node.value and node.right !== undefined
      // contains(target, node.right)
    else 
    
  }
  
  tree.depthFirstLog = function(node) {
    let logged = [];
    
    return logged;
  }
  
  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
