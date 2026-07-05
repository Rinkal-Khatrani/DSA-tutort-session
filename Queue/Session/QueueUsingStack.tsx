class MyQueue {
  private queue: number[] = [];
  private front: number = 0;
  constructor() {}

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    if (!this.empty()) {
      return this.queue.shift()!;
    }
    return -1;
  }

  peek(): number {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// tests
const myQueue = new MyQueue();
myQueue.push(1);
myQueue.push(2);
console.log(myQueue.peek()); // 1
console.log(myQueue.pop()); // 1
console.log(myQueue.empty()); // false
