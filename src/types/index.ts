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

export interface EqualFunc<T> {
  (a: T, b: T): boolean
}

export interface Node<T> {
  element: T
  next: Node<T> | null
}

export interface LinkedList<T> {
  count: number
  head: Node<T> | null
  equalFunc: EqualFunc<T>

  push(element: T): void
  insert(element: T, position: number): boolean
  getElementAt(index: number): Node<T> | undefined
  remove(element: T): T | undefined
  indexOf(element: T): number
  removeAt(position: number): T | undefined
  isEmpty(): boolean
  size(): number
  toString(): string
}
