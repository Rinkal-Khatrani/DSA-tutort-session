function containsDuplicate(nums: number[]): boolean {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }

  return false;
}

// Tests
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3])); // true
console.log(containsDuplicate([1, 1, 1, 3, 3]));
