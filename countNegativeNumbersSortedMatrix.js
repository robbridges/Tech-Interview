

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
   let count = 0;
   for (let array of grid) {
     count += negativePerEach(array);
     
   }
   return count;
   
};

const negativePerEach = (array) => {
  let count = 0;
  let end = array.length -1;
  while (end >= 0) {
    
    
    if (array[end] < 0) {
      count++
      end--
    } else {
      break;
    }
    
    
  }
  return count;
}



console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))
console.log(countNegatives([[5,1,0],[-5,-5,-5]]))

