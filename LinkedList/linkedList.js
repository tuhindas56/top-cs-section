class Node {
  constructor(value) {
    this.value = value
    this.nextNode = null
  }
}

class LinkedList {
  constructor() {
    this._head = null
    this._tail = null
    this._length = 0
  }

  append(value) {
    const node = new Node(value)
    if (!this._head) {
      this._head = node
      this._tail = node
    } else {
      this._tail.nextNode = node
      this._tail = this._tail.nextNode
    }
    this._length += 1
  }

  prepend(value) {
    const node = new Node(value)
    if (!this._head) {
      this._head = node
      this._tail = node
    } else {
      node.nextNode = this._head
      this._head = node
    }
    this._length += 1
  }

  insertAt(value, index) {
    if (index < 0 || index > this._length) {
      throw new Error("Index out of bounds")
    }
    if (index === 0) {
      this.prepend(value)
    } else if (index === this._length) {
      this.append(value)
    } else {
      let node = this._head
      let previousNode = null
      for (let i = 0; i < index; i += 1) {
        if (node) {
          previousNode = node
          node = node.nextNode
        } else {
          break
        }
      }
      const newNode = new Node(value)
      newNode.nextNode = node
      previousNode.nextNode = newNode
      this._length += 1
    }
  }

  removeAt(index) {
    if (index < 0 || index > this._length) {
      throw new Error("Index out of bounds")
    }
    if (index === 0) {
      this._head = this._head.nextNode
      this._length -= 1
    } else if (index === this._length - 1) {
      this.pop()
    } else {
      let node = this._head
      let previousNode = null
      for (let i = 0; i < index; i += 1) {
        if (node) {
          previousNode = node
          node = node.nextNode
        } else {
          return null
        }
      }
      previousNode.nextNode = node.nextNode
      this._length -= 1
    }
  }

  size() {
    return this._length
  }

  head() {
    return this._head
  }

  tail() {
    return this._tail
  }

  at(index) {
    let node = this._head
    for (let i = 0; i < index; i += 1) {
      if (node) {
        node = node.nextNode
      } else {
        break
      }
    }
    return node ? node : null
  }

  pop() {
    let currentNode = this._head
    if (!this._length) return null
    if (this._length === 1) {
      const temp = this._head.value
      this._head = null
      this._tail = null
      this._length -= 1
      return temp
    }
    let previousNode = null
    while (currentNode.nextNode) {
      previousNode = currentNode
      currentNode = currentNode.nextNode
    }
    previousNode.nextNode = null
    this._tail = previousNode
    this._length -= 1
    return currentNode.value
  }

  contains(value) {
    let currentNode = this._head
    while (currentNode) {
      if (currentNode.value === value) return true
      currentNode = currentNode.nextNode
    }
    return false
  }

  find(value) {
    let currentNode = this._head
    for (let i = 0; i < this._length; i += 1) {
      if (currentNode && currentNode.value === value) {
        return i
      }
      if (currentNode.nextNode) {
        currentNode = currentNode.nextNode
      }
    }
    return null
  }

  toString() {
    let currentNode = this._head
    let list = []
    while (this._length && currentNode) {
      list.push(`(${currentNode.value})`)
      currentNode = currentNode.nextNode
    }
    return list.length ? list.join(" -> ") + " -> (null)" : "Empty list"
  }
}
