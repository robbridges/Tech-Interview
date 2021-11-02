/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
 var reversePrefix = function(word, ch) {
    if (word.indexOf(ch) === -1) {
      return word;
    }
    let index = word.indexOf(ch);
    let endOfWord = word.substring(index + 1, word.length);
    let beginning = word.substring(0, index + 1).split('').reverse().join('');
    return beginning + endOfWord;
};

console.log(reversePrefix('abcdefd', 'd'));