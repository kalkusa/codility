let solution = (N, A) => {
  let counters = [...Array(N).keys()].map(i => 0)
  let maxCounter = 0
  for (let i = 0; i < A.length; i++) {
    let valueOfIncrease = A[i] - 1
    if (valueOfIncrease + 1 > N) {
      counters.fill(maxCounter)
      continue
    }

    let newCounterValue = counters[valueOfIncrease] + 1
    counters[valueOfIncrease]++
    maxCounter = newCounterValue > maxCounter ? newCounterValue : maxCounter
  }
  return counters
}

module.exports = solution
