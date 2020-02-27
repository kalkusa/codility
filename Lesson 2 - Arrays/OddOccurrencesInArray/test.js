const solution = require('./solution')

test('[9, 3, 9, 3, 9, 7, 9] should return 7', () => {
  let array = [9, 3, 9, 3, 9, 7, 9]
  expect(solution(array)).toBe(7)
})

test('[100, 3, 100, 3, 9, 7, 9, 7, 15, 4, 4, 4, 4] should return 15', () => {
  let array = [100, 3, 100, 3, 9, 7, 9, 7, 15, 4, 4, 4, 4]
  expect(solution(array)).toBe(15)
})
