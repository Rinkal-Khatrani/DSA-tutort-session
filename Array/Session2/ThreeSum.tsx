/**
 * 3Sum
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * The solution set must not contain duplicate triplets.
 *
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 *
 * Example 2:
 * Input: nums = []
 * Output: []
 *
 * Example 3:
 * Input: nums = [0]
 * Output: []
 *
 * Constraints:
 * 0 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 * @param {number[]} nums
 * @return {number[][]}
 */

function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

const nums3Sum1: number[] = [-1, 0, 1, 2, -1, -4];
console.log("--- 3Sum ---", threeSum(nums3Sum1)); // [[-1, -1, 2], [-1, 0, 1]]
const nums3Sum2: number[] = [];
console.log("--- 3Sum ---", threeSum(nums3Sum2)); // []
const nums3Sum3: number[] = [0];
console.log("--- 3Sum ---", threeSum(nums3Sum3)); // []
