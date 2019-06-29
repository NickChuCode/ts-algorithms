import { Deque, Items } from './types'

class ObjectDeque<T> implements Deque<T> {
  count: number
  lowestCount: number
  items: Items<T>
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  addBack(element: T): void {
    this.items[this.count] = element
    this.count++
  }

  addFront(element: T): void {
    if (this.isEmpty()) {
      this.addBack(element)
    } else {
      this.lowestCount--
      this.items[this.lowestCount] = element
    }
  }

  isEmpty(): boolean {
    return this.count === this.lowestCount
  }

  size(): number {
    return this.count - this.lowestCount
  }

  removeBack(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    let res = this.items[this.count - 1]
    delete this.items[this.count - 1]
    this.count--
    return res
  }

  removeFront(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    let res = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return res
  }

  peekFront(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  peekBack(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  clear(): void {
    this.lowestCount = 0
    this.count = 0
    this.items = {}
  }
}
