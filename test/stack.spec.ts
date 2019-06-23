import { ArrayStack, ObjectStack } from '../src/Stack'

describe('Stack', () => {
  describe('ArrayStack', () => {
    const stack = new ArrayStack<number>()
    test('isEmpty', () => {
      expect(stack.isEmpty()).toBeTruthy()
    })
    test('push and peek should work', () => {
      stack.push(5)
      stack.push(8)
      expect(stack.peek()).toBe(8)
    })
    test('size should output the right length of the stack', () => {
      stack.push(11)
      expect(stack.size()).toBe(3)
      expect(stack.isEmpty()).toBeFalsy()
    })
    test('pop should work', () => {
      stack.push(15)
      stack.pop()
      stack.pop()
      expect(stack.size()).toBe(2)
    })
  })

  describe('ObjectStack', () => {
    const oStack = new ObjectStack<number>()
    test('isEmpty', () => {
      expect(oStack.isEmpty()).toBeTruthy()
    })
    test('push and peek should work', () => {
      oStack.push(5)
      oStack.push(8)
      expect(oStack.peek()).toBe(8)
    })
    test('size should output the right length of the stack', () => {
      oStack.push(11)
      expect(oStack.size()).toBe(3)
      expect(oStack.isEmpty()).toBeFalsy()
    })
    test('pop should work', () => {
      oStack.push(15)
      oStack.pop()
      oStack.pop()
      expect(oStack.size()).toBe(2)
    })
  })
})
