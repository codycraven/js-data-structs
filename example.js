const { DoublyLinkedList } = require('@codycraven/data-structs');

const myList = new DoublyLinkedList();
myList.insertHead('abc'); // ["abc"]
myList.insertHead('def'); // ["def", "abc"]
myList.insertHead('ghi'); // ["ghi", "def", "abc"]
myList.insertTail('xyz'); // ["ghi", "def", "abc", "xyz"]
myList.tail.moveToHead(); // ["xyz", "ghi", "def", "abc"]
console.log(
  'List values',
  myList.head.valueOf(),
  myList.head.next.valueOf(),
  myList.tail.prev.valueOf(),
  myList.tail.valueOf(),
);
