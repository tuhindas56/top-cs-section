# LinkedList

Linked list implementation, as part of <a href="https://www.theodinproject.com/lessons/javascript-linked-lists">The Odin Project curriculum</a>.

## Description

A simple implementation of a singly linked list with basic methods for list manipulation.

## Methods

- `append(value)`
  Adds a new node with the specified value to the end of the list.

- `prepend(value)`
  Adds a new node with the specified value to the beginning of the list.

- `insertAt(value, index)`
  Inserts a new node with the specified value at the given index.

- `removeAt(index)`
  Removes the node at the specified index.

- `size()`
  Returns the number of nodes in the list.

- `head()`
  Returns the first node in the list.

- `tail()`
  Returns the last node in the list.

- `at(index)`
  Returns the node at the specified index.

- `pop()`
  Removes the last node in the list and returns its value.

- `contains(value)`
  Checks if a node with the specified value exists in the list.

- `find(value)`
  Finds the index of the first node with the specified value.

- `toString()`
  Returns a string representation of the list.

## Example Usage

```javascript
const list = new LinkedList()

list.append(1)
list.append(2)
list.prepend(0)
console.log(list.toString()) // Output: (0) -> (1) -> (2) -> (null)

console.log(list.size()) // Output: 3
console.log(list.head().value) // Output: 0
console.log(list.tail().value) // Output: 2

list.insertAt(1.5, 2)
console.log(list.toString()) // Output: (0) -> (1) -> (1.5) -> (2) -> (null)

list.removeAt(1)
console.log(list.toString()) // Output: (0) -> (1.5) -> (2) -> (null)

console.log(list.find(1.5)) // Output: 1
console.log(list.contains(2)) // Output: true
console.log(list.pop()) // Output: 2
console.log(list.toString()) // Output: (0) -> (1.5) -> (null)
```
