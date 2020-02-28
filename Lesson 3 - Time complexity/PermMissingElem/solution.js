let solution = array => {
  if (array.length === 0) {
    return 1
  }

  if (array.length === 1) {
    if (array[0] === 1) {
      return 2
    }
    if (array[0] === 2) {
      return 1
    }
  }

  let sorted = array.sort((a, b) => a - b)

  if (sorted[0] != 1) {
    return 1
  }

  for (let i = 1; i <= sorted.length; i++) {
    let previous = sorted[i - 1]
    let current = sorted[i]
    if (current != previous + 1) {
      return previous + 1
    }
  }
}

module.exports = solution
