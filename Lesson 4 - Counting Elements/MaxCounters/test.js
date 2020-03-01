const solution = require('./solution')

test('A [ 3, 4, 4, 6, 1, 4, 4 ] and N 5 should return 3, 2, 2, 4, 2', () => {
  let array = [3, 4, 4, 6, 1, 4, 4]
  expect(solution(5, array)).toMatchObject([3, 2, 2, 4, 2])
})
