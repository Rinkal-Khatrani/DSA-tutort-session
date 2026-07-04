class MyCircularQueue {
  private queue: number[];
  private size: number;
  private front: number = -1;
  private rear: number = -1;
  constructor(k: number) {
    this.queue = new Array(k);
    this.size = k;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    if (this.front === -1) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;

    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return true;
  }

  Front(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[this.front];
  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[this.rear];
  }

  isEmpty(): boolean {
    return this.front === -1;
  }

  isFull(): boolean {
    return (this.rear + 1) % this.size === this.front;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

// Test cases
const circularQueue = new MyCircularQueue(3);
console.log(circularQueue.enQueue(1)); // true
console.log(circularQueue.enQueue(2)); // true
console.log(circularQueue.enQueue(3)); // true
console.log(circularQueue.enQueue(4)); // false, queue is full
console.log(circularQueue.Rear()); // 3
console.log(circularQueue.isFull()); // true
console.log(circularQueue.deQueue()); // true
console.log(circularQueue.enQueue(4)); // true
console.log(circularQueue.Rear()); // 4
