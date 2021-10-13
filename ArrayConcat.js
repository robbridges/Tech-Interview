var getConcatenation = function(nums) {
  /* const newArray = [...nums];
      for (number of nums) {
        newArray.push(number);
      }
      return newArray; */
      
  //return nums.concat(nums);
  return [...nums,...nums]
};
console.log(getConcatenation([3,2,1]));