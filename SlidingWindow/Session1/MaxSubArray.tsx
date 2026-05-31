function maxSubArray(nums: number[]): number {
  let currentSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    // either extend current subarray or start fresh
    currentSum += nums[i];
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}

// Tests
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
