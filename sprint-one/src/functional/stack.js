var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // check size of object and grab last index
    let currentSize = someInstance.size();
    // set value equal to storage size + 1
    someInstance[currentSize + 1] = value;
  };

  someInstance.pop = function() {
    // check size of object and grab last index
    let currentSize = someInstance.size();
    //delete last value
    let finalVal = someInstance[currentSize];
    delete someInstance[currentSize];
    return finalVal;

  };

  someInstance.size = function() {
    //create counter variable to count properties
    let counter = 0;
    //iterate through instance obj 
    for (let index in someInstance) {
      // check for numeric key;
      if (index.search(/\d/) !== -1) {
        // increment counter;
        counter++;
      }
    }
    return counter;
  };

  return someInstance;
};


