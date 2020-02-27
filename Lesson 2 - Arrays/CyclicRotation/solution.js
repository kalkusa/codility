let solution = (A, K) => {
  let newArray = A.slice(0)
  for (let index = 0; index < A.length; index++) {
    let newIndex = (index + K) % A.length
    newArray[newIndex] = A[index]
  }
  return newArray
}

module.exports = solution
