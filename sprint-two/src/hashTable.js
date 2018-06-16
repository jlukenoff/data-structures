

var HashTable = function(limit = 8) {
  //sets array size for hashing function
  this._limit = limit;
  
  //stores hash table array
  this._storage = LimitedArray(this._limit);
  this._capacity = 0;
};
//For regular insert -> O(1), collision -> nearly O(1) and resizing is O(n)
HashTable.prototype.insert = function(k, v) {
  //finds index for given key
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  //grabs current node from storage based on index
  let currentNode = this._storage.get(index);
  
  //check if node is already populated with data
  if (currentNode) {
    //tracks duplicate keys for overwriting
    let isDuplicate = false
    
    //iterate through node keys
    for (let i = 0; i < currentNode.length; i += 2) {
      //compare current key against given key
      if (currentNode[i] === k) {
        //update duplicate tracker
        isDuplicate = true;
        //overwrite value for duplicate key
        currentNode[i + 1] = v;
        break;
      }
    }
    //handles collisions
    if (!isDuplicate) {
      currentNode.push(k, v);
    }
  } else {
    //handles non-collision insert
    this._storage.set(index, ([k, v]));
    //increment capacity
    this._capacity++;
    //check if capacity >75% limit
    if (this._capacity > this._limit * .60) {
      //create new hash table array
      this._limit *= 2;
      let newHash = new HashTable(this._limit)
      
      //iterate through each node of current hash table
      this._storage.each(function(value, index, storage) {
        //insert k:v pairs to new hash storage
        if (value !== undefined) newHash.insert(value[0], value[1]);
      });
      this._storage = newHash._storage;
    }   
  }
};
//Retrieve is O(1) for regular, nearly O(1) for collision;
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let currentNode = this._storage.get(index);
  if (currentNode.length <= 2) {
     return currentNode[1]; 
  }  
  for (let i = 0; i < currentNode.length; i += 2) {
    if (currentNode[i] === k) {
      return currentNode[i + 1];
    }
  }
  
};
//O(1) for removal, nearly O(1) for collision removal, O(n) for downsize
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._capacity--;
  let currentNode = this._storage.get(index);
  if (currentNode !== undefined) {
    if (currentNode.length <= 2) {
       delete currentNode; 
    }  
    for (let i = 0; i < currentNode.length; i += 2) {
      if (currentNode[i] === k) {
        currentNode.splice(i, 2)
      }
    }
  }
  if (this._capacity < this._limit * .30 && this._limit > 8) {
    //create new hash table array
    this._limit *= .5
    let newHash = new HashTable(this._limit)
    
    //iterate through each node of current hash table
    this._storage.each(function(value, index, storage) {
      //insert k:v pairs to new hash storage
      if (value !== undefined) {
        
        if (value.length > 0) {
          newHash.insert(value[0], value[1]);
        }
      }
    });
    
    this._storage = newHash._storage;
  }  
};






/*
 * Complexity: What is the time complexity of the above functions?
 */


