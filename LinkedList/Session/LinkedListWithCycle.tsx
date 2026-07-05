class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// Test cases
const linkedListWithCycle = new ListNode(3);
linkedListWithCycle.next = new ListNode(2);
linkedListWithCycle.next.next = new ListNode(0);
linkedListWithCycle.next.next.next = new ListNode(-4);
linkedListWithCycle.next.next.next.next = linkedListWithCycle.next; // Create a cycle

console.log(hasCycle(linkedListWithCycle)); // true

const linkedListWithoutCycle = new ListNode(1);
linkedListWithoutCycle.next = new ListNode(2);

console.log(hasCycle(linkedListWithoutCycle)); // false
