export class CircularQueue {
  public length = 0;

  private store: unknown[];
  private head = 0;

  constructor(private size: number) {
    this.store = new Array(size);
  }

  public push(data: unknown): boolean {
    if (this.length === this.size) {
      return false;
    }

    let t: number = this.head + this.length;
    if (t >= this.size) {
      t = t - this.size;
    }
    this.length++;
    this.store[t] = data;
    return true;
  }

  public shift(): unknown {
    if (this.length === 0) {
      return undefined;
    }
    const v = this.store[this.head];
    this.store[this.head] = undefined;
    let h = this.head + 1;
    if (h == this.size) {
      h = 0;
    }
    this.head = h;
    this.length--;
    return v;
  }

  public toJSON(): unknown[] {
    const end = this.head + this.length;
    if (!this.length) {
      return [];
    } else if (end <= this.size) {
      return this.store.slice(this.head, end);
    }
    return this.store.slice(this.head).concat(this.store.slice(0, end - this.size));
  }
}
