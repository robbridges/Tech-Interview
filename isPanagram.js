/**
 * @param {string} sentence
 * @return {boolean}
 */
// doing a bit of a refresher before interview tomorrow, this is simple enough, a set only contains unique values. So if the value of the set is 26, it contains the letter of every alphabet.
 var checkIfPangram = function(sentence) {
  const set = new Set();
  for ( let char of sentence) {
  	set.add(char);
  }
  return set.size === 26;
};