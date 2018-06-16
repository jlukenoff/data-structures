

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  //fix this
  var arrayExpand = function() {
    let count = 0;
    this._storage.each(function(v, k, storage) {
      if (storage[k]) {
        count++;
      }
    })
    if (count >= this._limit * .75) {
      console.log('yes');
      this._limit *= 2;
    }
  };
  arrayExpand.call(this);
  
  
  //this works
  let currentData = this._storage.get(index);
  if (currentData) {
    let isDuplicate = false
    for (let i = 0; i < currentData.length; i += 2) {
      if (currentData[i] === k) {
        isDuplicate = true;
        currentData[i + 1] = v;
        break;
      }
    }
    if (!isDuplicate) {
      currentData.push(k);
      currentData.push(v);
    }
  } else {
    this._storage.set(index, ([k, v]));
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let currentData = this._storage.get(index);
  if (currentData.length <= 2) {
     return currentData[1]; 
  }  
  for (let i = 0; i < currentData.length; i += 2) {
    if (currentData[i] === k) {
      return currentData[i + 1];
    }
  }
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let currentData = this._storage.get(index);
  if (currentData.length <= 2) {
     currentData.splice(0, 2); 
  }  
  for (let i = 0; i < currentData.length; i++) {
    if (currentData[i] === k) {
      currentData.splice(i, 2)
    }
  }
};






/*
 * Complexity: What is the time complexity of the above functions?
 */


