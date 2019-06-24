import { Stack, Items } from './types'

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

  toString(): string {
    if (this.isEmpty()) {
      return ''
    }
    let res = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      res = `${res}, ${this.items[i]}`
    }
    return res
  }
}

// 用 WeakMap 实现的 Stack，真正实现了 Stack 内部数据的私有化
const items = new WeakMap()

export class WeakMapStack<T> implements Stack<T> {
  constructor() {
    items.set(this, [])
  }

  push(element: T): void {
    const s = items.get(this)
    s.push(element)
  }

  pop(): T | undefined {
    const s = items.get(this)
    return s.pop()
  }

  size(): number {
    const s = items.get(this)
    return s.length
  }

  peek(): T | undefined {
    const s = items.get(this)
    return s[s.length - 1]
  }

  isEmpty(): boolean {
    return items.get(this).length === 0
  }

  clear(): void {
    items.set(this, [])
  }

  toString(): string {
    return items.get(this).toString()
  }
}
