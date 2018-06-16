var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;

  newTree.contains = treeMethods.contains;
  
  newTree.forEach = treeMethods.forEach;

  return newTree;
};

var treeMethods = {};
// O(1) runtime
treeMethods.addChild = function(value) {
  //create new tree
  let tree = Tree(value);
  // push to current tree's children array
  this.children.push(tree);
};
// O(n)
treeMethods.contains = function(target) {
  let isTrue = false;
  let checkVal = function(tree) {
    if (tree.value === target) {
      isTrue = true;
    }
    for (let i = 0; i < tree.children.length; i++) {
      checkVal(tree.children[i]);
    }
  }
  
  checkVal(this);
  return isTrue;
};
// O(n)
treeMethods.forEach = function(func) {
  let each = function(tree) {
    if (tree.value !== undefined) {
          func(tree.value)
    }
    for (let i = 0; i < tree.children.length; i++) {
      each(tree.children[i]);
    }
  }
  each(this);
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
