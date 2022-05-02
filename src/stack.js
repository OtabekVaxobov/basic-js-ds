const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Stack {
  count = 0;
  storage = {};
  push(element) {
    this.storage[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.count === 0) return undefined;
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  peek() {
    return this.storage[this.count - 1];
  }
}

module.exports = {
  Stack,
};
