import { ObjectQueue } from '../src/Queue'

describe('Queue', () => {
  describe('ObjectQueue', () => {
    const queue = new ObjectQueue<string>()
    test('isEmpty', () => {
      expect(queue.isEmpty()).toBeTruthy()
    })
    test('enqueue', () => {
      queue.enqueue('Nick')
      queue.enqueue('John')
      expect(queue.toString()).toBe('Nick, John')
    })
    test('size', () => {
      queue.enqueue('Frank')
      expect(queue.size()).toBe(3)
    })
    test('toString and isEmpty', () => {
      expect(queue.isEmpty()).toBeFalsy()
      expect(queue.toString()).toBe('Nick, John, Frank')
    })
    test('dequeue', () => {
      queue.dequeue()
      queue.dequeue()
      expect(queue.size()).toBe(1)
      expect(queue.toString()).toBe('Frank')
    })
  })
})
