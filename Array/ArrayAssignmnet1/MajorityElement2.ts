/** 
 * Majority Element II
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]
 

Constraints:

1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109
  */

function majorityElement2(nums: number[]): number[] {
    // Phase 1 — Find two candidates
    let cand1: number = 0, count1: number = 0;
    let cand2: number = 1, count2: number = 0;  // init different values

    for (const num of nums) {
        if (num === cand1) {
            count1++;
        } else if (num === cand2) {
            count2++;
        } else if (count1 === 0) {
            cand1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            cand2 = num;
            count2 = 1;
        } else {
            // Matches neither → triplet cancellation
            count1--;
            count2--;
        }
    }

    // Phase 2 — Verify candidates actually appear > n/3 times
    count1 = 0;
    count2 = 0;
    for (const num of nums) {
        if (num === cand1) count1++;
        else if (num === cand2) count2++;
    }

    const result: number[] = [];
    const threshold = Math.floor(nums.length / 3);
    if (count1 > threshold) result.push(cand1);
    if (count2 > threshold) result.push(cand2);

    return result;
};

const input2 = [1,2];
console.log(majorityElement2(input2)); // [1, 2]