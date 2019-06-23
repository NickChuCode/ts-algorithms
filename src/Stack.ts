import { Stack } from './types'

export class ArrayStack<T> implements Stack<T> {
  items: Array<T>
  constructor() {
    this.items = []
  }
  push(element: T): void {
    this.items.push(element)
  }
  pop(): T | undefined {
    return this.items.pop()
  }
  peek(): T | undefined {
    return this.items[this.items.length - 1]
  }
  isEmpty(): boolean {
    return this.items.length === 0
  }
  size(): number {
    return this.items.length
  }
  clear(): void {
    this.items = []
  }
}

interface Items<T> {
  [id: number]: T
}

export class ObjectStack<T> implements Stack<T> {
  items: Items<T>
  count: number

  constructor() {
    this.items = {}
    this.count = 0
  }

  size(): number {
    return this.count
  }

  isEmpty(): boolean {
    return this.count === 0
  }

  push(element: T): void {
    this.items[this.count] = element
    this.count++
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const res = this.items[this.count]
    delete this.items[this.count]
    return res
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  clear(): void {
    this.items = {}
    this.count = 0
  }
}
