import { DoublyLinkedList } from './DoublyLinkedList';
import { Node } from './Node';
export { DoublyLinkedList, Node };

export function newNode(list: DoublyLinkedList, data: unknown): Node {
  const n = new Node(list);
  n.data = data;
  return n;
}
