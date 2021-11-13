var permute = function(nums) {
  let results = [];

  let permutations = (current, remaining) => {
    if(remaining.length <= 0) results.push(current.slice());
    else {
      for(let i = 0; i < remaining.length; i++) { // Loop through remaining elements
        current.push(remaining[i]); // Insert the iH element onto the end of current
        permutations(current.slice(), remaining.slice(0, i).concat(remaining.slice(i+1))); // Recurse with inserted element removed
        current.pop(); 
      }
    }
  };

  permutations([], nums);
  return results;
};