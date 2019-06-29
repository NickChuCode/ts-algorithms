export interface Stack<T> {
  push(element: T): void
  pop(): T | undefined
  peek(): T | undefined
  isEmpty(): boolean
  clear(): void
  size(): number
}

export interface Queue<T> {
  enqueue(element: T): void
  dequeue(): T | undefined
  peek(): T | undefined
  isEmpty(): boolean
  size(): number
  clear(): void
}

export interface Items<T> {
  [id: number]: T
}

export interface Deque<T> {
  count: number
  lowestCount: number
  items: Items<T>

  addFront(element: T): void
  addBack(element: T): void
  removeFront(): T | undefined
  removeBack(): T | undefined
  peekFront(): T | undefined
  peekBack(): T | undefined
  isEmpty(): Boolean
  clear(): void
  size(): number
  toString(): string
}
