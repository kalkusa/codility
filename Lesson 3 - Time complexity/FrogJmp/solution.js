let solution = (x, y, d) => {
  let initialPosition = x
  let finalPosition = y
  let jumpDistance = d
  let currentPosition = initialPosition
  let jumps = 0

  while (currentPosition < finalPosition) {
    jumps++
    currentPosition += jumpDistance
  }
  return jumps
}

module.exports = solution
