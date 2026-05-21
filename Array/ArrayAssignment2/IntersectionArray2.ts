/** 
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 */

function intersect2(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];
  const visited: boolean[] = new Array(nums2.length).fill(false);

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      // Match found and not already used
      if (nums1[i] === nums2[j] && !visited[j]) {
        result.push(nums1[i]);
        visited[j] = true;
        break;
      }
    }
  }

  return result;
}
const inputIntersection3 = [1, 2, 2, 1];
const inputIntersection4 = [2];
console.log(
  "Intersection of Two Arrays:",
  intersect2(inputIntersection3, inputIntersection4),
); // [2]
