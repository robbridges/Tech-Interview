/* compares each number (n1) to other other numbers in array (n2) if n1 > n2....n.length(); it increments a count. 
  We then return that single as an array. so that we have a returned array with each index repesenting how many numbers were smaller than that count.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
  const answerArray = [];
  nums.map((number) => {
    let count =0 
    for (let compareNumber of nums) {
     if (number > compareNumber) {
       count++
     }
   }
   answerArray.push(count);
  })
  return answerArray;
};