import { ObjectQueue } from '../../src/Queue'

export function hotPotato(elementsList: Array<string>, num: number): object {
  const queue = new ObjectQueue<string>()
  const elimiatedList = []

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i])
  }

  while(queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()!)
    }
    elimiatedList.push(queue.dequeue())
  }

  return {
    eliminated: elimiatedList,
    winner: queue.dequeue()
  }
}
