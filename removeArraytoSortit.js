/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
  const isSorted = arr => arr.every((v,i,a) => !i || a[i-1] <= v);
  
  for (let i = 0; i < nums.length; i++) {
    let array = nums;
    array.splice(i,1);
    console.log(array);
    array = nums;
    console.log(nums);
  }

};

console.log(canBeIncreasing([1,2,10,5,7]))