// return the average salary minus the outliers of the maximum and minimum salary

/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
    let minimum = Infinity;
    let maximum = -Infinity;
    let sum = 0;
    for (let number of salary ) {
      minimum = Math.min(minimum, number)
      maximum = Math.max(maximum, number);
      sum += number
    }
    return ((sum - maximum - minimum) / (salary.length -2)) 
};

console.log(average([4000,3000,1000,2000]));