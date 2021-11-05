/* You are given an array on sorted numbers, square each number then sort it
while this seems simple enough the input can be large, so maybe calling the sort
method isn't best, is there a better way of doing it?

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let start = 0;
    let end = nums.length -1;
    let ans = []
    for (let i = nums.length -1; i >= 0; i--) {
      // go through each value, comparing the abs of the start index to the end index

      if (nums[start] ** 2 < nums[end] ** 2) {
        // if second pointer is bigger add it in the current index place and decrement the pointer closer to start
        ans[i] = nums[end] ** 2;
        end -= 1;
      } else {
        // if start is bigger add it in the current index  and increment start by one
        ans[i] = nums[start] ** 2;
        start += 1;
      }
    }
    return ans;
};

console.log(sortedSquares([-7,-3,2,3,11]))