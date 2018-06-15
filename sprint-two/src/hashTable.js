

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let currentData = this._storage.get(index);
  if (currentData !== undefined) {  
    this._storage.each(function(val, i, storage) {  
      if (i === index) {
        storage[i].push([k, v]);
      }
    });
  } else {
    this._storage.set(index, [k, v]);
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // function(index) {
  //   checkLimit(index);
  //   return storage[index];
  
  let tuple = this._storage.get(index);
  return tuple[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(v, i, storage) {  
    if (storage[i][1] === index) {
      storage[i].splice(1, 1);
    }
  });
};






/*
 * Complexity: What is the time complexity of the above functions?
 */


