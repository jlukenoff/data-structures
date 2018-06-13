var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this;
};

Queue.prototype.enqueue = function(value) {
  //iterate through object
  for (let index in this) {
    //move each value up one index
    if (index.search(/\d/) !== -1) {
      this[+index + 1] = this[index];
    }
  }
  //assign value to index 0
  this['0'] = value;
};

Queue.prototype.dequeue = function() {
  let finalIndex = this.size() - 1;
  let finalValue = this[finalIndex];
  delete this[finalIndex];
  return finalValue;

};

Queue.prototype.size = function() {
  let counter = 0;
  for (let index in this) {
    if (index.search(/\d/) !== -1) counter++;
  }
  return counter;
};
