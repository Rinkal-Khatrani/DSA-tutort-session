/**
 * Next Greater Element III
 * Given a positive 32-bit integer n, you need to find the smallest 32-bit integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive 32-bit integer exists, you need to return -1.
 

Example 1:

Input: n = 12
Output: 21
Example 2:

Input: n = 21
Output: -1
 

Constraints:

1 <= n <= 231 - 1
 */
function nextGreaterElement3(n: number): number {
  const digits = n.toString().split("").map(Number);
  const len = digits.length;

  // Step 1: find pivot — rightmost digit smaller than its right neighbor
  let pivot = -1;
  for (let i = len - 2; i >= 0; i--) {
    if (digits[i] < digits[i + 1]) {
      pivot = i;
      break;
    }
  }

  // no pivot found → digits are descending → no next permutation
  if (pivot === -1) return -1;

  // Step 2: find rightmost digit greater than pivot
  let swapIdx = -1;
  for (let i = len - 1; i > pivot; i--) {
    if (digits[i] > digits[pivot]) {
      swapIdx = i;
      break;
    }
  }

  // Step 3: swap pivot with swapIdx
  [digits[pivot], digits[swapIdx]] = [digits[swapIdx], digits[pivot]];

  // Step 4: reverse everything after pivot
  let left = pivot + 1;
  let right = len - 1;
  while (left < right) {
    [digits[left], digits[right]] = [digits[right], digits[left]];
    left++;
    right--;
  }

  // Convert back to number
  const result = parseInt(digits.join(""));

  // Check 32-bit integer overflow
  return result > 2 ** 31 - 1 ? -1 : result;
}

const inputN1 = 12;
console.log(nextGreaterElement3(inputN1)); // 21

const inputN2 = 21;
console.log(nextGreaterElement3(inputN2)); // -1

const inputN3 = 1234;
console.log(nextGreaterElement3(inputN3)); // 1243

const inputN4 = 4321;
console.log(nextGreaterElement3(inputN4)); // -1

const inputN5 = 1999999999;
console.log(nextGreaterElement3(inputN5)); // -1 (overflow)
