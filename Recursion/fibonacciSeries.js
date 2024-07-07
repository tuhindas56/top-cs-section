// Iterative
function fibs(n) {
  if (n <= 0) return []
  if (n === 1) return [0]
  let fibonacci = [0, 1]
  for (let i = 2; i < n; i += 1) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
  }
  return fibonacci
}

// Recursive
function fibsRec(n) {
  if (n <= 0) return []
  if (n === 1) return [0]
  if (n === 2) return [0, 1]

  let array = fibsRec(n - 1)
  array.push(array[array.length - 1] + array[array.length - 2])
  return array
}
