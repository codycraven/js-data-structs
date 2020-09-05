import { Node } from './Node';
import { newNode } from './';

export class DoublyLinkedList {
  public head: Node | undefined;
  public tail: Node | undefined;
  public length = 0;

  public insertHead(data: unknown): Node {
    const n = newNode(this, data);
    if (this.head) {
      n.next = this.head;
      n.next.prev = n;
    } else {
      this.tail = n;
    }
    this.head = n;
    this.length++;
    return n;
  }

  public insertTail(data: unknown): Node {
    const n = newNode(this, data);
    if (this.tail) {
      n.prev = this.tail;
      n.prev.next = n;
    } else {
      this.head = n;
    }
    this.tail = n;
    this.length++;
    return n;
  }

  public toJSON(): unknown[] {
    const a: unknown[] = [];
    if (this.head) {
      let n = this.head;
      do {
        a.push(n.data);
        n = n.next;
      } while (n);
    }
    return a;
  }
}
