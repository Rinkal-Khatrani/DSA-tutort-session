class MyLinkedList {
  private head: ListNode | null;
  private size: number;
  private tail: ListNode | null;
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }
  insertFirst(val: number): void {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  insertLast(val: number): void {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  insertMiddle(val: number, position: number): void {
    if (position < 0 || position > this.size) {
      throw new Error("Invalid position");
    }
    if (position === 0) {
      this.insertFirst(val);
      return;
    }
    if (position === this.size) {
      this.insertLast(val);
      return;
    }

    const newNode = new ListNode(val);
    let current = this.head;
    for (let i = 0; i < position - 1; i++) {
      current = current!.next;
    }
    newNode.next = current!.next;
    current!.next = newNode;
    this.size++;
  }

  deleteFirst(): void {
    if (!this.head) return;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size--;
  }

  deleteLast(): void {
    if (!this.head) return;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current: ListNode | null = this.head;
      while (current!.next !== this.tail) {
        current = current!.next;
      }
      current!.next = null;
      this.tail = current;
    }
    this.size--;
  }

  deleteMiddle(position: number): void {
    if (position < 0 || position >= this.size) {
      throw new Error("Invalid position");
    }
    if (position === 0) {
      this.deleteFirst();
      return;
    }
    if (position === this.size - 1) {
      this.deleteLast();
      return;
    }

    let current = this.head;
    for (let i = 0; i < position - 1; i++) {
      current = current!.next;
    }
    current!.next = current!.next!.next;
    this.size--;
  }

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}

// Test cases
const linkedList = new MyLinkedList();
linkedList.insertFirst(1);
linkedList.insertLast(2);
linkedList.insertMiddle(3, 1); // List: 1 -> 3 -> 2
console.log(linkedList.getSize()); // Output: 3
linkedList.deleteMiddle(1); // List: 1 -> 2
console.log(linkedList.getSize()); // Output: 2
linkedList.deleteFirst(); // List: 2
console.log(linkedList.getSize()); // Output: 1
linkedList.deleteLast(); // List is empty
console.log(linkedList.isEmpty()); // Output: true
