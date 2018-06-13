var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let storage = Object.create(queueMethods);
  return storage;
};

var queueMethods = {
  enqueue: function(value) {
    //iterate through object
    for (let index in this) {
      //move each value up one index
      if (index.search(/\d/) !== -1) {
        this[+index + 1] = this[index];
      }
    }
    //assign value to this[size]
    this['0'] = value;
  },
  dequeue: function() {
    //store final value for return
    let finalVal = this[this.size() - 1];
    //delete final value
    delete this[this.size() - 1];
    //return final val
    return finalVal;
  }, 
  size: function() {
    //set counter variable
    let counter = 0;
    //iterate through object
    for (let index in this) {
      //check for numeric keys and increment counter
      if (index.search(/\d/) !== -1) counter++;
    }
    //return counter
    return counter;
  }
};
