// you are given a number n, that is where your array should be split. split the array at that index, then add the character the the specific index into the array

var shuffle = function(nums, n) {
  const newArray = [];
  const firstHalf = nums.splice(0, n);
  for (let i = 0; i < firstHalf.length; i++) {
    newArray.push(firstHalf[i], nums[i]);
    
  }
  return newArray
};
console.log(shuffle([1,2,3,4,4,3,2,1], 4));