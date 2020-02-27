const solution = require('./solution')

test('[3, 8, 9, 7, 6] should return [9, 7, 6, 3, 8] after 3 rotations', () => {
  let array = [3, 8, 9, 7, 6]
  let numberOfRotations = 3
  expect(solution(array, numberOfRotations)).toMatchObject([9, 7, 6, 3, 8])
})

test('[3, 8, 9, 7, 6] should return [7, 6, 3, 8, 9] after 2 rotations', () => {
  let array = [3, 8, 9, 7, 6]
  let numberOfRotations = 2
  expect(solution(array, numberOfRotations)).toMatchObject([7, 6, 3, 8, 9])
})

test('[1, 2, 3, 4] should return  [1, 2, 3, 4] after 4 rotations', () => {
  let array = [1, 2, 3, 4]
  let numberOfRotations = 4
  expect(solution(array, numberOfRotations)).toMatchObject([1, 2, 3, 4])
})
