# HashMap

HashMap implementation, as part of <a href="https://www.theodinproject.com/lessons/javascript-hashmap">The Odin Project curriculum</a>.

## Description

The `HashMap` class provides a basic key-value store with essential methods and automatically handles resizing and rehashing when the load factor exceeds `0.75`.

## Methods

- `set(key, value)`
  Adds a key-value pair to the hash map. If the key already exists, updates the value.

- `get(key)`
  Retrieves the value associated with the given key.

- `has(key)`
  Checks if the hash map contains the given key.

- `remove(key)`
  Removes the key-value pair associated with the given key.

- `length()`
  Returns the number of key-value pairs in the hash map.

- `clear()`
  Removes all key-value pairs from the hash map.

- `keys()`
  Returns an array of all keys in the hash map.

- `values()`
  Returns an array of all values in the hash map.

- `entries()`
  Returns an array of key-value pairs as arrays.

## Example Usage

```javascript
import HashMap from "./hashMap.mjs"

const map = new HashMap()

map.set("name", "Alice")
console.log(map.get("name")) // Output: Alice

console.log(map.has("name")) // Output: true

map.remove("name")
console.log(map.has("name")) // Output: false

map.set("age", 30)
console.log(map.length()) // Output: 1
```
