import { Items, Queue } from './types'

export class ObjectQueue<T> implements Queue<T> {
  count: number
  lowestCount: number
  items: Items<T>

  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  enqueue(element: T): void {
    this.items[this.count] = element
    this.count++
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    const res = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return res
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  isEmpty(): boolean {
    return this.lowestCount === this.count
  }

  size(): number {
    return this.count - this.lowestCount
  }

  clear(): void {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  toString(): string {
    if (this.isEmpty()) {
      return ''
    }
    let res = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      res = `${res}, ${this.items[i]}`
    }

    return res
  }
}
