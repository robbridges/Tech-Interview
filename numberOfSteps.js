// return how many steps it takes to make the number 0

/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    let steps = 0;
    while (num !== 0) {
      num % 2 === 0 ? num /= 2 : num -= 1;
      steps++;
    }
    return steps;
};

console.log(numberOfSteps(123)); 