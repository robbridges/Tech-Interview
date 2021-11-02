const charMap = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8
}

/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {
    const firstValue = charMap[coordinates[0]];
    const secondvalue = parseInt(coordinates[1]);
    return (firstValue + secondvalue) % 2 === 1;
};

console.log(squareIsWhite('h8'));

