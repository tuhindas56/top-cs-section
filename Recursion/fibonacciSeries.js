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
function fibRec(n) {
  let result = [0, 1, 1]
  if (n <= 0) return []
  if (n === 1) return [0]

  function fib(n) {
    if (n < 2) return n
    const temp = fib(n - 1) + fib(n - 2)
    if (!result.includes(temp)) {
      result.push(temp)
    }
    return temp
  }
  fib(n)
  result.pop()
  return result
}
