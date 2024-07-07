function breakArray(arr) {
  if (arr.length <= 1) return arr
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return mergeSort(breakArray(left), breakArray(right))
}

function mergeSort(left, right) {
  const sorted = []
  let leftIndex = 0
  let rightIndex = 0
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sorted.push(left[leftIndex])
      leftIndex++
    } else {
      sorted.push(right[rightIndex])
      rightIndex++
    }
  }
  return [...sorted, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}
