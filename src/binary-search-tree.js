const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  rootNode = null;

  addChildren(node) {
    if (node.left !== null) {
      this.add(node.left.data);
      this.addChildren(node.left);
    }
    if (node.right !== null) {
      this.add(node.right.data);
      this.addChildren(node.right);
    }
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
      return;
    }
    function addNode(currentNode, value) {
      if (currentNode.data > value) {
        if (currentNode.left === null) {
          currentNode.left = new Node(value);
          return;
        }
        addNode(currentNode.left, value);
      }
      if (currentNode.data < value) {
        if (currentNode.right === null) {
          currentNode.right = new Node(value);
          return;
        }
        addNode(currentNode.right, value);
      }
    }
    addNode(this.rootNode, data);
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    if (this.rootNode === null) {
      return null;
    }
    function findData(currentNode, value) {
      if (currentNode.data == value) {
        return currentNode;
      }
      if (currentNode.data > value) {
        if (currentNode.left !== null) {
          return findData(currentNode.left, value);
        }
        return null;
      }
      if (currentNode.data < value) {
        if (currentNode.right != null) {
          return findData(currentNode.right, value);
        }
        return null;
      }
      return null;
    }
    return findData(this.rootNode, data);
  }

  remove(data) {
    function findParentNode(currentNode, value) {
      let parent = currentNode;
      let left = currentNode.left;
      let right = currentNode.right;

      if (
        (left != null && left.data == value) ||
        (right != null && right.data == value)
      ) {
        return parent;
      }
      if (parent.data > value) {
        if (left !== null) {
          return findParentNode(left, value);
        }
      }
      if (parent.data < value) {
        if (right != null) {
          return findParentNode(right, value);
        }
      }
      return null;
    }

    if (this.rootNode.data === data) {
      let oldRoot = this.rootNode;
      this.rootNode = null;
      this.addChildren(oldRoot);
      return;
    }

    let parent = findParentNode(this.rootNode, data);
    if (parent === null) {
      return null;
    }
    let removedNode;
    if (parent.left != null && parent.left.data === data) {
      removedNode = parent.left;
      parent.left = null;
    }
    if (parent.right != null && parent.right.data === data) {
      removedNode = parent.right;
      parent.right = null;
    }
    this.addChildren(removedNode);
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }
    function min(node) {
      if (node.left !== null) {
        return min(node.left);
      }
      return node.data;
    }
    return min(this.rootNode);
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }
    function max(node) {
      if (node.right !== null) {
        return max(node.right);
      }
      return node.data;
    }
    return max(this.rootNode);
  }
}

module.exports = {
  BinarySearchTree,
};
