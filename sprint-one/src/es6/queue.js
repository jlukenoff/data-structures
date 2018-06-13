class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this;
  }

  enqueue(value) {
    for (let index in this) {
      if (index.search(/\d/) !== -1) {
        this[+index + 1] = this[index];
      };
    }
    this['0'] = value;
  }

  dequeue() {
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
