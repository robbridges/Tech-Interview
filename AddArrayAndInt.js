var addToArrayForm = function(num, k) {
  let numberString = '';
  num.forEach(number => {
    numberString = numberString + number;
  })
  const numberToConvert = BigInt(numberString) + BigInt(k);
  return numberToConvert.toString().split('');
};

console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1));