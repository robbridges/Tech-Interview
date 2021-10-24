

var romanToInt = function(s) {
  const cipherMap = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000,
  }
  
  let total = 0;
  
  for (let i = 0; i < s.length; i++) {
  const current = cipherMap[s[i]];
  let next = cipherMap[s[i + 1]];
  current < next ? total -= current : total += current;
  }
  return total;
};
console.log(romanToInt("IV"));
