/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    const newArray = [];
    for (let i = 0; i < nums.length; i++) {
      if(i + k < nums.length) {
        newArray[i + k] = nums[i]
      } else {
        newArray[(i + k) % (nums.length)] = nums[i];
      }
    }
    nums = newArray;
    return nums;
};

let rotate2 = function(nums,k) {
  
}

console.log(rotate([1,2,3,4,5,6,7], 3)) // [3,99,-1,-100]