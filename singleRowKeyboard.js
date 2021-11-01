/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */

var calculateTime = function(keyboard, word) {
    let currentIndex = 0;
    let totalMoves = 0;
    for (let letter of word) {
      currentIndex = keyboard.indexOf(letter);
      totalMoves += Math.abs(currentIndex - currentIndex);
      console.log(keyboard.indexOf(letter));
    }
    return totalMoves;
};

console.log(calculateTime("abcdefghijklmnopqrstuvwxyz", "cba"))