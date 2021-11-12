const solve = (arrOne, arrTwo) => {
  let answer = []
  for (let i = 0; i < arrOne.length; i++) {
    if (arrTwo.includes(arrOne[i])) {
      answer.push(arrOne[i]);
    }
  }
  return answer;
};

console.log(solve([1, 2, 3, 4, 5], [4,2]))