var plusOne = function(digits) {
  let numberString = ''
  digits.forEach(number => {
    numberString = numberString + number;
  })
   const asNumber = BigInt(numberString) + BigInt(1);
  let NumArray = asNumber.toString().split('');
  return NumArray;
  

};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));