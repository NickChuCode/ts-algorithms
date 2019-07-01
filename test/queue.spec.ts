import { ObjectQueue } from '../src/Queue'
import { hotPotato } from '../examples/Queue/hotPotato'

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
    test('hot patota', () => {
      const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
      const res = hotPotato(names, 7)
      res.eliminated.forEach(name => {
        console.log(`${name}被淘汰`)
      })
      expect(res.winner).toBe('John')
    })
  })
})
