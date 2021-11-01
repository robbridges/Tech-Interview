/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     const ansArray = [];
//     for (let number of nums) {
//       if (ansArray.indexOf(number) === -1) {
//         ansArray.push(number);
//       } else {
//         return true
//       }
//     }
//     return false;
// };

var containsDuplicate = function(nums) {
  const numMap = new Map();
  for (number of nums) {
    if (numMap.has(number)) {
      return true;
    }
    numMap.set(number, true)
  }
  return false;
}


console.log(containsDuplicate([1,2,3,1]));
