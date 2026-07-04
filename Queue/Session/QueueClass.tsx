class QueueData<T> {
  private items: T[] = [];
  private front = 0;
  private rear = -1;
  private capacity = 0;

  isFull(): boolean {
    if (this.capacity === this.rear + 1) {
      return true;
    }
    return false;
  }

  enqueue(value: T): void {
    this.rear++;
    this.items[this.rear] = value;
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;

    const value = this.items[this.front];
    this.front++;

    return value;
  }

  peek(): T | undefined {
    if (this.isEmpty()) return undefined;

    return this.items[this.front];
  }

  isEmpty(): boolean {
    return this.front > this.rear;
  }

  size(): number {
    return this.rear - this.front + 1;
  }
}

// Tests
const queue = new QueueData<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.size()); // 3
console.log(queue.peek()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.size()); // 2
console.log(queue.isEmpty()); // false
