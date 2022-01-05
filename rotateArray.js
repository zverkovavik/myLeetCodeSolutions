// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Constraints: 
// time execution
// k can be more than array length


const rotate = function(nums, k) {
    if (k > nums.length) {
        k = k % nums.length;
    }
    if (!k || k === nums.length) return nums;
    let rotatedPart = nums.slice(-k);
    nums.length -= k;
    nums.unshift(...rotatedPart);
    return nums;
};
