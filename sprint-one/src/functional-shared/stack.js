var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let storage = {};
  storage.push = stackMethods.push;
  storage.pop = stackMethods.pop;
  storage.size = stackMethods.size;
  return storage;
};

var stackMethods = {
  push: function(value) {
    //declare final index
    let finalIndex = this.size();
    //assign value to final index + 1
    this[+finalIndex + 1] = value;
  },
  pop: function() {
    //declare final Index
    let finalIndex = this.size();
    //store final value for output
    let finalVal = this[this.size()];
    //delete final value
    delete this[this.size()];
    //return final value
    return finalVal;
  },
  size: function() {
    // set counter variable
    let counter = 0;
    // iterate through object
    for (let index in this) {
      //check for numeric key and increment counter
      if (index.search(/\d/) !== -1) counter++;
    }
    // return counterr
    return counter;
  }
};

