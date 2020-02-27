let solution = arg => {
  let occurrencesDictionary = []
  let oddCandidatesList = []
  for (let i = 0; i < arg.length; i++) {
    let currentNumber = arg[i]
    if (occurrencesDictionary[currentNumber]) {
      occurrencesDictionary[currentNumber]++
      if (occurrencesDictionary[currentNumber] % 2 == 1) {
        oddCandidatesList.push(currentNumber)
      } else {
        oddCandidatesList.splice(oddCandidatesList.indexOf(currentNumber), 1)
      }
    } else {
      occurrencesDictionary[currentNumber] = 1
      oddCandidatesList.push(currentNumber)
    }
  }

  return oddCandidatesList[0]
}

module.exports = solution
