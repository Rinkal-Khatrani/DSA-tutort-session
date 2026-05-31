/**
 * Given an array of integers and a pivot, partition the array in-place such that all elements less than the pivot come before all elements greater than or equal to the pivot. The relative order of the elements in each partition should be preserved.

Example 1:

Input: arr = [9, 12, 3, 5, 14, 10, 10], pivot = 10
Output: [9, 3, 5, 12, 14, 10, 10]
Explanation:
The elements less than pivot (10) are [9, 3, 5]. The elements greater than or equal to pivot (10) are [12, 14, 10, 10]. Notice that the order of the elements in each partition is preserved.
Example 2:

Input: arr = [-3, 4, -2, 6, -1], pivot = -1
Output: [-3, -2, -1, 4, 6]
Explanation:
The elements less than pivot (-1) are [-3, -2]. The elements greater than or equal to pivot (-1) are [4, 6]. Notice that the order of the elements in each partition is preserved.
 

Constraints:

1 <= arr.length <= 10^5
-10^6 <= arr[i] <= 10^6
-10^6 <= pivot <= 10^6  
 */

const pivotArray = (nums: number[], pivot: number): number[] => {
  const less: number[] = []; // p1 zone
  const equal: number[] = []; // p2 zone
  const greater: number[] = []; // p3 zone

  for (const num of nums) {
    if (num < pivot) less.push(num);
    else if (num === pivot) equal.push(num);
    else greater.push(num);
  }

  return [...less, ...equal, ...greater];
};

const pivotArray2 = (nums: number[], pivot: number): number[] => {
  const result = new Array(nums.length);

  let p1 = 0; // fills from left (less than pivot)
  let p3 = nums.length - 1; // fills from right (greater than pivot)
  let left = 0;
  let right = nums.length - 1;

  while (left <= nums.length - 1) {
    if (nums[left] < pivot) {
      result[p1++] = nums[left];
    }
    if (nums[right] > pivot) {
      result[p3--] = nums[right];
    }
    left++;
    right--;
  }

  // fill middle with pivot
  while (p1 <= p3) {
    result[p1++] = pivot;
  }

  return result;
};

const arr: number[] = [9, 12, 3, 5, 14, 10, 10];
const pivot = 10;

console.log("--- Partition by Pivot ---", pivotArray2(arr, pivot)); // [9, 3, 5, 12, 14, 10, 10]

const arr2: number[] = [-3, 4, -2, 6, -1];
const pivot2 = -1;

console.log("--- Partition by Pivot ---", pivotArray(arr2, pivot2)); // [-3, -2, -1, 4, 6]
