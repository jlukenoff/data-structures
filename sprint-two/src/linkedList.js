var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
//O(1)
  list.addToTail = value => {
    let node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      node.prev = list.tail;
      list.tail = node;
    }
  };
  //O(1)
  list.addToHead = value => {
    let node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    }
    list.head.prev = node;
    node.next = list.head;
    list.head = node;
  }
  //O(1)
  list.removeTail = () => {
    let removed = list.tail.value;
    list.tail = list.tail.prev;
    list.tail.next = null;
    return removed;
  }
//O(1)
  list.removeHead = () => {
    //store removed value for return
    let removed = list.head.value;
    if (list.head.next !== null) { 
      list.head = list.head.next;
      list.head.prev = null;
    } else {
      list.head = list.head.next;
    }

    return removed;
  };
//O(n)
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
