/*
You are given an array of binary values, reverse it, then replace ones and zero's
*/

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  let newArray = []
  for (let array of image) {
    newArray.push(missyElliot(array));
  }
  return newArray;
};

let missyElliot = (array) => {
  array = array.reverse();
  for (i = 0; i < array.length; i++) {
    array[i] === 1 ? array[i] = 0 : array[i] = 1
  }
  return array
  
  
  
}
