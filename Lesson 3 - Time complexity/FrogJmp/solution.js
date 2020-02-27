let solution = (x, y, d) => {
  let initialPosition = x
  let finalPosition = y
  let jumpDistance = d

  return Math.ceil((finalPosition - initialPosition) / jumpDistance)
}

module.exports = solution
