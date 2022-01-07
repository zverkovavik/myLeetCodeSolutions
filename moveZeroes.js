// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

const moveZeroes = function(nums) {
    let counter = 0;
    for (let index = 0; index < nums.length; index++) {
        if (!nums[index]) {
            nums.splice(index, 1);
            counter++;
            index--;
        }
    };
    const arrayLength = nums.length;
    nums.length = arrayLength + counter;
    return nums.fill(0, arrayLength);
};
