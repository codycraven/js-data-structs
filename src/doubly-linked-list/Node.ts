import { DoublyLinkedList } from './DoublyLinkedList';
import { newNode } from './';

export class Node {
  public data: unknown;
  public prev: Node | undefined = undefined;
  public next: Node | undefined = undefined;

  constructor(public list: DoublyLinkedList) {}

  public insertAfter(data: unknown): Node {
    const n = newNode(this.list, data);
    n.next = this.next;
    n.prev = this;
    this.next = n;
    if (n.next) {
      n.next.prev = n;
    } else {
      this.list.tail = n;
    }
    this.list.length++;
    return n;
  }

  public insertBefore(data: unknown): Node {
    const n = newNode(this.list, data);
    n.next = this;
    n.prev = this.prev;
    this.prev = n;
    if (n.prev) {
      n.prev.next = n;
    } else {
      this.list.head = n;
    }
    this.list.length++;
    return n;
  }

  public moveToHead(): Node {
    this.remove();
    return this.list.insertHead(this.data);
  }

  public moveToTail(): Node {
    this.remove();
    return this.list.insertTail(this.data);
  }

  public remove(): void {
    if (this.prev) {
      this.prev.next = this.next;
    } else {
      this.list.head = this.next;
    }
    if (this.next) {
      this.next.prev = this.prev;
    } else {
      this.list.tail = this.prev;
    }
    this.list.length--;
  }

  public valueOf(): unknown {
    return this.data;
  }
}
