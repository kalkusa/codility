let solution = array => {
  let minimalDifferenceBetweenSplittedSidesOfArray = Number.MAX_SAFE_INTEGER
  let sumOfArray = array.reduce((a, b) => a + b, 0)
  let sumOfLeftSide = array[0]
  for (let splitIndex = 1; splitIndex < array.length; splitIndex++) {
    let sumOfRightSide = sumOfArray - sumOfLeftSide
    let differenceBetweenSplittedSidesOfArray = Math.abs(sumOfLeftSide - sumOfRightSide)

    if (differenceBetweenSplittedSidesOfArray < minimalDifferenceBetweenSplittedSidesOfArray) {
      minimalDifferenceBetweenSplittedSidesOfArray = differenceBetweenSplittedSidesOfArray
    }
    sumOfLeftSide += array[splitIndex]
  }

  return minimalDifferenceBetweenSplittedSidesOfArray
}

module.exports = solution
