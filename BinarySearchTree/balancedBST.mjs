class Node {
  constructor(value) {
    this.right = null
    this.left = null
    this.value = value
  }
}

export default class Tree {
  constructor(array) {
    const sortedArray = [...new Set(array)].sort((a, b) => a - b)
    this.root = this.#buildTree(sortedArray, 0, sortedArray.length - 1)
  }

  #buildTree(array, start, end) {
    if (start > end) return null
    const middle = Math.floor((start + end) / 2)
    const root = new Node(array[middle])
    root.left = this.#buildTree(array, start, middle - 1)
    root.right = this.#buildTree(array, middle + 1, end)
    return root
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value)
      return
    }

    let child = this.root
    let parent = null

    while (child) {
      if (value > child.value) {
        parent = child
        child = child.right
      } else if (value < child.value) {
        parent = child
        child = child.left
      } else {
        return
      }
    }

    if (value > parent.value) {
      parent.right = new Node(value)
    } else {
      parent.left = new Node(value)
    }
  }

  #traverse(value) {
    if (!this.root) return null

    let child = this.root
    let parent = null
    let depth = 0

    while (child) {
      if (value > child.value) {
        parent = child
        child = child.right
        depth += 1
      } else if (value < child.value) {
        parent = child
        child = child.left
        depth += 1
      } else {
        return { child, depth, parent }
      }
    }
  }

  delete(value) {
    // Find the node
    const { parent, child } = this.#traverse(value)

    // if node was not found
    if (!child) return

    // If node was found
    if (!child.left && !child.right) {
      // If both left and right don't exist
      if (child === this.root) {
        this.root = null
        return
      }

      if (child.value > parent.value) {
        parent.right = null
      } else {
        parent.left = null
      }
    } else if (child.left && !child.right) {
      // If left exists
      if (child.value > parent.value) {
        parent.right = child.left
      } else {
        parent.left = child.left
      }
    } else if (!child.left && child.right) {
      // If right exists
      if (child.value > parent.value) {
        parent.right = child.right
      } else {
        parent.left = child.right
      }
    } else if (child.left && child.right) {
      // If both left and right exist
      let minimum = child.right

      while (minimum.left) {
        minimum = minimum.left
      }

      const temp = minimum.value
      this.delete(minimum.value)
      child.value = temp
    } else {
      return
    }
  }

  find(value) {
    const { child } = this.#traverse(value) || { child: undefined }
    return child
  }

  levelOrder(callback, queue = [this.root], list = []) {
    if (!this.root) return []
    if (!queue.length) return !callback ? list : undefined

    const node = queue.shift()
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)

    if (callback) {
      callback(node)
    } else {
      list.push(node.value)
    }

    return this.levelOrder(callback, queue, list)
  }

  inOrder(callback, node = this.root, list = []) {
    if (!node) return null

    if (node.left) {
      this.inOrder(callback, node.left, list)
    }

    if (callback) {
      callback(node)
    } else {
      list.push(node.value)
    }

    if (node.right) {
      this.inOrder(callback, node.right, list)
    }

    return !callback ? list : undefined
  }

  preOrder(callback, node = this.root, list = []) {
    if (!node) return null

    if (callback) {
      callback(node)
    } else {
      list.push(node.value)
    }

    if (node.left) {
      this.preOrder(callback, node.left, list)
    }

    if (node.right) {
      this.preOrder(callback, node.right, list)
    }

    return !callback ? list : undefined
  }

  postOrder(callback, node = this.root, list = []) {
    if (!node) return null

    if (node.left) {
      this.postOrder(callback, node.left, list)
    }

    if (node.right) {
      this.postOrder(callback, node.right, list)
    }

    if (callback) {
      callback(node)
    } else {
      list.push(node.value)
    }

    return !callback ? list : undefined
  }

  height(node) {
    if (!node) return -1

    const leftHeight = this.height(node.left)
    const rightHeight = this.height(node.right)

    return Math.max(leftHeight, rightHeight) + 1
  }

  depth(node) {
    if (node) {
      const { depth } = this.#traverse(node.value)
      return depth
    }
  }

  isBalanced(node = this.root) {
    if (!node) return true
    const leftHeight = this.height(node.left)
    const rightHeight = this.height(node.right)
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false
    } else {
      return this.isBalanced(node.left) && this.isBalanced(node.right)
    }
  }

  reBalance() {
    const array = this.inOrder()
    this.root = this.#buildTree(array, 0, array.length - 1)
  }

  print(node = this.root, prefix = "", isLeft = true) {
    if (node === null) return

    if (node.right !== null) {
      this.print(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false)
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`)

    if (node.left !== null) {
      this.print(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true)
    }
  }
}
