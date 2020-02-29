let solution = (X, A) => {
  let path = [...Array(X + 1).keys()].map(n => false)
  path[0] = true
  let missingLeaves = X
  for (let i = 0; i < A.length; i++) {
    if (path[A[i]] === false) {
      path[A[i]] = true
      missingLeaves--
    }
    if (missingLeaves === 0) {
      return i
    }
  }

  //No path
  return -1
}

module.exports = solution
