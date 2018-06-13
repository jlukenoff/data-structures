var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this;
};

Stack.prototype.push = function(value) {
  //find target index
  let targetIndex = this.size();
  //assign value to finalIndex + 1
  this[targetIndex] = value;
};

Stack.prototype.pop = function() {
  //find finalIndex
  let finalIndex = this.size() - 1;
  //store final value for return
  let finalValue = this[finalIndex];
  //delete final value
  delete this[finalIndex];
  //return final value
  return finalValue;
};

Stack.prototype.size = function() {
  //decalre counter variable
  let counter = 0;
  //iterate through object
  for (let index in this) {
    // increment counter
    if (index.search(/\d/) !== -1) counter++;
  }
  return counter;
};
