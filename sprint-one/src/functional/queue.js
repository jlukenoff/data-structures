var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //iterate through object
    for (let index in storage) {
      //check for numeric key and move each value up one index
      if (index.search(/\d/) !== -1) storage[+index + 1] = storage[index];
    }

    //set value to obj['0'];
    storage['0'] = value;
  };

  someInstance.dequeue = function() {
    //store last value for return
    let finalVal = storage[someInstance.size() - 1];
    //delete last value
    delete storage[someInstance.size() - 1];
    // return last value
    return finalVal;
  };

  someInstance.size = function() {
    //declare counter variable
    let counter = 0;
    //iterate throuugh object
    for (let index in storage) {
      //check for numeric keys and increment counter variable
      if (index.search(/\d/) !== -1) counter++;
    }
    return counter;
  };

  return someInstance;
};
