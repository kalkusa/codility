let convertDecimalToBinary = decimal => {
  return decimal.toString(2)
}

let getLongestBinaryGap = binary => {
  let longestBinaryGap = 0
  let insideGap = false
  let currentBinaryGap = 0
  let previousDigit = null

  for (let i = 0; i < binary.length; i++) {
    let currentDigit = binary[i]

    if (currentDigit === '1') {
      if (previousDigit === null || (previousDigit && previousDigit === '0')) {
        insideGap = true
      }

      if (insideGap) {
        longestBinaryGap = currentBinaryGap > longestBinaryGap ? currentBinaryGap : longestBinaryGap
        currentBinaryGap = 0
        continue
      }
    }

    if (currentDigit === '0' && insideGap) {
      currentBinaryGap++
    }
  }

  return longestBinaryGap
}

let solution = N => {
  let binary = convertDecimalToBinary(N)
  console.log(binary)
  return getLongestBinaryGap(binary)
}

let gap = solution(1610612737)
console.log(gap)
