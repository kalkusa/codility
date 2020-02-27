const solution = require('./solution')

test('X 10, Y 85, D 30 should return 3', () => {
  let x = 10
  let y = 85
  let d = 30
  expect(solution(x, y, d)).toBe(3)
})
