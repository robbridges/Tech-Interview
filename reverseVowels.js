/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU'
    const vowelsFound = s.match(/[aeiou]/gi);
    let answer = ''
    for (let i =0; i < s.length; i++) {
      if (vowels.includes(s[i])) {
        answer += vowelsFound.pop();

      } else {
        answer += s[i];
      }
    }
    return answer;
};

console.log(reverseVowels('hello'))