class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.nextNode = null
  }
}

export default class LinkedList {
  constructor() {
    this._head = null
    this._tail = null
    this._length = 0
  }

  append(key, value) {
    const node = new Node(key, value)
    if (!this._head) {
      this._head = node
      this._tail = node
    } else {
      this._tail.nextNode = node
      this._tail = this._tail.nextNode
    }
    this._length += 1
  }

  insertAt(key, value, index) {
    if (index < 0 || index > this._length) {
      throw new Error("Index out of bounds")
    }
    if (index === 0) {
      this.prepend(key, value)
    } else if (index === this._length) {
      this.append(key, value)
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
      const newNode = new Node(key, value)
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

  size() {
    return this._length
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

  clear() {
    this._head = null
    this._tail = null
    this._length = 0
  }

  contains(key) {
    let currentNode = this._head
    while (currentNode) {
      if (currentNode.key === key) return true
      currentNode = currentNode.nextNode
    }
    return false
  }

  find(key) {
    let currentNode = this._head
    for (let i = 0; i < this._length; i += 1) {
      if (currentNode && currentNode.key === key) {
        return i
      }
      if (currentNode.nextNode) {
        currentNode = currentNode.nextNode
      }
    }
    return null
  }

  #accumulator(property, both = false) {
    let currentNode = this._head
    let list = []
    while (this._length && currentNode) {
      if (both) {
        list.push([currentNode["key"], currentNode["value"]])
      } else {
        list.push(currentNode[property])
      }
      currentNode = currentNode.nextNode
    }
    return list
  }

  keys() {
    return this.#accumulator("key")
  }

  values() {
    return this.#accumulator("value")
  }

  entries() {
    return this.#accumulator("", true)
  }
}
