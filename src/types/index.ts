export interface Stack<T> {
  push(element: T): void
  pop(): T | undefined
  peek(): T | undefined
  isEmpty(): boolean
  clear(): void
  size(): number
}
