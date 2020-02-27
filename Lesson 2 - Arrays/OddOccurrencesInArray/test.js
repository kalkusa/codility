const solution = require('./solution')

test('[9, 3, 9, 3, 9, 7, 9] should return 7', () => {
  let array = [9, 3, 9, 3, 9, 7, 9]
  expect(solution(array)).toBe(7)
})
