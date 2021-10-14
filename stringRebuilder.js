// you are given two variables. A string, and an array of indexes, that tells you where that letter is supposed to go 

// for example Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5] : the second letter here is our first, so it should be the first object pushed to the array, then find index 1... ect


var restoreString = function(s, indices) {
  // create a new array
  const newArray = [];
  s = s.split('');
  for (i = 0; i < indices.length; i++) {
    // find where index 0...indices.length is located in the indexes form save it to a variable
    const char =indices.indexOf(i)
    // now that we know the index we can easily push that value to the new array from the shuffled string
    newArray.push(s[char]);
    
  }
  return newArray.join('');
  
};

console.log(restoreString('aaiougrt', [4,0,2,6,7,3,1,5]));