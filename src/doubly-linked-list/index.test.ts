import { DoublyLinkedList } from '.';

test('new list has expected structure', () => {
  expect(new DoublyLinkedList()).toMatchObject({
    length: 0,
  });
});

test('insert head works with an empty list', () => {
  const d = new DoublyLinkedList();
  d.insertTail('head');
  expect(d.length).toBe(1);
  expect(d.head.data).toBe('head');
  expect(d.head.prev).toBeUndefined();
  expect(d.head.next).toBeUndefined();
  expect(d.tail.data).toBe('head');
  expect(d.tail.prev).toBeUndefined();
  expect(d.tail.next).toBeUndefined();
});

test('insert head works with a non-empty list', () => {
  const d = new DoublyLinkedList();
  d.insertHead('old head');
  d.insertHead('new head');
  expect(d.length).toBe(2);
  expect(d.head.data).toBe('new head');
  expect(d.tail.data).toBe('old head');
  expect(d.head.next).toBe(d.tail);
  expect(d.tail.prev).toBe(d.head);
  expect(d.head.prev).toBeUndefined();
  expect(d.tail.next).toBeUndefined();
});

test('able to insert before, beginning of list', () => {
  const d = new DoublyLinkedList();
  d.insertHead('old head');
  d.head.insertBefore('new head');
  expect(d.length).toBe(2);
  expect(d.head.data).toBe('new head');
  expect(d.tail.data).toBe('old head');
  expect(d.head.next).toBe(d.tail);
  expect(d.tail.prev).toBe(d.head);
  expect(d.head.prev).toBeUndefined();
  expect(d.tail.next).toBeUndefined();
});

test('able to insert before, in middle of list', () => {
  const d = new DoublyLinkedList();
  d.insertHead('head');
  d.insertTail('tail');
  d.tail.insertBefore('middle');
  expect(d.length).toBe(3);
  // Walk list
  expect(d.head.data).toBe('head');
  expect(d.head.next.data).toBe('middle');
  expect(d.head.next.next.data).toBe('tail');
  expect(d.head.next.next).toBe(d.tail);
  // Walk list backwards
  expect(d.tail.data).toBe('tail');
  expect(d.tail.prev.data).toBe('middle');
  expect(d.tail.prev.prev.data).toBe('head');
  expect(d.tail.prev.prev).toBe(d.head);
  // Check ends
  expect(d.head.prev).toBeUndefined();
  expect(d.tail.next).toBeUndefined();
});

test('able to insert after, in middle of list', () => {
  const d = new DoublyLinkedList();
  d.insertHead('head');
  d.insertTail('tail');
  d.head.insertAfter('middle');
  expect(d.length).toBe(3);
  // Walk list
  expect(d.head.data).toBe('head');
  expect(d.head.next.data).toBe('middle');
  expect(d.head.next.next.data).toBe('tail');
  expect(d.head.next.next).toBe(d.tail);
  // Walk list backwards
  expect(d.tail.data).toBe('tail');
  expect(d.tail.prev.data).toBe('middle');
  expect(d.tail.prev.prev.data).toBe('head');
  expect(d.tail.prev.prev).toBe(d.head);
  // Check ends
  expect(d.head.prev).toBeUndefined();
  expect(d.tail.next).toBeUndefined();
});

test('able to insert after, end of list', () => {
  const d = new DoublyLinkedList();
  d.insertHead('head');
  d.head.insertAfter('middle');
  d.insertTail('tail');
  expect(d.length).toBe(3);
  // Walk list
  expect(d.head.data).toBe('head');
  expect(d.head.next.data).toBe('middle');
  expect(d.head.next.next.data).toBe('tail');
  expect(d.head.next.next).toBe(d.tail);
  // Walk list backwards
  expect(d.tail.data).toBe('tail');
  expect(d.tail.prev.data).toBe('middle');
  expect(d.tail.prev.prev.data).toBe('head');
  expect(d.tail.prev.prev).toBe(d.head);
  // Check ends
  expect(d.head.prev).toBeUndefined();
  expect(d.tail.next).toBeUndefined();
});

test('insert tail works with an empty list', () => {
  const d = new DoublyLinkedList();
  d.insertTail('tail');
  expect(d.length).toBe(1);
  expect(d.head.data).toBe('tail');
  expect(d.head.prev).toBeUndefined();
  expect(d.head.next).toBeUndefined();
  expect(d.tail.data).toBe('tail');
  expect(d.tail.prev).toBeUndefined();
  expect(d.tail.next).toBeUndefined();
});

