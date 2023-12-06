// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      this.root = null
    }

    insert(val, currentNode = this.root) {
      //can set a variable for new TreeNode(val)
      //if root is nonexistent create a new treenode that is the root
      if (this.root === null) {
        this.root = new TreeNode(val)
        return this.root
      }
      //inserting nodes to the right of root whereas the val of the node we're at is bigger than
      if (val >= currentNode.val) {
        if (currentNode.right === null) { //if it doesn't exist create
          currentNode.right = new TreeNode(val)
          return currentNode.right
        } else {
          return this.insert(val, currentNode.right) //recurse call
        }
      }
      //inserting nodes to the left if smaller than val
      if (val <= currentNode.val) {
        if (currentNode.left === null) { //if the node on the left doesn't exist
          currentNode.left = new TreeNode(val)
          return currentNode.left
        } else {
          return this.insert(val, currentNode.left)
        }
      }
    }

    search(val, currentNode = this.root) {
      //if the root isn't the target return false
      if (currentNode === null) return false
      //if the current node is the target return true
      if (currentNode.val === val) return true
      //if target is less than the currentnode's value we recurse back up but now checking the .left of current node
      if (val < currentNode.val) {
        return this.search(val, currentNode.left)
      }
      if (val > currentNode.val) {
        return this.search(val, currentNode.right)
      }
    }


    //self, left, right //roots
    preOrderTraversal(currentNode = this.root) {
      if (currentNode === null) return
      console.log(currentNode.val)
      this.preOrderTraversal(currentNode.left)
      this.preOrderTraversal(currentNode.right)
    }

    //left, self, right //insequence
    inOrderTraversal(currentNode = this.root) {
      if (currentNode === null) return
      this.inOrderTraversal(currentNode.left)
      console.log(currentNode.val)
      this.inOrderTraversal(currentNode.right)
    }

    //left, right, self //leafs
    postOrderTraversal(currentNode = this.root) {
      if (currentNode === null) return
      this.postOrderTraversal(currentNode.left)
      this.postOrderTraversal(currentNode.right)
      console.log(currentNode.val)
    }

    // Breadth First Traversal - Iterative
    //start at the root then each level left to right
    //array base que shift and push
    breadthFirstTraversal(currentNode = this.root) {
      // Put the starting node in a queue
      let que = []
      que.push(currentNode)
      // While the queue is not empty
      while (que.length > 0) {
        // Dequeue a node and print it
        let node = que.shift()
        console.log(node.val)

        // Put all of the node's children in the back of the queue
        // need if conditionals for each one otherwise it will keep going
        if (node.left) {
          que.push(node.left)
        }
        if (node.right) {
          que.push(node.right)
        }
      }
      return
    }

    // Depth First Traversal - Iterative
    //array base stack pop and push
    depthFirstTraversal(currentNode = this.root) {
      let stack = []
      stack.push(currentNode)
      // While the queue is not empty
      while (stack.length > 0) {
        // Dequeue a node and print it
        let node = stack.pop()
        console.log(node.val)

        // Put all of the node's children in the back of the queue
        // need if conditionals for each one otherwise it will keep going
        if (node.left) {
          stack.push(node.left)
        }
        if (node.right) {
          stack.push(node.right)
        }
      }
      return
    }
  }

  module.exports = { BinarySearchTree, TreeNode };
