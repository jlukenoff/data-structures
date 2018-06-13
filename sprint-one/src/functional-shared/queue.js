var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create storage object
  let storage = {};
  storage.enqueue = queueMethods.enqueue;
  storage.dequeue = queueMethods.dequeue;
  storage.size = queueMethods.size;
  
  return storage;
};

var queueMethods = {

  //create enqueue method
  enqueue: function(value) {
    //iterate through storage
    for (let index in this) {
      //move each value up one index
      if (index.search(/\d/) !== -1) {
        this[+index + 1] = this[index];
      }
    }
    //assign value to index 0
    this['0'] = value;//?
  },
  
  //create dequeue method
  dequeue: function() {
    //remove last item in queue
    //store last value for return
    let finalVal = this[this.size() - 1];
    //delete last value
    delete this[this.size() - 1];
    //return last value
    return finalVal;
  },

  //create size method
  size: function() {
    //declare counter variable
    let counter = 0;
    // iteraet throuhg storage
    for (let index in this) {
      //check if numeric key and increment counter variable
      if (index.search(/\d/) !== -1) counter++;
    }
    //return counter
    return counter;
  }
};
