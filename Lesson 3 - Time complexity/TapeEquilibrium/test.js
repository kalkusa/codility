const solution = require('./solution')

test('[ 3, 1, 2, 4, 3] should return 1', () => {
  let arg = [3, 1, 2, 4, 3]
  expect(solution(arg)).toBe(1)
})

test('[ 3, 1] should return 2', () => {
  let arg = [3, 1]
  expect(solution(arg)).toBe(2)
})
