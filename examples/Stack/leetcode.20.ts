// 20. Valid Parentheses

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
//
// An input string is valid if:
//
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

import { WeakMapStack } from '../../src/Stack'

export function isValid(s: string): boolean {
  let stack = new WeakMapStack<string>()

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i)
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c)
    } else {
      if (stack.isEmpty()) {
        return false
      }
      let top = stack.pop()
      if (c === ')' && top !== '(') return false
      if (c === ']' && top !== '[') return false
      if (c === '}' && top !== '{') return false
    }
  }
  return stack.isEmpty()
}
