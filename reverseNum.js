/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const answer = x < 0 ? parseInt(x.toString()
    .split('')
    .reverse()
    .join('')) * -1 
    : 
    parseInt(x.toString()
    .split('')
    .reverse()
    .join(''));

    if (answer < -2147483648 || answer > 2147483647 ) {
      return 0;
    }
    return answer
    
};

console.log(reverse(-123));