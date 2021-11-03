/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfDigits = function(nums) {
    const min = Math.min(...nums);
    const total = min
                  .toString()
                  .split('')
                  .reduce((a,b) => parseInt(a) + parseInt(b));
    if (total % 2 === 0) {
      return 1;
    }
    return 0;           
};

console.log(sumOfDigits([34,23,1,24,75,33,54,8]))