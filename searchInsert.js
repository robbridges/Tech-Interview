const searchInsert = (nums, target) => {
  let start = 0, end = nums.length - 1;
  while (star <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) l = mid + 1;
    else r = mid - 1;
  }
  return l;
};

const searchInsert = (nums, target) => {
  let start = 0;
  // the end at the beginning should always be the last element of our array
  let end = nums.length -1;
  // while start is less than or equal to end;
  while (start <= end) {
    // find the mid point of our array, rounded down
    let mid = Math.floor((start + end) /2 );
    // if the mid point matches our target return it
    if (nums[mid] === target) {
      return mid;
    }
    // if the mid point is smaller than the target work the last half of the array, as all elements to the left of mid would be smaller than target
    else if (nums[mid] < target) {
      start = mid + 1;
    // if the mid point is larger than the target, work the first half of our array, 
    } else {
      end = mid - 1;
    }
  }
  // once we either find the mid point, or start is equal to end, return the start;
  return start;
}


var searchInsert = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  
  while (low <= high) {
      let mid = Math.floor((high + low) / 2);
      if (nums[mid] == target) return mid;
      else if (nums[mid] > target) {
          high = mid - 1;
      } else {
          low = mid + 1;
      }
  }
  return low;
};