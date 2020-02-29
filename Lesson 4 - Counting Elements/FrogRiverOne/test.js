const solution = require('./solution')

test('when array is [1, 3, 1, 4, 2, 3, 5, 4] and position is 5 should return 6', () => {
  let array = [1, 3, 1, 4, 2, 3, 5, 4]
  let x = 5
  expect(solution(x, array)).toBe(6)
})