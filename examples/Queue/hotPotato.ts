import { ObjectQueue } from '../../src/Queue'

interface Winner<T> {
  eliminated: Array<T>,
  winner: T
}

export function hotPotato(elementsList: Array<string>, num: number): Winner<string> {
  const queue = new ObjectQueue<string>()
  const elimiatedList: Array<string> = []

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i])
  }

  while(queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()!)
    }
    elimiatedList.push(queue.dequeue()!)
  }

  return {
    eliminated: elimiatedList,
    winner: queue.dequeue()!
  }
}
