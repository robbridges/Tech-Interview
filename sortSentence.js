/*
 *
 * @param {string} s
 * @return {string}
*/
var sortSentence = function(s) {
  s = s.split(' ');
  let sorted = [];
  for (let i = 0; i <= s.length; i++) {
     for (let word of s) {
      if (word.includes(i.toString())) {
       sorted.push(word);
     }
    }
  }
  return sorted.join(' ').replace(/[0-9]/g, '');
}

console.log(sortSentence("is2 sentence4 This1 a3"))