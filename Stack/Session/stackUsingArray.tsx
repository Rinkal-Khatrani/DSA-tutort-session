class Stack {
  private stack: (number | null)[];
  private top: number;
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.stack = new Array(capacity).fill(null);
    this.top = -1;
  }

  // Check if stack is empty
  isEmpty(): boolean {
    return this.top === -1;
  }

  // Check if stack is full
  isFull(): boolean {
    return this.top === this.capacity - 1;
  }

  // Push an element
  push(value: number): void {
    if (this.isFull()) {
      console.log("Stack Overflow");
      return;
    }

    this.top++;
    this.stack[this.top] = value;
  }

  // Pop the top element
  pop(): number | null {
    if (this.isEmpty()) {
      console.log("Stack Underflow");
      return null;
    }

    const value = this.stack[this.top];
    this.stack[this.top] = null;
    this.top--;

    return value;
  }

  // Get the top element
  peek(): number | null {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
      return null;
    }

    return this.stack[this.top];
  }

  // Current size
  size(): number {
    return this.top + 1;
  }

  // Print stack
  display(): void {
    console.log(this.stack.slice(0, this.top + 1));
  }
}

const stack = new Stack(5);
stack.push(10);
stack.push(20);
stack.push(30);
stack.display(); // [10, 20, 30]

console.log(stack.pop()); // 30
stack.display(); // [10, 20]
