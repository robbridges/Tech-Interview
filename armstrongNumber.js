/*check if each number is an armstrong number, that means that for ever how many digits it has, each number to the third power equals that number. 
For example 153 would be 1pow3 + 5pow3 plus 3pow3

/**
 * @param {number} n
 * @return {boolean}
 */
 var isArmstrong = function(n) {
   n = n.toString().split('')
   let total = 0;
   for (let number of n) {
     total += Math.pow(number, n.length)
   }
   return total === parseInt(n.join(''));
};

console.log(isArmstrong(123));