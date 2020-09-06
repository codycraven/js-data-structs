# Circular Queue

Circular queues are an efficient data structure when a maximum size for the queue can be set. Compared to using JavaScript native's arrays with `.push()` and `.shift()` methods, a circular queue provides more consistent execution times.

## Installation

If you haven't yet installed @codycraven/data-structs in your application, run:

```js
npm install --save @codycraven/data-structs

// Or if using Yarn:
// yarn add @codycraven/data-structs
```

Add the CircularQueue module to your code:

```js
const { CircularQueue } = require('@codycraven/data-structs');

// Or if your environment supports ES6 modules:
// import { CircularQueue } from "@codycraven/data-structs"
```

## Usage

Create a new queue:

```js
// Where 3 is the maximum number of elements in your queue.
const myQueue = new CirularQueue(3);
```

### Queue functionality

Add items to the queue, these could be strings, functions, whatever.

```js
myQueue.push('abc'); // ["abc"]
myQueue.push('def'); // ["abc", "def"]
myQueue.push('ghi'); // ["abc", "def", "ghi"]
myQueue.length; // 3
```

Grab the first item from the queue, add another, and shift another off.

```js
myQueue.shift(); // "abc"
myQueue.push('jkl'); // ["def", "ghi", "jkl"]
myQueue.shift(); // "def"
myQueue.length; // 2
```

Serialize queue into JSON:

```js
JSON.stringify(myQueue); // ["ghi", "jkl"]
```
