

var isPalindrome = function(s) {
  s = s.replace(/[\W_]/g, '').toLowerCase();
  return s === s.split('').reverse().join('');
  
};

console.log(validPalindrome("ab_a"))