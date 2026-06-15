function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (k === 0) return false;

  let left = 0;
  const window = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (window.has(nums[i])) {
      return true;
    }
    window.add(nums[i]);
    if (window.size > k) {
      window.delete(nums[left]);
      left++;
    }
  }
  return false;
}

// Tests
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
