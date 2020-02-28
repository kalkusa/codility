const solution = require('./solution')

test('[ 2, 3, 1, 5 ] should return 4', () => {
  let arg = [2, 3, 1, 5]
  expect(solution(arg)).toBe(4)
})

test('[ 2, 7, 3, 4, 6, 1, 5, 8, 9, 11 ] should return 10', () => {
  let arg = [2, 7, 3, 4, 6, 1, 5, 8, 9, 11]
  expect(solution(arg)).toBe(10)
})

test('[1, 2, 3, 24, 5, 7, 25, 8, 9, 10, 11, 13, 14, 15, 6, 16, 12, 18, 19, 20, 21, 23, 26, 27, 22, 28, 4, 29, 30 ] should return 17', () => {
  let arg = [1, 2, 3, 24, 5, 7, 25, 8, 9, 10, 11, 13, 14, 15, 6, 16, 12, 18, 19, 20, 21, 23, 26, 27, 22, 28, 4, 29, 30]
  expect(solution(arg)).toBe(17)
})

test('[1, 4, 3, 2, 6, 7] should return 5', () => {
  let arg = [1, 4, 3, 2, 6, 7]
  expect(solution(arg)).toBe(5)
})

test('[1, 4, 3, 2, 6, 5] should return 7', () => {
  let arg = [1, 4, 3, 2, 6, 5]
  expect(solution(arg)).toBe(7)
})

test('[ 2 ] should return 1', () => {
  let arg = [2]
  expect(solution(arg)).toBe(1)
})

test('[ 1 ] should return 2', () => {
  let arg = [1]
  expect(solution(arg)).toBe(2)
})

test('[ 1, 3 ] should return 2', () => {
  let arg = [1, 3]
  expect(solution(arg)).toBe(2)
})

test('[ 1, 2 ] should return 3', () => {
  let arg = [1, 2]
  expect(solution(arg)).toBe(3)
})

test('[ 2, 3, 4, 5 ] should return 1', () => {
  let arg = [2, 3, 4, 5]
  expect(solution(arg)).toBe(1)
})
