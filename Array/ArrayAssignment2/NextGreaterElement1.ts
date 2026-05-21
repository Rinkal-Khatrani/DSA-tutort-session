/** Next Greater Element I
 * Given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2, return an array ans such that ans[i] is the next greater element as described.
 *
 * The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
 *
 * Example 1:
 * Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
 * Output: [-1,3,-1]
 *
 * Example 2:
 * Input: nums1 = [2,4], nums2 = [1,2,3,4]
 * Output: [3,-1]
 *
 * Constraints:
 * 1 <= nums1.length <= nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 * All integers in nums1 and nums2 are unique.
 * All the integers of nums1 also appear in nums2.
 */
// function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
//   const result: number[] = [];
//   for (let i = 0; i < nums1.length; i++) {
//     const index = nums2.indexOf(nums1[i]);
//     let nextGreater = -1;
//     for (let j = index + 1; j < nums2.length; j++) {
//       if (nums2[j] > nums1[i]) {
//         nextGreater = nums2[j];
//         break;
//       }
//     }
//     result.push(nextGreater);
//   }
//   return result;
// }

function nextGreaterElement(num1: number[], num2: number[]): number[] {
  const result = [];
  for (let i = 0; i < num1.length; i++) {
    let nextGreater = -1;

    let foundIndex = -1;
    for (let j = 0; j < num2.length; j++) {
      if (num1[i] === num2[j]) {
        foundIndex = j;
        break;
      }
    }

    for (let k = foundIndex + 1; k < num2.length; k++) {
      if (num2[k] > num1[i]) {
        nextGreater = num2[k];
        break; // ← stop at FIRST greater element
      }
    }

    result.push(nextGreater);
  }
  return result;
}
const inputNums1 = [4, 1, 2];
const inputNums2 = [1, 3, 4, 2];
console.log(
  "Next Greater Element:",
  nextGreaterElement(inputNums1, inputNums2),
); // [-1, 3, -1]

const inputNums3 = [2, 4];
const inputNums4 = [1, 2, 3, 4];
console.log(
  "Next Greater Element:",
  nextGreaterElement(inputNums3, inputNums4),
); // [3, -1]