test('insert tail works with a non-empty list', () => {
  const d = new DoublyLinkedList();
  d.insertHead('head');
  d.insertTail('tail');
  expect(d.length).toBe(2);
  // Walk list
  expect(d.head.data).toBe('head');
  expect(d.head.next.data).toBe('tail');
  expect(d.head.next).toBe(d.tail);
  // Walk list backwards
  expect(d.tail.data).toBe('tail');
  expect(d.tail.prev.data).toBe('head');
  expect(d.tail.prev).toBe(d.head);
  // Check ends
  expect(d.head.prev).toBeUndefined();
  expect(d.tail.next).toBeUndefined();
});

test('move node to head of list', () => {
  const d = new DoublyLinkedList();
  d.insertTail('tail');
  d.insertHead('middle');
  d.head.insertAfter('head');
  expect(d.length).toBe(3);
  d.tail.prev.moveToHead();
  expect(d.length).toBe(3);
  // Walk list
  expect(d.head.data).toBe('head');
  expect(d.head.next.data).toBe('middle');
  expect(d.head.next.next.data).toBe('tail');
  expect(d.head.next.next).toBe(d.tail);
  // Walk list backwards
  expect(d.tail.data).toBe('tail');
  expect(d.tail.prev.data).toBe('middle');
  expect(d.tail.prev.prev.data).toBe('head');
  expect(d.tail.prev.prev).toBe(d.head);
  // Check ends
  expect(d.head.prev).toBeUndefined();
  expect(d.tail.next).toBeUndefined();
});

test('move node to tail of list', () => {
  const d = new DoublyLinkedList();
  d.insertHead('head');
  d.head.insertAfter('middle');
  d.head.insertBefore('tail');
  expect(d.length).toBe(3);
  d.head.moveToTail();
  expect(d.length).toBe(3);
  // Walk list
  expect(d.head.data).toBe('head');
  expect(d.head.next.data).toBe('middle');
  expect(d.head.next.next.data).toBe('tail');
  expect(d.head.next.next).toBe(d.tail);
  // Walk list backwards
  expect(d.tail.data).toBe('tail');
  expect(d.tail.prev.data).toBe('middle');
  expect(d.tail.prev.prev.data).toBe('head');
  expect(d.tail.prev.prev).toBe(d.head);
  // Check ends
  expect(d.head.prev).toBeUndefined();
  expect(d.tail.next).toBeUndefined();
});

test('remove first node from list', () => {
  const d = new DoublyLinkedList();
  d.insertHead('head');
  d.head.insertAfter('middle');
  d.insertTail('tail');
  expect(d.length).toBe(3);
  d.head.remove();
  expect(d.length).toBe(2);
  // Walk list
  expect(d.head.data).toBe('middle');
  expect(d.head.next.data).toBe('tail');
  expect(d.head.next).toBe(d.tail);
  // Walk list backwards
  expect(d.tail.data).toBe('tail');
  expect(d.tail.prev.data).toBe('middle');
  expect(d.tail.prev).toBe(d.head);
  // Check ends
  expect(d.head.prev).toBeUndefined();
  expect(d.tail.next).toBeUndefined();
});

test('remove last node from list', () => {
  const d = new DoublyLinkedList();
  d.insertHead('head');
  d.insertTail('tail');
  d.tail.insertBefore('middle');
  expect(d.length).toBe(3);
  d.tail.remove();
  // Walk list
  expect(d.head.data).toBe('head');
  expect(d.head.next.data).toBe('middle');
  expect(d.head.next).toBe(d.tail);
  // Walk list backwards
  expect(d.tail.data).toBe('middle');
  expect(d.tail.prev.data).toBe('head');
  expect(d.tail.prev).toBe(d.head);
  // Check ends
  expect(d.head.prev).toBeUndefined();
  expect(d.tail.next).toBeUndefined();
});

test('remove only node from list', () => {
  const d = new DoublyLinkedList();
  expect(d.length).toBe(0);
  d.insertHead('test');
  expect(d.length).toBe(1);
  expect(d.head).toBe(d.tail);
  d.head.remove();
  expect(d.length).toBe(0);
  expect(d.head).toBeUndefined();
  expect(d.head).toBe(d.tail);
});

test('serializes to JSON', () => {
  const d = new DoublyLinkedList();
  expect(JSON.parse(JSON.stringify(d))).toMatchObject([]);
  d.insertHead('head');
  d.insertTail('tail');
  d.tail.insertBefore('middle');
  expect(JSON.parse(JSON.stringify(d))).toMatchObject(['head', 'middle', 'tail']);
});

test('valueOf functions', () => {
  const d = new DoublyLinkedList();
  const node1 = d.insertHead(84);
  const node2 = d.insertTail(42);
  const node3 = d.insertTail(8);
  expect(node1 > node2).toBe(true);
  expect(node1 < node2).toBe(false);
  expect(node2 > node3).toBe(true);
  expect(node2.valueOf()).toBe(42);
});
