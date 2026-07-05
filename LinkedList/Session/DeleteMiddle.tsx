function deleteMiddle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return null;
  }
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;
  let prev: ListNode | null = null;

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow!.next;
    fast = fast.next.next;
  }

  prev!.next = slow!.next;

  return head;
}

// Test cases
const dellinkedList1 = new ListNode(1);
dellinkedList1.next = new ListNode(2);
dellinkedList1.next.next = new ListNode(3);
dellinkedList1.next.next.next = new ListNode(4);
dellinkedList1.next.next.next.next = new ListNode(5);

const result1 = deleteMiddle(dellinkedList1);
let current1: ListNode | null = result1;
while (current1 !== null) {
  console.log(current1.val); // Output: 1, 2, 4, 5
  current1 = current1.next;
}

const dellinkedList2 = new ListNode(1);
dellinkedList2.next = new ListNode(2);
dellinkedList2.next.next = new ListNode(3);
dellinkedList2.next.next.next = new ListNode(4);
dellinkedList2.next.next.next.next = new ListNode(5);
dellinkedList2.next.next.next.next.next = new ListNode(6);

const result2 = deleteMiddle(dellinkedList2);
let current2: ListNode | null = result2;
while (current2 !== null) {
  console.log(current2.val); // Output: 1, 2, 3, 5, 6
  current2 = current2.next;
}
