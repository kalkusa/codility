let solution = arg => {
  let occurrencesDictionary = []
  for (let i = 0; i < arg.length; i++) {
    if (occurrencesDictionary[arg[i]]) {
      occurrencesDictionary[arg[i]]++
    } else {
      occurrencesDictionary[arg[i]] = 1
    }
  }

  let result = 0
  occurrencesDictionary.forEach((value, key) => {
    if (value % 2 == 1) {
      result = key
      return
    }
  })

  return result
}

module.exports = solution
