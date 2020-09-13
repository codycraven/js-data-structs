# Doubly Linked List

Generally, linked lists do not provide tremendous value in JavaScript since
array objects allow storage of any type and are variable in length. However,
linked lists can be an efficient mechanism to perform operations on nodes in
an asynchronous manner.

Doubly Linked Lists provide benefits over (Singly) Linked Lists since each node
contains a reference to the node preceeding it, allowing efficient iteration
in either direction.

## Installation

If you haven't yet installed @codycraven/data-structs in your application, run:

```js
npm install --save @codycraven/data-structs

// Or if using Yarn:
// yarn add @codycraven/data-structs
```

Add the DoublyLinkedList module to your code:

```js
const { DoublyLinkedList } = require('@codycraven/data-structs');

// Or if your environment supports ES6 modules:
// import { DoublyLinkedList } from "@codycraven/data-structs"
```

## Usage

Create a new list:

```js
const myList = new DoublyLinkedList();
myList.length; // 0
```

### List functionality

Add some nodes, each at the head (the beginning) of the list:

```js
myList.insertHead('abc'); // ["abc"]
myList.insertHead('def'); // ["def", "abc"]
myList.insertHead('ghi'); // ["ghi", "def", "abc"]
myList.length; // 3
myList.head; // "ghi" Node
myList.tail; // "abc" Node
```

Add a node to the tail (the end) of the list:

```js
myList.insertTail('xyz'); // ["ghi", "def", "abc", "xyz"]
myList.length; // 4
myList.tail; // "xyz" Node
```

Serialize list into JSON:

```js
JSON.stringify(myList); // ["ghi", "def", "abc", "xyz"]
```

### Node methods

Remove the second node:

```js
const defNode = myList.head.next;
defNode.remove(); // ["ghi", "abc", "xyz"]
myList.length; // 3
```

Move a node to the head of the list:

```js
myList.tail.moveToHead(); // ["xyz", "ghi", "abc"]
myList.tail.moveToHead(); // ["abc", "xyz", "ghi"]
```

Move a node to the tail of the list:

```js
myList.tail.prev.moveToTail(); // ["abc", "ghi", "xyz"]
```

Insert a node before another:

```js
const mnoNode = myList.tail.insertBefore('mno'); // ["abc", "ghi", "mno", "xyz"]
myList.length; // 4
```

Insert a node after another:

```js
mnoNode.insertAfter('pqr'); // ["abc", "ghi", "mno", "pqr", "xyz"]
myList.length; // 5
```

Move a node:

```js
const ghiNode = mnoNode.prev;
mnoNode.remove();
ghiNode.insertBefore(mnoNode.data); // ["abc", "mno", "ghi", "pqr", "xyz"]
myList.length; // 5
```

Compare node values:

```js
const list = new DoublyLinkedList();
const node1 = list.insertHead(84);
const node2 = list.insertTail(42);
const node3 = list.insertTail(8);
node1 > node2; // true
node1 < node2; // false
node2 > node3; // true
```

Read a node's value:

```js
node2.valueOf(); // 42
```
