class FrontMiddleBackQueue {
  private left: number[] = [];
  private right: number[] = [];

  constructor() {}

  balance(): void {
    if (this.left.length > this.right.length) {
      this.right.unshift(this.left.pop()!);
    }
    if (this.right.length > this.left.length) {
      this.left.push(this.right.shift()!);
    }
  }

  pushFront(val: number): void {
    this.left.unshift(val);

    this.balance();
  }

  pushMiddle(val: number): void {
    if (this.left.length > this.right.length) {
      this.right.unshift(this.left.pop()!);
    }
    this.left.push(val);
  }

  pushBack(val: number): void {
    this.right.push(val);
    this.balance();
  }

  popFront(): number {
    if (this.left.length === 0 && this.right.length === 0) {
      return -1;
    }
    let ans: number;
    if (this.left.length) {
      ans = this.left.shift()!;
    } else {
      ans = this.right.shift()!;
    }
    this.balance();
    return ans;
  }

  popMiddle(): number {
    if (this.left.length === 0 && this.right.length === 0) {
      return -1;
    }

    const ans = this.left.pop()!;

    this.balance();
    return ans;
  }

  popBack(): number {
    if (this.right.length === 0 && this.left.length === 0) {
      return -1;
    }
    let ans: number;
    if (this.right.length > 0) {
      ans = this.right.pop()!;
    } else {
      ans = this.left.pop()!;
    }
    this.balance();
    return ans;
  }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */

// Test cases
const q = new FrontMiddleBackQueue();
q.pushFront(1); // [1]
q.pushBack(2); // [1, 2]
q.pushMiddle(3); // [1, 3, 2]
q.pushMiddle(4); // [1, 4, 3, 2]
console.log(q.popFront()); // return 1 -> [4, 3, 2]
console.log(q.popMiddle()); // return 3 -> [4, 2]
console.log(q.popMiddle()); // return 4 -> [2]
console.log(q.popBack()); // return 2 -> []
console.log(q.popFront()); // return -1 -> [] (The queue is empty)
