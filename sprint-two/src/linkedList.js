var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create new Node and set node.value to value
    let node = Node(value);
    //chcek if list is empty
    if (list.head === null) {
      //set list.head, list.tail to node
      list.head = node;
      list.tail = node;
    } else {
      //point tail.next to node
      list.tail.next = node;
      //set tail to node
      list.tail = node;
    }
  };

  list.removeHead = function() {
    //store removed value for return
    let removed = list.head.value;
    //redirect head
    list.head = list.head.next;
    //return value
    return removed;
  };

  list.contains = function(target) {
    //declare initial current
    let current = list.head;
    //iterate through list 
    while(current) {
      // check if current.value === target
      if (current.value === target) {
        //return true;
        return true;
      }
      //set current variable to current.next
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
