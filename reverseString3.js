// while I can easily just split the string and iterate through each word in the array and revrese it, 
// that seemed like a really greedy algorith, as reverse takes a lot effort
// answer below, I actually like this.

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  let result = ''
  let word = ''
  
  for (let i = 0; i < s.length; i++) {
      let val = s[i]
      if (val !== ' ') { 
          word = val + word 
      }
      else {
          result += (word + val)
          word = ''
      }
  }
  
  return result += (word)
};