import LinkedList from "./linkedList.mjs"

class HashMap {
  #capacity = 16
  #totalKeys = 0

  constructor() {
    this.data = Array(16)
    this.#populate(0)
  }

  #populate(index) {
    for (index; index < this.#capacity; index += 1) this.data[index] = new LinkedList()
  }

  #hash(key) {
    let hashCode = 0
    const primeNumber = 31
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#capacity
    }
    return hashCode
  }

  #loadFactorCheck() {
    const loadFactor = this.#totalKeys / this.#capacity
    if (loadFactor > 0.75) {
      this.#resize()
      this.#rehash()
    }
  }
  #resize() {
    const capacity = this.#capacity
    this.data.push(...Array(capacity))
    this.#capacity += capacity
    this.#populate(capacity)
  }
  #rehash() {
    const entries = this.entries()
    this.clear()
    if (entries.length) {
      this.#totalKeys = 0
      entries.forEach((entry) => {
        const [key, value] = entry
        const hash = this.#hash(key)
        const bucket = this.data[hash]
        bucket.append(key, value)
        this.#totalKeys += 1
      })
    }
  }

  set(key, value) {
    this.#loadFactorCheck()

    const hash = this.#hash(key)
    const bucket = this.data[hash]

    if (bucket.contains(key)) {
      let index = bucket.find(key)
      bucket.removeAt(index)
      bucket.insertAt(key, value, index)
    } else {
      bucket.append(key, value)
      this.#totalKeys += 1
    }
  }

  get(key) {
    const hash = this.#hash(key)
    const bucket = this.data[hash]
    const index = bucket.find(key)
    const node = bucket.at(index)
    return node ? node.value : null
  }

  has(key) {
    const hash = this.#hash(key)
    const bucket = this.data[hash]
    return bucket.contains(key)
  }

  remove(key) {
    const hash = this.#hash(key)
    const bucket = this.data[hash]
    const index = bucket.find(key)
    if (index !== null) {
      const temp = bucket.at(index)
      bucket.removeAt(index)
      this.#totalKeys -= 1
      return `${temp.key}: ${temp.value}`
    } else {
      return null
    }
  }

  length() {
    return this.#totalKeys
  }

  clear() {
    this.data.forEach((bucket) => bucket.clear())
    this.#totalKeys = 0
  }

  keys() {
    const keys = []
    this.data.forEach((bucket) => keys.push(...bucket.keys()))
    return keys
  }

  values() {
    const values = []
    this.data.forEach((bucket) => values.push(...bucket.values()))
    return values
  }

  entries() {
    const entries = []
    this.data.forEach((bucket) => entries.push(...bucket.entries()))
    return entries
  }
}
