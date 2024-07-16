import Tree from "./balancedBST.mjs"

// 1. Create a binary search tree from an array of random numbers <= 100. You can create a function that returns an array of random numbers every time you call it if you wish.
const bst = new Tree(Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)))

// 2. Confirm that the tree is balanced by calling isBalanced.
console.log("Check if tree is balanced:", bst.isBalanced())

// 3. Print out all elements in level, pre, post, and in order.
console.log("Level order traversal:", bst.levelOrder())
console.log("In-order traversal:", bst.inOrder())
console.log("Pre-order traversal:", bst.preOrder())
console.log("Post-order traversal:", bst.postOrder())

// 4. Unbalance the tree by adding several numbers > 100.
bst.insert(200)
bst.insert(220)
bst.insert(240)
bst.insert(260)
bst.insert(280)
bst.insert(300)

// 5. Confirm that the tree is unbalanced by calling isBalanced.
console.log("Check if tree is balanced:", bst.isBalanced())

// 6. Balance the tree by calling rebalance.
bst.reBalance()
console.log("Rebalancing tree..")

// 7. Confirm that the tree is balanced by calling isBalanced.
console.log("Check if tree is balanced:", bst.isBalanced())

// 8. Print out all elements in level, pre, post, and in order.
console.log("Level order traversal:", bst.levelOrder())
console.log("In-order traversal:", bst.inOrder())
console.log("Pre-order traversal:", bst.preOrder())
console.log("Post-order traversal:", bst.postOrder())
