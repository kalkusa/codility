let solution = (X, A) => {
  let path = [...Array(X + 1).keys()].map(n => false)
  for (let i = 0; i < A.length; i++) {
    path[A[i]] = true
    if (path.slice(1, X + 1).every(x => x === true)) {
      return i
    }
  }

  //No path
  return -1
}

module.exports = solution
