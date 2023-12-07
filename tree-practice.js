const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  if (!rootNode) return null;

  let current = rootNode;

  while (current.left) {
    current = current.left
  }
  return current.val
}

function findMaxBST(rootNode) {
  if (!rootNode) return null;
  if (!rootNode.right) return rootNode.val;
  return findMaxBST(rootNode.right)
}

function findMinBT(rootNode) {
  let queue = [rootNode];

  let minVal = rootNode.val;

  while (queue.length) {
    let node = queue.shift();
    if (node.val < minVal) {
      minVal = node.val;
    }
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  return minVal;
}

function findMaxBT(rootNode) {
  let queue = [rootNode];

  let maxVal = rootNode.val;

  while (queue.length) {
    let node = queue.shift();
    if (node.val > maxVal) {
      maxVal = node.val;
    }
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  return maxVal;
}

function getHeight(rootNode) {
  // if (!rootNode) return -1

  // don't need explicit line 240 because because the +1 from our line 63 sums to 0 hence returning 0

  // let leftHeight = getHeight(rootNode.left)
  // let rightHeight = getHeight(rootNode.right)
  // return Math.max(leftHeight, rightHeight)+1 //EXPLAIN THIS SHIT PLS

  if (!rootNode) return -1 //line236
  if (rootNode.left === null && rootNode.right === null) return 0 //line 240 if no left right holding 0 at start

  let leftHeight = getHeight(rootNode.left) //these 2 lines go to 69
  let rightHeight = getHeight(rootNode.right)

  if (leftHeight > rightHeight) //73-75 === math.max basically
    return (leftHeight + 1)
  else return (rightHeight + 1)
}

function balancedTree(rootNode) {
  if (!rootNode) return true

  let leftHeight = getHeight(rootNode.left)
  let rightHeight = getHeight(rootNode.right)

  return Math.abs(leftHeight - rightHeight) <= 1 && balancedTree(rootNode.left) && balancedTree(rootNode.right)
}

function countNodes(rootNode) {
  if (rootNode === null) return 0;

  let left = countNodes(rootNode.left);
  let right = countNodes(rootNode.right);

  return left + right + 1
}

function getParentNode(rootNode, target) {
  //Iterative solution
  if (rootNode.val === target) return null
  const queue = [rootNode]

  //Important; will be doing in future mods
  // if(currNode.left && currNode.left.val === target)

  while (queue.length) {
    const currNode = queue.shift()

    if (currNode.left) {

    if (currNode.left.val === target) return currNode
      queue.push(currNode.left)
    }

    if (currNode.right) {

      if (currNode.right.val === target) return currNode
      queue.push(currNode.right)
    }
  }
}
//   if (rootNode.val === target) return null

//   let answer;

//   if (rootNode.left === target || rootNode.right === target) {
//     answer = rootNode.val
//   }
//   if (rootNode.left !== null) {
//     getParentNode(rootNode.left, target)
//   }
//   if (rootNode.right !== null) {
//     getParentNode(rootNode.right, target)
//   }

// return answer






function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
