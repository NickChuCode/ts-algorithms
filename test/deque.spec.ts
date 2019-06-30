import { ObjectDeque } from '../src/Deque'

describe('Deque', () => {
  describe('ObjectDeque', () => {
    const deque = new ObjectDeque<string>()
    test('isEmpty', () => {
      expect(deque.isEmpty()).toBeTruthy()
    })
    test('toString', () => {
      deque.addBack('John')
      deque.addBack('Jack')
      expect(deque.toString()).toBe('John, Jack')
    })
    test('size', () => {
      deque.addBack('Camila')
      expect(deque.toString()).toBe('John, Jack, Camila')
      expect(deque.size()).toBe(3)
      expect(deque.isEmpty()).toBeFalsy()
    })
    test('peek', () => {
      expect(deque.peekFront()).toBe('John')
      expect(deque.peekBack()).toBe('Camila')
      expect(deque.size()).toBe(3)
      expect(deque.toString()).toBe('John, Jack, Camila')
    })
    test('remove', () => {
      let front = deque.removeFront()
      expect(deque.toString()).toBe('Jack, Camila')
      expect(front).toBe('John')
      let back = deque.removeBack()
      expect(deque.toString()).toBe('Jack')
      expect(back).toBe('Camila')
      expect(deque.size()).toBe(1)
      expect(deque.isEmpty()).toBeFalsy()
    })
    test('addFront', () => {
      deque.addFront('John')
      expect(deque.size()).toBe(2)
      expect(deque.toString()).toBe('John, Jack')
    })
  })
})
