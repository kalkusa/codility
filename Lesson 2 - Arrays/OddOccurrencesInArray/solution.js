let solution = arg => {
  if (arg.length === 1) {
    return arg[0]
  }

  let sorted = arg.sort()
  let i = 1
  let previous = sorted[0]
  let repetitionCount = 1
  while (i <= sorted.length) {
    let current = sorted[i]
    if (previous === current) {
      repetitionCount++
    } else {
      if (repetitionCount % 2 === 1) {
        //We found odd repetition so one element doesn't have a pair
        return previous
      } else {
        repetitionCount = 1
      }
    }
    if (i + 1 === sorted.length && repetitionCount % 2 === 1) {
      //We are at the last element of the array and repetition is odd - so current element doesn't have a pair
      return current
    }
    i++
    previous = current
  }
}

module.exports = solution
