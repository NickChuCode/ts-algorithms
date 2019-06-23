import { isValid } from '../examples/Stack/leetcode.20'

describe('LeetCode', () => {
  describe('leetcode.20', () => {
    test('example 1.', () => {
      expect(isValid('()')).toBeTruthy()
    })
    test('example 2.', () => {
      expect(isValid('()[]{}')).toBeTruthy()
    })
    test('example 3.', () => {
      expect(isValid('(]')).toBeFalsy()
    })
    test('example 4.', () => {
      expect(isValid('([)]')).toBeFalsy()
    })
    test('example 5.', () => {
      expect(isValid('{[]}')).toBeTruthy()
    })
  })
})
