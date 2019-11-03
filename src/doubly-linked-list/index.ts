import DoublyLinkedList from './DoublyLinkedList';
import Node from './Node';

export default DoublyLinkedList;

export { Node };

export function newNode<T>(list: DoublyLinkedList, data: T): Node {
  const n = new Node(list);
  n.data = data;
  return n;
}
