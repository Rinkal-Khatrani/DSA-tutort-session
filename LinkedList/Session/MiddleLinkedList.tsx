//   Definition for singly-linked list.
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function middleNode(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  return slow;
}

// Test cases
const linkedList1 = new ListNode(1);
linkedList1.next = new ListNode(2);
linkedList1.next.next = new ListNode(3);
linkedList1.next.next.next = new ListNode(4);
linkedList1.next.next.next.next = new ListNode(5);

console.log(middleNode(linkedList1)?.val); // Output: 3

const linkedList2 = new ListNode(1);
linkedList2.next = new ListNode(2);
linkedList2.next.next = new ListNode(3);
linkedList2.next.next.next = new ListNode(4);
linkedList2.next.next.next.next = new ListNode(5);
linkedList2.next.next.next.next.next = new ListNode(6);

console.log(middleNode(linkedList2)?.val); // Output: 4
