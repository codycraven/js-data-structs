import { CircularQueue } from '.';

test('new queue is empty', () => {
  expect(new CircularQueue(5).length).toBe(0);
});

test('unable to overfill queue', () => {
  const q = new CircularQueue(3);
  expect(q.push('a')).toBe(true);
  expect(q.push('b')).toBe(true);
  expect(q.push('c')).toBe(true);
  expect(q.push('d')).toBe(false);
  expect(q.length).toBe(3);
});

test('shift wrapping does not lose values', () => {
  const q = new CircularQueue(3);
  q.push('a');
  q.push('b');
  q.push('c');
  expect(q.shift()).toBe('a');
  expect(q.push('d')).toBe(true);
});

test('shift on empty queue returns undefined', () => {
  const q = new CircularQueue(3);
  expect(q.shift()).toBeUndefined();
});

test('able to iterate entire queue', () => {
  const q = new CircularQueue(3);
  q.push('a');
  expect(q.shift()).toBe('a');
  q.push('b');
  q.push('c');
  q.push('d');
  expect(q.shift()).toBe('b');
  expect(q.shift()).toBe('c');
  q.push('e');
  q.push('f');
  expect(q.shift()).toBe('d');
  expect(q.shift()).toBe('e');
  expect(q.shift()).toBe('f');
  expect(q.shift()).toBeUndefined();
});

test('queue converts to JSON', () => {
  const q = new CircularQueue(3);
  expect(JSON.parse(JSON.stringify(q))).toMatchObject([]);
  q.push('a');
  q.push('b');
  expect(JSON.parse(JSON.stringify(q))).toMatchObject(['a', 'b']);
  q.shift();
  q.push('c');
  q.push('d');
  expect(JSON.parse(JSON.stringify(q))).toMatchObject(['b', 'c', 'd']);
})
