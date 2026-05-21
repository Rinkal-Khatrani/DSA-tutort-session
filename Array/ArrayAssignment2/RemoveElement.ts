/**
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100

 */

function removeElement(nums: number[], val: number): number {
    let left=0
    let right=nums.length-1

    while(left<=right){
        if(nums[left]===val && nums[right]=== val){            
            right--            
        }
        else if(nums[right]!== val && nums[left]===val){
            [nums[left],nums[right]]=[nums[right],nums[left]]            
            right--
            left++
        }        
        else{
            left++
        }
    } 
    console.log(nums); // For debugging purposes, to see the modified array
    return left
};

const inputRemoveElement = [0,1,2,2,3,0,4,2];
const val = 2;
const kVal = removeElement(inputRemoveElement, val);
console.log("Number of elements not equal to val:", kVal); // 5
