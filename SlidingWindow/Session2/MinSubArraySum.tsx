function minSubArrayLen(target: number, nums: number[]): number {
  let n = nums.length;
  let start = 0;
  let minLen = Infinity;
  let currentSum = 0;

  for (let end = 0; end < n; end++) {
    currentSum += nums[end];
    while (currentSum >= target) {
      minLen = Math.min(minLen, end - start + 1);
      currentSum -= nums[start];
      start++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// Tests
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
console.log(minSubArrayLen(4, [1, 4, 4])); // 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
