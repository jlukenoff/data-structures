var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;

  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create new tree
  let tree = Tree(value);
  // push to current tree's children array
  this.children.push(tree);
};

treeMethods.contains = function(target, node) {
  node = node || this;
  //check if node.value ==== target
  if (node.value === target) {
    return true;
  }
  //iterate through children
  for (let i = 0; i < node.children.length; i++) {
    //call contains on each child
    return treeMethods.contains(target, node.children[i]);
  }
  return false;
};

let tree = Tree();
tree.addChild(5);
tree.addChild(6);
tree/*?*/.children[0].addChild(7);
tree.children[1].addChild(8);
tree;//?
tree.contains(8);//?
tree.contains(7);//?


/*
 * Complexity: What is the time complexity of the above functions?
 */
