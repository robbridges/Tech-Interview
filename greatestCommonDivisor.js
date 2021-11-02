/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let minimum = Infinity;
    let maximum = -Infinity
    for (let number of nums) {
      minimum = Math.min(minimum, number);
      maximum = Math.max(maximum, number);
    }
    return greatestCommonDivisor(minimum, maximum);
};
// I don't really like recursion, but it's highly appropriate for this, if num 2 doesn't exist return num 1, and continually get the remainder of num 1 divided by num 2. 
const greatestCommonDivisor = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return greatestCommonDivisor(num2, num1 % num2);
}
 
console.log(findGCD([7,5,6,8,3]));