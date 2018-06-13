class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this;
  }

  push(value) {
    let targetIndex = this.size();
    this[targetIndex] = value;
  }

  pop() {
    let targetIndex = this.size() - 1;
    let targetValue = this[targetIndex];
    delete this[targetIndex];
    return targetValue;
  }

  size() {
    let counter = 0;
    for (let index in this) {
      if (index.search(/\d/) !== -1) counter++;
    }
    return counter;
  }

}
