function findMaxAverage(nums: number[], k: number): number {
  // Step 1: build first window
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  let maxSum = currentSum;

  // Step 2: slide window
  for (let right = k; right < nums.length; right++) {
    currentSum += nums[right]; // add new right
    currentSum -= nums[right - k]; // remove old left
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum / k;
}

// Tests
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(findMaxAverage([5], 1)); // 5
