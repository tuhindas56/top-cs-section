# Binary Search Tree

Binary search tree implementation, as part of <a href="https://www.theodinproject.com/lessons/javascript-binary-search-trees">The Odin Project curriculum</a>.

## Description

The `Tree` class represents a binary search tree (BST). It provides methods to insert, delete, and find nodes, as well as to traverse the tree in different orders. Additionally, it includes methods to check the tree's balance, calculate heights and depths, and rebalance the tree.

## Methods

- `insert(value)`
  Inserts a new node with the specified value into the tree.

- `delete(value)`
  Removes the node with the specified value from the tree.

- `find(value)`
  Finds and returns the node with the specified value.

- `levelOrder(callback)`
  Traverses the tree in level order (breadth-first). Passing a callback is optional.

- `inOrder(callback)`
  Traverses the tree in in-order (left-root-right). Passing a callback is optional.

- `preOrder(callback)`
  Traverses the tree in pre-order (root-left-right). Passing a callback is optional.

- `postOrder(callback)`
  Traverses the tree in post-order (left-right-root). Passing a callback is optional.

- `height(node)`
  Calculates the height of the tree or subtree rooted at the specified node.

- `depth(node)`
  Calculates the depth of the specified node from the root.

- `isBalanced(node = this.root)`
  Checks if the tree or subtree rooted at the specified node is balanced.

- `reBalance()`
  Rebalances the tree to ensure it remains balanced.

- `print()`
  Prints a visual representation of the tree.
