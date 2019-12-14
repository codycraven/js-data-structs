import { DoublyLinkedList } from './DoublyLinkedList';
import { Node } from './Node';
export { DoublyLinkedList, Node };

export function newNode<T>(list: DoublyLinkedList, data: T): Node {
  const n = new Node(list);
  n.data = data;
  return n;
}
