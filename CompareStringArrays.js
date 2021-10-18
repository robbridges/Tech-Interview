var arrayStringsAreEqual = function(word1, word2) {
  return mapString(word1) === mapString(word2);
};

const mapString = (word) => {
	let string = ""
	word.map((chars) => {
  	string = string + chars;
  })
  return string;
}