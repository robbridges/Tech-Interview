const solve = (strArg, k) => {
  const hashMap = {}
  for (let char of strArg) {
    hashMap[char] = hashMap[char] + 1 || 1
  }
  console.log(Object.keys(hashMap)[k-1]);
};

console.log(solve("bbbbxyyzzz", 3));