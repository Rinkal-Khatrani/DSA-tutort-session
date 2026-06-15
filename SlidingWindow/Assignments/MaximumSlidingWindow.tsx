function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = [];
  const deque: number[] = []; // stores indices

  for (let i = 0; i < nums.length; i++) {
    // Remove indices outside current window
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // Remove smaller elements from back
    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    deque.push(i);

    // First window completed
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// Tests
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]
console.log(maxSlidingWindow([1], 1)); // [1]
console.log(maxSlidingWindow([9, 11], 2)); // [11]
