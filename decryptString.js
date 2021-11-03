/**
 * @param {string} s
 * @return {string}
 */
 var freqAlphabets = function(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const charIndexArray = []
  let answer = ''
  for (let i = 0; i < s.length; i++) {
    let char = ''
    
    if (s[i + 2]=== '#') {
      char += s[i] + s[i + 1]
      i = i + 2;
      charIndexArray.push(char);  
    }
    else {
      char = s[i];
      charIndexArray.push(char)
    }
    

  }
  for (number of charIndexArray) {
    answer += alphabet.charAt(number -1);
  }
  return answer;
};

console.log(freqAlphabets("10#11#12"))