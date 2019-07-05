import { LinkedList, Node, EqualFunc } from './types'

class LinkedNode<T> implements Node<T> {
  element: T
  next: LinkedNode<T> | null
  constructor(element: T, next: LinkedNode<T> | null = null) {
    this.element = element
    this.next = next
  }
}

export class ObjectLinkedList<T> implements LinkedList<T> {
  count: number
  head: LinkedNode<T> | null
  equalFunc: EqualFunc<T>
  constructor() {
    this.count = 0
    this.head = null
    this.equalFunc = function(a: T, b: T): boolean {
      return a === b
    }
  }

  push(element: T): void {
    const node = new LinkedNode<T>(element)
    let current: LinkedNode<T> | null
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current!.next !== null) {
        current = current!.next
      }
      current.next = node
    }
    this.count++
  }

  removeAt(position: number): T | undefined {
    if (position >= 0 && position < this.count) {
      let current = this.head

      if (position === 0) {
        this.head = current!.next
      } else {
        const previous = this.getElementAt(position - 1)
        current = previous!.next
        previous!.next = current!.next
      }
      this.count--
      return current!.element
    }
    return undefined
  }

  getElementAt(index: number): LinkedNode<T> | undefined {
    if (index >= 0 && index < this.count) {
      let node = this.head
      for (let i = 0; i < index; i++) {
        node = node!.next
      }
      return node!
    }
    return undefined
  }

  insert(element: T, position: number): boolean {
    if (position >= 0 && position < this.count) {
      const node = new LinkedNode<T>(element)
      if (position === 0) {
        const current = this.head
        this.head = node
        this.head.next = current
      } else {
        const previous = this.getElementAt(position - 1)
        const current = previous!.next
        node.next = current
        previous!.next = node
      }
      this.count++
      return true
    } else {
      return false
    }
  }

  indexOf(element: T): number {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalFunc(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  remove(element: T): T | undefined {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  size(): number {
    return this.count
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  getHead(): LinkedNode<T> | null {
    return this.head
  }

  toString(): string {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString}, ${current.element}`
      current = current.next
    }
    return objString
  }
}

export class DoublyNode<T> extends LinkedNode<T> {
  prev: DoublyNode<T> | null
  constructor(element: T, next: DoublyNode<T> | null = null, prev: DoublyNode<T> | null = null) {
    super(element, next)
    this.prev = prev
  }
}

export class DoublyLinkedList<T> extends ObjectLinkedList<T> {
  head: DoublyNode<T> | null
  tail: DoublyNode<T> | null
  constructor() {
    super()
    this.head = null
    this.tail = null
  }

  insert(element: T, position: number): boolean {
    if (position >= 0 && position <= this.count) {
      const node = new DoublyNode(element)
      let current = this.head
      if (position === 0) {
        if (this.head == null) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          current!.prev = node
          this.head = node
        }
      } else if (position === this.count) {
        current = this.tail
        current!.next = node
        node.prev = current
        this.tail = node
      } else {
        const previous = this.getElementAt(position - 1)
        current = previous!.next as DoublyNode<T>
        node.next = current
        previous!.next = node
        current.prev = node
        node.prev = previous as DoublyNode<T>
      }
      this.count++
      return true
    }
    return false
  }
}
