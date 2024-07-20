// Make a class for move instantiation
class Move {
  constructor(x, y, parent = null) {
    this.x = x
    this.y = y
    this.parent = parent
  }
}

// Process and return valid moves at a given position
const getMoves = (x, y, parent) => {
  // If position is within bounds, return valid moveset
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
    const moves = [
      // Moves [row +/- steps, column +/- steps]
      // Two steps forward, one step to right
      new Move(x + 2, y + 1, parent),
      // Two steps forward, one step to left
      new Move(x + 2, y - 1, parent),
      // One step forward, two steps to right
      new Move(x + 1, y + 2, parent),
      // One step forward, two steps to left
      new Move(x + 1, y - 2, parent),
      // Two steps backward, one step to right
      new Move(x - 2, y + 1, parent),
      // Two steps backward, one step to left
      new Move(x - 2, y - 1, parent),
      // One step backward, two steps to right
      new Move(x - 1, y + 2, parent),
      // One step backward, two steps to left
      new Move(x - 1, y - 2, parent),
    ]
    // Return valid moves
    return moves.filter(({ x, y }) => x >= 0 && x <= 7 && y >= 0 && y <= 7)
  } else {
    return null
  }
}

const knightMoves = ([fromX, fromY], [destinationX, destinationY]) => {
  // Input checks
  if (
    fromX > 7 ||
    fromY > 7 ||
    fromX < 0 ||
    fromY < 0 ||
    destinationX > 7 ||
    destinationY > 7 ||
    destinationX < 0 ||
    destinationY < 0
  )
    return "Out of bounds!"
  if (fromX === destinationX && fromY === destinationY)
    return `You made it in 0 moves! Here is the path you took from [${fromX}, ${fromY}]:\n[${destinationX}, ${destinationY}]`

  // Tracking performed moves
  const visited = new Set()

  // Get moves available at current position
  let availableMoves = getMoves(fromX, fromY)

  // Helper BFS function
  const helper = (destinationX, destinationY, queue = [...availableMoves]) => {
    // If queue is empty, stop
    if (!queue.length) return

    // Track queued moves
    for (let move of queue) visited.add(`${move.x}, ${move.y}`)

    // Get first move from queue
    const move = queue.shift()

    // Check if current co-ordinate is the destination co-ordinate
    if (move.x === destinationX && move.y === destinationY)
      return move

    // Get available co-ordinates from current position
    const newMoves = getMoves(move.x, move.y, move)

    // Check if co-ordinate was already queued, to avoid redundant processing
    for (let move of newMoves) {
      if (!visited.has(`${move.x}, ${move.y}`)) queue.push(move)
    }

    // Feed the destination co-ordinated and updated queue into the helper
    return helper(destinationX, destinationY, queue)
  }

  // Call the function and backtrack the path taken
  let final = helper(destinationX, destinationY)
  const path = []
  while (final) {
    path.push([final.x, final.y])
    final = final.parent
  }

  // Format and print the output
  return `You made it in ${
    path.length > 1 ? `${path.length} moves` : `${path.length} move`
  }! Here is the path you took from [${fromX}, ${fromY}]:\n[${path.reverse().join("] --> [").replaceAll(",", ", ")}]`
}

// Tests
console.log(knightMoves([0, 0], [0, 0]))
console.log(knightMoves([7, 7], [7, 7]))
console.log(knightMoves([8, 8], [3, 3]))
console.log(knightMoves([0, 0], [3, 3]))
console.log(knightMoves([7, 7], [0, 0]))
console.log(knightMoves([0, 0], [2, 1]))
console.log(knightMoves([4, 4], [4, 4]))
console.log(knightMoves([1, 1], [6, 6]))
