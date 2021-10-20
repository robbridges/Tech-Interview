/* 
  pretty straight forward, we are given a string as a sentence and
  another integer value, we only want the number of words from the second 
  argument

*/

/*
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
*/

var truncateSentence = function(s, k) {
  return s.split(' ').splice(0,k).join(' ');
};