var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let storage = Object.create(stackMethods);
  return storage;
};

var stackMethods = {
  push: function(value) {
    //set finalIndex variable
    let finalIndex = this.size();
    //assign value to this[finalIndex + 1]
    this[+finalIndex + 1] = value;
  },
  pop: function() {
    //store final index value for later return
    let finalValue = this[this.size()];
    //delete final value
    delete this[this.size()];
    //return final value
    return finalValue;
  },
  size: function() {
    //set counter variable
    let counter = 0;
    //iterate through object
    for (let index in this) {
      //check for numeric keys and incrment counter
      if (index.search(/\d/) !== -1) counter++
    }
    //return counter
    return counter;
  }
};



