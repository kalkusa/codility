let solution = (A, K) => {
  let newArray = A.slice(0)
  for (let index = 0; index < A.length; index++) {
      let newIndex = (index + K) % A.length;
      newArray[newIndex] = A[index];
  }
  return newArray;
}

let array = [3, 8, 9, 7, 6]
let rotations = 3
let expectedResult = [9, 7, 6, 3, 8]
let result = solution(array, rotations)
console.log(expectedResult)
console.log(result)