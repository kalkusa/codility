let solution = arg => {
  while (true) {
    if (arg.length === 1) {
      return arg[0]
    }

    let numberToPair = arg[0]
    for (let i = 1; i < arg.length; i++) {
      if (numberToPair === arg[i]) {
        arg.splice(i, 1)
        arg.splice(0, 1)
        break
      }
    }
  }
}

module.exports = solution
