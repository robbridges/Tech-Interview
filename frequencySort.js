var frequencySort = function(s) {
  let frequencyMap = {}
  for (let char of s) {
    frequencyMap[char] = frequencyMap[char] + 1 || 1;
  }
  return frequencyMap
};

console.log(frequencySort('tree'));