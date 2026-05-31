/**
 * 75. Sort Colors
 *
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
 *
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 *
 * You must solve this problem without using the library's sort function.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 * Example 2:
 *
 * Input: nums = [2,0,1]
 * Output: [0,1,2]
 *
 * * Constraints:
 *
 * 1 <= nums.length <= 300
 * nums[i] is either 0, 1, or 2.
 *
 */
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let p1 = 0;
  let p2 = 0;
  let p3 = nums.length - 1;

  while (p2 <= p3) {
    if (nums[p2] === 0) {
      [nums[p2], nums[p1]] = [nums[p1], nums[p2]];
      p1++;
      p2++;
    } else if (nums[p2] === 1) {
      p2++;
    } else {
      [nums[p2], nums[p3]] = [nums[p3], nums[p2]];
      p3--;
    }
  }
}

function sortColorsusingSwitch(nums: number[]): void {
  let p1 = 0;
  let p2 = 0;
  let p3 = nums.length - 1;

  while (p2 <= p3) {
    switch (nums[p2]) {
      case 0:
        [nums[p2], nums[p1]] = [nums[p1], nums[p2]];
        p1++;
        p2++;
        break;
      case 1:
        p2++;
        break;
      case 2:
        [nums[p2], nums[p3]] = [nums[p3], nums[p2]];
        p3--;
        break;
    }
  }
}

const sortColors1: number[] = [2, 0, 2, 1, 1, 0];
sortColors(sortColors1);
console.log("--- Sorted Colors ---", sortColors1); // [0, 0, 1, 1, 2, 2]

const sortColors2: number[] = [2, 0, 1];
sortColorsusingSwitch(sortColors2);
console.log("--- Sorted Colors ---", sortColors2); // [0, 1, 2]

const sortColors3: number[] = [0, 1, 2, 0, 1, 2, 0, 1, 2];
sortColors(sortColors3);
console.log("--- Sorted Colors ---", sortColors3); // [0]
