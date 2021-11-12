const solve = (strArg) => {
  const charMap = {}
  for (char of strArg) {
    charMap[char] = charMap[char] + 1 || 1
  }
  for (char in charMap) {
    if (charMap[char] % 2 !== 0) {
      return false;
    }
  }
  return true;
};

console.log(solve("abcdeffgg"))