function maximumSubarraySum(nums: number[], k: number): number {
  const freq = new Map<number, number>();
  let sum = 0;
  let maxSum = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    freq.set(nums[right], (freq.get(nums[right]) ?? 0) + 1);

    if (right - left + 1 > k) {
      sum -= nums[left];
      const leftVal = nums[left];
      const newCount = (freq.get(leftVal) ?? 0) - 1;
      if (newCount > 0) {
        freq.set(leftVal, newCount);
      } else {
        // remove key when count is 0 or negative
        freq.delete(leftVal);
      }
      left++;
    }

    // check for valid window
    if (right - left + 1 === k && freq.size === k) {
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}

// Tests
console.log(maximumSubarraySum([1, 5, 4, 2, 9], 3)); // 16
console.log(maximumSubarraySum([4, 2, 4, 5, 6], 3)); // 15
console.log(maximumSubarraySum([1, 2, 3, 4, 5], 2)); // 9
