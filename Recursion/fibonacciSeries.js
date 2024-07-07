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
  let memo = { 0: 0, 1: 1 }
  let result = [0, 1]
  if (n <= 0) return []
  if (n === 1) return [0]

  function fib(n) {
    if (n < 2) return n
    if (n in memo) return memo[n]
    memo[n] = fib(n - 1) + fib(n - 2)
    result.push(memo[n])
    return memo[n]
  }
  fib(n - 1)
  return result
}
