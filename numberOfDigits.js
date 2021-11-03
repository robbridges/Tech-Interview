var findNumbers = function(nums) {
  let count = 0
  for (let number of nums) {
    number = number.toString();
    if (number.length % 2 === 0) {
      count ++
    }
  }
  return count;
};

console.log(findNumbers([555,901,482,1771]))