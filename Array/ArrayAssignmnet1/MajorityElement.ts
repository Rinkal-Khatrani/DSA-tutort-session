/**
 * 169. Majority Element 
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
The input is generated such that a majority element will exist in the array.
 */

function majorityElement(nums: number[]): number {
    let candidate: number = nums[0];
    let count: number = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === candidate) {
            count++;
        } else {
            count--;
            if(count === 0 && i + 1 < nums.length) {
                candidate = nums[i + 1];
                count = 1;
                i++; // Skip the next element since we just set it as candidate
            }
        }
    }
    return candidate;
};

const input = [2,2,1,1,1,2,2];
console.log(majorityElement(input)); // 2