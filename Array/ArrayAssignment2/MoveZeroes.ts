
function moveZeroes(nums: number[]): void {
    let left=0
    for(let right=0;right<nums.length;right++){
        if(nums[right]!==0){
            [nums[left], nums[right]] = [nums[right], nums[left]]; // swap
            left++;
        }
    }  
    
};

const nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums); // [1,3,12,0,0]